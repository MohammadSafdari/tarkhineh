import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface NavItem {
    label: string;
    id: string;
    hasDropdown?: boolean;
    items?: string[];
}

const NAV_ITEMS: NavItem[] = [
    { id: 'home', label: 'صفحه اصلی' },
    {
        id: 'branch',
        label: 'شعبه',
        hasDropdown: true,
        items: ['اکباتان', 'چالوس', 'اقدسیه', 'ونک'],
    },
    {
        id: 'menu',
        label: 'منو',
        hasDropdown: true,
        items: ['غذای اصلی', 'پیش غذا', 'دسر', 'نوشیدنی'],
    },
    { id: 'franchise', label: 'اعطای نمایندگی' },
    { id: 'about', label: 'درباره ما' },
    { id: 'contact', label: 'تماس با ما' },
];
const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 8,
        marginTop: theme.spacing(0.75),
        minWidth: 144,
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 4px 20px 0px',
        border: '1px solid rgba(0,0,0,0.06)',
        '& .MuiMenu-list': {
            padding: '6px 0',
        },
        '& .MuiMenuItem-root': {
            justifyContent: 'flex-end',
            ...theme.typography.bodySM, // ✅ سایز bodySM
            fontWeight: 400,
            color: theme.palette.secondary.main,
            paddingInline: theme.spacing(3),
            minHeight: 44,
            borderBottom: `1px solid #EDEDED`,
            '&:last-of-type': {
                borderBottom: 'none',
            },
            '&:hover': {
                backgroundColor: 'transparent',
                color: theme.palette.primary.main,
            },
            '&:active': {
                backgroundColor: 'transparent',
            },
            '&.Mui-focusVisible': {
                backgroundColor: 'transparent',
            },
        },
    },
}));
interface NavButtonProps extends ButtonProps {
    active?: boolean;
}

const NavButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'active',
})<NavButtonProps>(({ theme, active }) => ({
    color: active ? theme.palette.primary.main : theme.palette.secondary.light,
    fontWeight: active ? 700 : 400,
    ...theme.typography.bodyXL,
    textTransform: 'none',
    padding: '6px 4px',
    minWidth: 'unset',
    borderRadius: 0,
    backgroundColor: 'transparent',
    borderBottom: active
        ? `2px solid ${theme.palette.primary.main}`
        : '2px solid transparent',
    transition: 'color 0.2s ease, border-color 0.2s ease',
    '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
        borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
    '&:active': {
        backgroundColor: 'transparent',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'transparent',

    },
    '& .MuiTouchRipple-root': {
        display: 'none',
    },
    '& .MuiButton-endIcon': {
        marginLeft: 0,
        marginRight: theme.spacing(0.25),
    },
}));

function useMenuState() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    return { anchorEl, open, handleOpen, handleClose };
}

interface DropdownNavItemProps {
    item: NavItem;
    isActive: boolean;
    onActivate: (id: string) => void;
}

const DropdownNavItem: React.FC<DropdownNavItemProps> = ({
                                                             item,
                                                             isActive,
                                                             onActivate,
                                                         }) => {
    const { anchorEl, open, handleOpen, handleClose } = useMenuState();

    const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        onActivate(item.id);
        handleOpen(event);
    };

    const handleMenuClose = () => {
        handleClose();
    };

    return (
        <>
            <NavButton
                active={isActive || open}
                aria-controls={open ? `${item.id}-menu` : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleButtonClick}
                endIcon={
                    <KeyboardArrowDownIcon
                        sx={{
                            fontSize: '16px !important',
                            transition: 'transform 0.2s ease',
                            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                    />
                }
                disableRipple
            >
                {item.label}
            </NavButton>

            <StyledMenu
                id={`${item.id}-menu`}
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                slotProps={{
                    list: { 'aria-labelledby': `${item.id}-button` },
                }}
            >
                {item.items?.map((label) => (
                    <MenuItem
                        key={label}
                        onClick={handleMenuClose}
                        disableRipple
                    >
                        {label}
                    </MenuItem>
                ))}
            </StyledMenu>
        </>
    );
};

const AppMenuBar: React.FC = () => {
    const [activeId, setActiveId] = React.useState<string>('home');

    return (
        <Box
            component="nav"
            sx={{
                direction: 'rtl',
                display: 'flex',
                alignItems: 'center',
                gap: 2.5,
            }}
        >
            {NAV_ITEMS.map((item) =>
                item.hasDropdown ? (
                    <DropdownNavItem
                        key={item.id}
                        item={item}
                        isActive={activeId === item.id}
                        onActivate={setActiveId}
                    />
                ) : (
                    <NavButton
                        key={item.id}
                        active={activeId === item.id}
                        onClick={() => setActiveId(item.id)}
                        disableRipple
                    >
                        {item.label}
                    </NavButton>
                ),
            )}
        </Box>
    );
};

export default AppMenuBar;