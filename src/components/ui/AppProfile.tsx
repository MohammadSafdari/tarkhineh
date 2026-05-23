import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

// ─── Types ────────────────────────────────────────────────────────────────────
interface MenuItem {
    id: string;
    label: string;
    icon: React.ReactNode;
}

interface AppProfileProps {
    isLoggedIn?: boolean;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const MENU_ITEMS: MenuItem[] = [
    { id: 'profile',  label: 'پروفایل',           icon: <PersonOutlineIcon fontSize="small" /> },
    { id: 'orders',   label: 'پیگیری سفارش',       icon: <LocalShippingOutlinedIcon fontSize="small" /> },
    { id: 'wishlist', label: 'علاقه‌مندی‌ها',        icon: <FavoriteBorderIcon fontSize="small" /> },
    { id: 'address',  label: 'آدرس‌های من',          icon: <LocationOnOutlinedIcon fontSize="small" /> },
    { id: 'logout',   label: 'خروج از حساب',        icon: <LogoutIcon fontSize="small" /> },
];

// ─── Styled: Dropdown Menu ────────────────────────────────────────────────────
const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: '8px',
        marginTop: theme.spacing(0.75),
        minWidth: 180,
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 4px 20px 0px',
        border: '1px solid rgba(0,0,0,0.06)',
        '& .MuiMenu-list': {
            padding: '0',
        },
        '& .MuiMenuItem-root': {
            direction: 'rtl',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            textAlign: 'right',
            gap: '4px',
            fontSize: '0.9rem',
            fontWeight: 400,
            color: theme.palette.secondary.main,
            paddingInline: theme.spacing(2.5),
            minHeight: 44,
            '&:hover': {
                backgroundColor: 'transparent',
                color: theme.palette.primary.main,
                '& .MuiSvgIcon-root': {
                    color: theme.palette.primary.main,
                },
            },
            '&:active': {
                backgroundColor: 'transparent',
            },
            '&.Mui-focusVisible': {
                backgroundColor: 'transparent',
            },
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.secondary.light,
                transition: 'color 0.2s ease',
            },
        },
        '& .MuiDivider-root': {
            margin: 0,
            borderColor: '#EDEDED',
        },
    },
}));

// ─── Component ────────────────────────────────────────────────────────────────
const AppProfile: React.FC<AppProfileProps> = ({ isLoggedIn = false }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if (!isLoggedIn) return;
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => setAnchorEl(null);

    return (
        <div>
            <Button
                id="profile-button"
                aria-controls={open ? 'profile-menu' : undefined}
                aria-haspopup={isLoggedIn ? 'true' : undefined}
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                disableRipple
                onClick={handleClick}
                endIcon={
                    isLoggedIn ? (
                        <KeyboardArrowDownIcon
                            sx={{
                                fontSize: '20px !important',
                                color: open ? 'primary.main' : 'inherit',
                                transition: 'transform 0.2s ease',
                                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                        />
                    ) : undefined
                }
                sx={{
                    padding: '8px',
                    minWidth: 'unset',
                    borderRadius:'4px',
                    backgroundColor: open ? 'primary.main' : 'info.dark',
                    cursor: isLoggedIn ? 'pointer' : 'default',
                    '&:active': {
                        backgroundColor: 'primary.main',
                    },
                    '& .MuiButton-endIcon': {
                        marginLeft: 0,
                        marginRight: '-2px',
                    },
                }}
            >
                <AccountCircleOutlinedIcon
                    sx={{
                        fontSize: 24,
                        color: open ? 'primary.contrastText' : 'primary.main',
                    }}
                />
            </Button>

            <StyledMenu
                id="profile-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{ list: { 'aria-labelledby': 'profile-button' } }}
            >
                {MENU_ITEMS.map((item, index) => (
                    <React.Fragment key={item.id} >
                        <MenuItem onClick={handleClose} disableRipple >
                            {item.icon}
                            {item.label}
                        </MenuItem>
                        {index < MENU_ITEMS.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </StyledMenu>
        </div>
    );
};

export default AppProfile;