import * as React from 'react';
import {
    Box,
    Typography,
    Dialog,
    IconButton,
    Rating,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

interface ProductImage {
    src: string;
    alt?: string;
}

interface AppProductInfoProps {
    open: boolean;
    onClose: () => void;
    name: string;
    description: string;
    mainImage: string;
    thumbnails?: ProductImage[];
    rating?: number;
    ratingCount?: number;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        borderRadius: theme.shape.Md ?? 16,
        overflow: 'hidden',
        width: '100%',
        maxWidth: 540,
        margin: theme.spacing(2),
        direction: 'rtl',
    },
    '& .MuiBackdrop-root': {
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
}));

const Header = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1.5, 2),
    borderBottom: `1px solid ${theme.palette.info.light}`,
    direction: 'rtl',
}));

const MainImageBox = styled(Box)({
    position: 'relative',
    width: '100%',
    paddingTop: '56%',
    overflow: 'hidden',
    backgroundColor: '#000',
});

const MainImg = styled('img')({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
});

const ThumbnailRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(1),
    padding: theme.spacing(1, 1.5),
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)',
}));

const ThumbImg = styled('img')<{ active?: boolean }>(({ theme, active }) => ({
    width: 64,
    height: 52,
    objectFit: 'cover',
    borderRadius: theme.shape.Sm ?? 8,
    border: active
        ? `2px solid ${theme.palette.primary.main}`
        : '2px solid rgba(255,255,255,0.4)',
    cursor: 'pointer',
    transition: 'border-color 0.2s ease',
    flexShrink: 0,
}));

const InfoBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1.5, 2, 2),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
    direction: 'rtl',
}));

const AppProductInfo: React.FC<AppProductInfoProps> = ({
                                                           open,
                                                           onClose,
                                                           name,
                                                           description,
                                                           mainImage,
                                                           thumbnails = [],
                                                           rating = 0,
                                                           ratingCount,
                                                       }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const allImages: ProductImage[] = [
        { src: mainImage, alt: name },
        ...thumbnails,
    ];

    const currentImage = allImages[activeIndex] ?? allImages[0];

    return (
        <StyledDialog open={open} onClose={onClose} fullWidth>
            {/* header */}
            <Header>
                <IconButton size="small" onClick={onClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
                <Typography
                    sx={{ fontWeight: 700, fontSize: 16, color: 'secondary.main', flex: 1, textAlign: 'center' }}
                >
                    اطلاعات محصول
                </Typography>
                {/* spacer to center title */}
                <Box sx={{ width: 32 }} />
            </Header>

            {/* main image + thumbnails overlay */}
            <MainImageBox>
                <MainImg src={currentImage.src} alt={currentImage.alt ?? name} />
                {allImages.length > 1 && (
                    <ThumbnailRow>
                        {allImages.map((img, i) => (
                            <ThumbImg
                                key={i}
                                src={img.src}
                                alt={img.alt ?? `تصویر ${i + 1}`}
                                active={i === activeIndex}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </ThumbnailRow>
                )}
            </MainImageBox>

            {/* info */}
            <InfoBox>
                {/* right: rating */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0.3 }}>
                    <Rating
                        value={rating}
                        precision={0.5}
                        readOnly
                        size="small"
                        sx={{ direction: 'ltr' }}
                    />
                    {ratingCount !== undefined && (
                        <Typography variant="bodySM" sx={{ color: 'secondary.light' }}>
                            ({ratingCount.toLocaleString('fa-IR')} نظر)
                        </Typography>
                    )}
                </Box>

                {/* left: name + description */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 0.4, flex: 1 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: 15, color: 'secondary.main' }}>
                        {name}
                    </Typography>
                    <Typography
                        variant="bodySM"
                        sx={{ color: 'secondary.light', textAlign: 'right', lineHeight: '170%' }}
                    >
                        {description}
                    </Typography>
                </Box>
            </InfoBox>
        </StyledDialog>
    );
};

export default AppProductInfo;
export type { AppProductInfoProps, ProductImage };