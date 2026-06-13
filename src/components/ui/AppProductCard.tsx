"use client"

import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import AppCardButton from "@/src/components/ui/AppCardButton";
import {theme} from "@/src/theme/theme";

interface AppProductCardProps {
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    discountPercent?: number;
    rating?: number;
    ratingCount?: number;
    onAddToCart?: () => void;
    onFavorite?: () => void;
    isFavorited?: boolean;
}

const CardRoot = styled(Box)(({ theme }) => ({
    borderRadius: theme.shape.Sm,
    border: `1.5px solid ${theme.palette.info.light}`,
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    direction: 'rtl',
    cursor: 'pointer',
    transition: 'border-color 0.25s ease',
    '&:hover': {
        borderColor: theme.palette.primary.main,
    },
}));
const ImageWrapper = styled(Box)({
    position: 'relative',
    width: '100%',
    paddingTop: '75%',
    overflow: 'hidden',
});

const ProductImage = styled('img')({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
});

const ContentBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1.5, 2, 2),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.2),
}));

const MetaRow = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    direction: 'rtl',
});

const PriceRow = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    direction: 'rtl',
});

function formatPrice(n: number): string {
    return n.toLocaleString('fa-IR');
}

const AppProductCard: React.FC<AppProductCardProps> = ({
                                                           name,
                                                           image,
                                                           price,
                                                           originalPrice,
                                                           discountPercent,
                                                           rating,
                                                           ratingCount,
                                                       }) => {
    return (
        <CardRoot>
            <ImageWrapper>
                <ProductImage src={image} alt={name} />
            </ImageWrapper>

            <ContentBox>
                <Typography
                    sx={{
                        textAlign: 'center',
                        color: 'secondary.main',
                        fontSize: theme.typography.h7,
                    }}
                >
                    {name}
                </Typography>

                <MetaRow>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <FavoriteBorderIcon sx={{ fontSize: 16, color: 'secondary.light' }} />
                        <Typography variant="bodySM" sx={{ color: 'secondary.light' }}>
                            افزودن به علاقمندی‌ها
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",gap:"8px"}}>
                    {originalPrice && (
                        <Typography
                            sx={{
                                fontSize: theme.typography.captionSM,
                                color: 'secondary.light',
                                textDecoration: 'line-through',
                            }}
                        >
                            {formatPrice(originalPrice)}
                        </Typography>
                    )}
                    {discountPercent && (
                        <Box
                            sx={{
                                backgroundColor: 'error.light',
                                color: 'error.main',
                                borderRadius: theme.shape.Sm,
                                px: theme.spacing('8px'),
                                fontSize: theme.typography.captionSM,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            %{discountPercent}
                        </Box>
                    )}
                    </Box>
                </MetaRow>

                <PriceRow>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <StarIcon sx={{ fontSize: 16, color: 'warning.main' }} />
                        <Typography sx={{fontSize:theme.typography.buttonSM, color:theme.palette.secondary.light}}>5</Typography>
                        {rating !== undefined && (
                            <Typography sx={{ color: 'secondary.main',fontSize:theme.typography.buttonSM, fontWeight: 600 }}>
                                {rating}
                            </Typography>
                        )}
                        {ratingCount !== undefined && (
                            <Typography sx={{ color: 'secondary.light',fontSize:theme.typography.captionSM }}>
                                ({formatPrice(ratingCount)} امتیاز)
                            </Typography>
                        )}
                    </Box>
                    <Typography
                        sx={{ fontWeight: 700, color: 'secondary.main',fontSize:theme.typography.bodyMD }}
                    >
                        {formatPrice(price)} تومان
                    </Typography>
                 </PriceRow>
                <AppCardButton/>
            </ContentBox>
        </CardRoot>
    );
};

export default AppProductCard;
export type { AppProductCardProps };