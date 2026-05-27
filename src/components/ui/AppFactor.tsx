import React, { useState } from "react";
import {
    Box,
    Typography,
    Divider,
    IconButton,
    Button,
    styled,
    Paper,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { theme } from "@/src/theme/theme";
import AppButton from "@/src/components/ui/AppButton";
import PersonIcon from "@mui/icons-material/Person";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const Wrapper = styled(Paper)({
    borderRadius: theme.shape.Sm,
    width: 496,
    padding: theme.spacing(3),
});

const Header = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});

const ItemRow = styled(Box)<{ highlighted?: boolean }>(({ highlighted }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1, 2),
    backgroundColor: highlighted ? theme.palette.grey[100] : "transparent",
}));

const QuantityBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
    borderRadius: theme.shape.Xs,
    padding: theme.spacing(0.2, 0.5),
    backgroundColor: theme.palette.info.main,
});

const SummaryRow = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1.5),
});

const AppFactor: React.FC = () => {
    const [items, setItems] = useState<CartItem[]>([
        { id: 1, name: "پاستا سبزیجات",        price: 140000, quantity: 1 },
        { id: 2, name: "پیتزا اسفناج",          price: 252000, quantity: 1 },
        { id: 3, name: "پیتزا بادمجان و زیتون", price: 150000, quantity: 1 },
        { id: 4, name: "راناتویی",               price: 0,      quantity: 1 },
    ]);

    const discount = 63000;
    const shipping = 0;
    const total    = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const payable  = total - discount + shipping;

    const updateQty = (id: number, delta: number) => {
        setItems((prev) =>
            prev
                .map((item) => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
                .filter((item) => item.quantity > 0)
        );
    };

    const removeItem = (id: number) =>
        setItems((prev) => prev.filter((item) => item.id !== id));

    const formatPrice = (n: number) => n === 0 ? "۰" : n.toLocaleString("fa-IR");

    return (
        <Wrapper elevation={2}>
            <Header>
                <IconButton size="small" color="secondary">
                    <DeleteOutlineIcon fontSize="small" />
                </IconButton>
                <Typography sx={{ fontSize: theme.typography.bodyMD, color: theme.palette.secondary.main }}>
                    سبد خرید ({items.length.toLocaleString("fa-IR")})
                </Typography>
            </Header>

            <Divider />

            <Box sx={{ overflowX: "auto", height: "220px", marginBottom: "15px" }}>
                {items.map((item, index) => (
                    <ItemRow key={item.id} highlighted={index % 2 === 1}>
                        <QuantityBox>
                            {/* دکمه سمت چپ: اگه qty=1 سطل، وگرنه منفی */}
                            {item.quantity === 1 ? (
                                <IconButton
                                    color="primary"
                                    onClick={() => removeItem(item.id)}
                                    sx={{ p: 0.3 }}
                                >
                                    <DeleteOutlineIcon sx={{ fontSize: 16 }} />
                                </IconButton>
                            ) : (
                                <IconButton
                                    onClick={() => updateQty(item.id, -1)}
                                    sx={{ p: 0.2, color: theme.palette.primary.main }}
                                >
                                    <RemoveIcon sx={{ fontSize: 16 }} />
                                </IconButton>
                            )}

                            <Typography sx={{ fontSize: theme.typography.bodyXL, color: theme.palette.primary.main }}>
                                {item.quantity.toLocaleString("fa-IR")}
                            </Typography>

                            {/* دکمه سمت راست: همیشه مثبت */}
                            <IconButton
                                onClick={() => updateQty(item.id, 1)}
                                sx={{ p: 0.2, color: theme.palette.primary.main }}
                            >
                                <AddIcon sx={{ fontSize: 16 }} />
                            </IconButton>
                        </QuantityBox>

                        <Box textAlign="right">
                            <Typography sx={{ fontSize: theme.typography.bodySM, color: theme.palette.secondary.main }}>
                                {item.name}
                            </Typography>
                            {item.price > 0 && (
                                <Typography sx={{ fontSize: theme.typography.captionMD, color: theme.palette.secondary.light }}>
                                    تومان {formatPrice(item.price)}
                                </Typography>
                            )}
                        </Box>
                    </ItemRow>
                ))}
            </Box>

            <Divider />

            <SummaryRow>
                <Typography sx={{ fontSize: theme.typography.bodySM, color: theme.palette.secondary.light }}>
                    {formatPrice(discount)} تومان
                </Typography>
                <Typography sx={{ fontSize: theme.typography.bodySM, color: theme.palette.secondary.main }}>
                    تخفیف محصولات
                </Typography>
            </SummaryRow>

            <Divider />

            <SummaryRow>
                <Typography fontSize={13} color="text.secondary">
                    {formatPrice(shipping)} تومان
                </Typography>
                <Typography fontSize={13}>هزینه ارسال</Typography>
            </SummaryRow>

            <Box display="flex" gap={0.5} pb={1}>
                <Typography sx={{ fontSize: theme.typography.captionSM, color: theme.palette.warning.dark }}>
                    هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.
                </Typography>
                <InfoOutlinedIcon sx={{ fontSize: 16, color: "warning.main", mt: 0.2 }} />
            </Box>

            <Divider />

            <SummaryRow>
                <Typography sx={{ fontSize: theme.typography.bodySM, color: theme.palette.primary.main }}>
                    {formatPrice(payable)} تومان
                </Typography>
                <Typography sx={{ fontSize: theme.typography.bodySM, color: theme.palette.secondary.main }}>
                    مبلغ قابل پرداخت
                </Typography>
            </SummaryRow>

            <Divider />

            <AppButton
                color="primary"
                size="medium"
                radius="Xs"
                endContent={<PersonIcon />}
                fullWidth={true}
            >
                ورود/ثبت‌نام
            </AppButton>
        </Wrapper>
    );
};

export default AppFactor;