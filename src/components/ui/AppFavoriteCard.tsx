import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AppCardButton from "@/src/components/ui/AppCardButton";
import { theme } from "@/src/theme/theme";

interface AppFavoriteCardProps {
    name: string;
    image: string;
    price: number;
    rating?: number;
    onAddToCart?: () => void;
    onFavorite?: () => void;
}

const CardRoot = styled(Box)(({ theme }) => ({
    borderRadius: theme.shape.Sm,
    border: `1.5px solid ${theme.palette.info.light}`,
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
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
    paddingTop: '50%',
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

function formatPrice(n: number): string {
    return n.toLocaleString('fa-IR');
}

const AppFavoriteCard: React.FC<AppFavoriteCardProps> = ({
                                                             name,
                                                             image,
                                                             price,
                                                             rating = 0,
                                                             onAddToCart,
                                                             onFavorite,
                                                         }) => {
    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onFavorite?.();
    };

    return (
        <CardRoot>
            <ImageWrapper>
                <ProductImage src={image} alt={name} />
            </ImageWrapper>

            <ContentBox>
                <Box sx={{display: 'flex', alignItems: 'center',justifyContent:'space-between'}}>
                    <Typography
                        sx={{
                            fontWeight: 700,
                            textAlign: 'right',
                            color: 'secondary.main',
                            fontSize: theme.typography.h7,
                        }}
                    >
                        {name}
                    </Typography>
                    <FavoriteIcon
                        onClick={handleFavoriteClick}
                        sx={{ fontSize: 22, color: 'error.main', cursor: 'pointer' }}
                    />
                </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:"space-between" }}>
                        <Box>
                                {Array.from({ length: 5 }).map((_, i) =>
                                    i < rating ? (
                                        <StarIcon key={i} sx={{ fontSize: 18, color: 'warning.main' }} />
                                    ) : (
                                        <StarBorderIcon key={i} sx={{ fontSize: 18, color: 'warning.main' }} />
                                    )
                                )}
                        </Box>
                        <Typography
                            sx={{
                                color: 'secondary.main',
                                fontSize: theme.typography.bodyMD,
                                }}
                        >
                            {formatPrice(price)} تومان
                        </Typography>
                    </Box>
                <AppCardButton onClick={onAddToCart} />
            </ContentBox>
        </CardRoot>
    );
};

export default AppFavoriteCard;
export type { AppFavoriteCardProps };