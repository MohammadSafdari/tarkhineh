import * as React from 'react';
import { Box, Typography, Card, CardMedia, Dialog, DialogContent, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import CloseIcon from '@mui/icons-material/Close';
import AppButton from '@/src/components/ui/AppButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { theme } from "@/src/theme/theme";

type BranchCardSize = 'small' | 'medium';

interface Branch {
    id: string;
    name: string;
    address: string;
    image: string;
    onClick?: () => void;
}

interface AppChooseBranchProps {
    branch: Branch;
    size?: BranchCardSize;
}

const CardRoot = styled(Card, {
    shouldForwardProp: (prop) => prop !== 'cardSize',
})<{ cardSize: BranchCardSize }>(({ theme, cardSize }) => ({
    position: 'relative',
    borderRadius: theme.shape.Sm,
    border: `1px solid ${theme.palette.info.light}`,
    boxShadow: 'none',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'border-color 0.25s ease',
    width: '100%',
    direction: 'rtl',

    '&:hover': {
        borderColor: theme.palette.primary.main,
    },

    ...(cardSize === 'medium' && {
        '&:hover .hover-overlay': { opacity: 1 },
        '&:hover .hover-btn': {
            opacity: 1,
            transform: 'translateY(0)',
        },
    }),
}));

const ImageWrapper = styled(Box)({
    position: 'relative',
    width: '100%',
});

const HoverOverlay = styled(Box)({
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.25s ease',
    zIndex: 2,
    cursor: 'zoom-in',
});

const OverlayIcon = styled(BrokenImageOutlinedIcon)({
    fontSize: 48,
    color: 'rgba(255,255,255,0.85)',
});

const MediumLayout = styled(Box)({ display: 'flex', flexDirection: 'column' });
const SmallLayout = styled(Box)({ display: 'flex', flexDirection: 'column' });

const TextBlock = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'cardSize',
})<{ cardSize: BranchCardSize }>(({ theme }) => ({
    padding: theme.spacing(1.5, 1.5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(0.5),
    backgroundColor: theme.palette.background.paper,
    flex: 1,
}));

const BranchName = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'cardSize',
})<{ cardSize: BranchCardSize }>(({ theme, cardSize }) => ({
    ...(cardSize === 'medium' ? theme.typography.h4 : theme.typography.h6),
    color: theme.palette.secondary.main,
    fontWeight: 700,
}));

const BranchAddress = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'cardSize',
})<{ cardSize: BranchCardSize }>(({ theme, cardSize }) => ({
    ...(cardSize === 'medium' ? theme.typography.bodyMD : theme.typography.bodySM),
    color: theme.palette.secondary.light,
    lineHeight: '160%',
    textAlign: 'center',
}));

const HoverButtonWrapper = styled(Box)({
    opacity: 0,
    transform: 'translateY(6px)',
    transition: 'opacity 0.25s ease, transform 0.25s ease',
    marginTop: 8,
});

const AppChooseBranch: React.FC<AppChooseBranchProps> = ({
                                                             branch,
                                                             size = 'medium',
                                                         }) => {
    const isMedium = size === 'medium';
    const imageHeight = isMedium ? 200 : 100;

    const [imageModalOpen, setImageModalOpen] = React.useState(false);

    const handleImageClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setImageModalOpen(true);
    };

    const handleModalClose = () => {
        setImageModalOpen(false);
    };

    const imageBlock = (
        <ImageWrapper sx={{ height: imageHeight, flexShrink: 0 }}>
            <CardMedia
                component="img"
                image={branch.image}
                alt={branch.name}
                sx={{ width: '100%', height: imageHeight, objectFit: 'cover', display: 'block' }}
            />
            <HoverOverlay
                className="hover-overlay"
                onClick={handleImageClick}
                sx={{ opacity: 1, cursor: 'zoom-in' }}
            >
                {isMedium && <OverlayIcon />}
            </HoverOverlay>
        </ImageWrapper>
    );

    const textBlock = (
        <TextBlock cardSize={size}>
            <BranchName
                cardSize={size}
                sx={{ color: theme.palette.secondary.main }}
            >
                {branch.name}
            </BranchName>
            <BranchAddress cardSize={size}>{branch.address}</BranchAddress>

            {isMedium && (
                <HoverButtonWrapper className="hover-btn">
                    <AppButton
                        color="primary"
                        size="small"
                        type="button"
                        radius="Sm"
                        variant="outlined"
                        onClick={branch.onClick}
                        endContent={<ArrowBackIosNewIcon sx={{ marginRight: '5px' }} />}
                        sx={{ marginRight: '20px', paddingX: '20px' }}
                    >
                        صفحه شعبه
                    </AppButton>
                </HoverButtonWrapper>
            )}
        </TextBlock>
    );

    return (
        <>
            <CardRoot cardSize={size} onClick={isMedium ? undefined : branch.onClick}>
                {isMedium ? (
                    <MediumLayout>
                        {imageBlock}
                        {textBlock}
                    </MediumLayout>
                ) : (
                    <SmallLayout>
                        {imageBlock}
                        {textBlock}
                    </SmallLayout>
                )}
            </CardRoot>

            <Dialog
                open={imageModalOpen}
                onClose={handleModalClose}
                maxWidth="md"
                fullWidth
                slotProps={{
                    backdrop: {
                        sx: { backgroundColor: 'rgba(0, 0, 0, 0.85)' },
                    },
                }}
                sx={{
                    '& .MuiDialog-paper': {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        overflow: 'visible',
                    },
                }}
            >
                <DialogContent
                    sx={{
                        p: 0,
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'visible',
                    }}
                >
                    <IconButton
                        onClick={handleModalClose}
                        size="small"
                        aria-label="بستن"
                        sx={{
                            position: 'absolute',
                            top: -40,
                            right: 0,
                            color: 'common.white',
                            bgcolor: 'rgba(255,255,255,0.15)',
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.25)' },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Box
                        component="img"
                        src={branch.image}
                        alt={branch.name}
                        sx={{
                            maxWidth: '100%',
                            maxHeight: '80vh',
                            objectFit: 'contain',
                            borderRadius: 1,
                            display: 'block',
                        }}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
};

export default AppChooseBranch;
export type { AppChooseBranchProps, Branch, BranchCardSize };