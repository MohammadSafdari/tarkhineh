import React from "react";
import {
    Box,
    Typography,
    Avatar,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    Paper,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { theme } from "@/src/theme/theme";

const PanelWrapper = styled(Paper)({
    borderRadius: theme.shape.Sm,
    width: 260,
    paddingTop: theme.spacing(2),
    overflow: "hidden",
});
const HeaderBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    paddingInline: theme.spacing(1),
    paddingBottom: theme.spacing(1),
});
const UserInfoBox = styled(Box)({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(0.3),
});
const UserAvatar = styled(Avatar)({
    width: 76,
    height: 76,
    backgroundColor: theme.palette.grey[200],
    flexShrink: 0,
    border: `1px solid ${theme.palette.secondary.light}`,
});
const MenuDivider = styled(Divider)({
    marginInline: theme.spacing(1),
    borderColor: theme.palette.secondary.light,
});
const MenuList = styled(List)({
    padding: theme.spacing(0),
});
const MenuItem = styled(ListItemButton)({
    paddingInline: theme.spacing(1),
    paddingBlock: theme.spacing(1),
    gap: theme.spacing(0.5),
    "&:hover": {
        backgroundColor: "transparent",
        color: theme.palette.primary.main,
        "& .MuiListItemIcon-root": {
            color: theme.palette.primary.main,
        },
    },
});
const LogoutItem = styled(ListItemButton)({
    paddingInline: theme.spacing(1),
    paddingBlock: theme.spacing(1),
    gap: theme.spacing(0.5),
    "&:hover": {
        backgroundColor: "transparent"
    },
});
const MenuIcon = styled(ListItemIcon)({
    minWidth: "unset",
    color: theme.palette.text.primary,
});
const menuItems = [
    { label: "پروفایل",         icon: <PersonOutlineIcon />      },
    { label: "پیگیری سفارشات", icon: <InventoryOutlinedIcon />  },
    { label: "علاقمندی‌ها",    icon: <FavoriteBorderIcon />     },
    { label: "آدرس‌های من",    icon: <LocationOnOutlinedIcon /> },
];

const AppPanel: React.FC = () => {
    return (
        <PanelWrapper>
            <HeaderBox>
                <UserInfoBox>
                    <Typography sx={{
                        fontSize: theme.typography.bodyMD,
                        color: theme.palette.secondary.main,
                    }}>
                        سردار وظیفه
                    </Typography>
                    <Typography sx={{
                        fontSize: theme.typography.captionMD,
                        color: theme.palette.secondary.main,
                    }}>
                        ۰۹۱۴ ۸۶۴ ۳۳۵۰
                    </Typography>
                </UserInfoBox>
                <UserAvatar />
            </HeaderBox>

            <MenuDivider />

            <MenuList>
                {menuItems.map((item) => (
                    <MenuItem key={item.label}>
                        <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                                fontSize: 14,
                                textAlign: "right",
                            }}
                        />
                        <MenuIcon>{item.icon}</MenuIcon>
                    </MenuItem>
                ))}

                <LogoutItem>
                    <ListItemText
                        primary="خروج"
                        primaryTypographyProps={{
                            fontSize: 14,
                            textAlign: "right",
                            color: theme.palette.error.main,
                            fontWeight: 600,
                        }}
                    />
                    <ListItemIcon sx={{ minWidth: "unset", color: theme.palette.error.main }}>
                        <LogoutIcon sx={{ transform: "scaleX(-1)" }} />
                    </ListItemIcon>
                </LogoutItem>
            </MenuList>
        </PanelWrapper>
    );
};

export default AppPanel;