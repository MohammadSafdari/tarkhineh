import React from "react";
import {Box, Card, CardContent, CardMedia, Typography, Chip, Stack,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import AppCardButton from "@/src/components/ui/AppCardButton";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";


export interface MenuCardProps {
    title: string;
    description: string;
    originalPrice: number;
    discountedPrice: number;
    discountPercent: number;
    rating: number;
    maxRating?: number;
    imageUrl: string;
    currency?: string;
    onAddToCart?: () => void;
}

const StyledCard = styled(Card)(({ theme }) => ({
    display: "flex",
    gap:"10px",
    borderRadius: theme.shape.Sm,
    height:"158x",
    overflow: "hidden",
    border: `1px solid ${theme.palette.info.main}`,
    backgroundColor: theme.palette.secondary.contrastText,
    direction: "rtl",
    cursor: 'pointer',
    transition: 'border-color 0.25s ease',
    '&:hover': {
        borderColor: theme.palette.primary.main,
    },
}));


const DiscountChip = styled(Chip)(({ theme }) => ({
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.main,
    fontFamily: theme.typography.fontFamily,
    ...theme.typography.captionSM,
    borderRadius: theme.shape.Xll,
    "& .MuiChip-label": {
        padding: `0 ${theme.spacing(1)}`,
    },
}));


const AppCardMenu: React.FC<MenuCardProps> = ({
                                                  title,
                                                  description,
                                                  originalPrice,
                                                  discountedPrice,
                                                  discountPercent,
                                                  rating,
                                                  imageUrl,
                                                  currency = "تومان",
                                              }) => {
    const theme = useTheme();

    const formattedOriginal = originalPrice.toLocaleString("fa-IR");
    const formattedDiscounted = discountedPrice.toLocaleString("fa-IR");

    return (
        <StyledCard>
            <CardMedia
                component="img"
                image={imageUrl}
                alt={title}
                sx={{
                    width: 150,
                    flexShrink: 0,
                }}
            />
            <CardContent
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: `${theme.spacing(1.75)} ${theme.spacing(2)} !important`,
                    gap: 0.5,
                }}
            >
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <Typography
                        variant="h6"
                        sx={{
                            color: theme.palette.secondary.dark,
                            textAlign: "right",
                        }}
                    >
                        {title}
                    </Typography>
                    <FavoriteIcon
                        sx={{ fontSize: 24, color: 'error.main', cursor: 'pointer' }}
                    />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center",justifyContent: "space-between" }}>
                    <Typography
                        variant="bodySM"
                        sx={{
                            color: theme.palette.secondary.main,
                            textAlign: "right",
                        }}
                    >
                        {description}
                    </Typography>

                    <Stack direction="column" alignItems="center" spacing={1} sx={{ mt: 0.5 }}>
                        <Box sx={{display: "flex", gap:"4px"}}>
                            <Typography
                                variant="captionMD"
                                sx={{
                                    color: theme.palette.secondary.light,
                                    textDecoration: "line-through",
                                    direction: "ltr",
                                }}
                            >
                                {formattedOriginal}
                            </Typography>
                            <DiscountChip label={`%${discountPercent}`} size="small" />
                        </Box>

                        <Typography
                            sx={{
                                color: theme.palette.secondary.dark,
                                fontSize: theme.typography.bodySM,
                                textAlign: "right",
                            }}
                        >
                            {formattedDiscounted}{" "}
                            <Box
                                component="span"
                                sx={{
                                    ...theme.typography.captionMD,
                                    color: theme.palette.secondary.light,
                                }}
                            >
                                {currency}
                            </Box>
                        </Typography>

                    </Stack>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems:"center", mt: 0.5 }}>
                    <Box sx={{width:'50%'}}>
                        {Array.from({ length: 5 }).map((_, i) =>
                            i < rating ? (
                                <StarIcon key={i} sx={{ fontSize: 18, color: 'warning.main' }} />
                            ) : (
                                <StarBorderIcon key={i} sx={{ fontSize: 18, color: 'warning.main' }} />
                            )
                        )}
                    </Box>

                    <AppCardButton
                        fullWidth={true}
                    />
                </Box>
            </CardContent>
        </StyledCard>
    );
};

export default AppCardMenu;

