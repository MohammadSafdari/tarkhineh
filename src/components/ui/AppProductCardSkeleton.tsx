import * as React from 'react';
import { Box, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';

const CardRoot = styled(Box)(({ theme }) => ({
    borderRadius: theme.shape.Sm,
    border: `1.5px solid ${theme.palette.info.light}`,
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    direction: 'rtl',
}));

const ImageWrapper = styled(Box)({
    position: 'relative',
    width: '100%',
    paddingTop: '75%',
});

const AbsoluteSkeleton = styled(Skeleton)({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    transform: 'none',
});

const ContentBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1.5, 2, 2),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.2),
}));

const AppProductCardSkeleton: React.FC = () => {
    return (
        <CardRoot>
            {/* image */}
            <ImageWrapper>
                <AbsoluteSkeleton variant="rectangular" />
            </ImageWrapper>

            <ContentBox>
                {/* name */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Skeleton variant="text" width="55%" height={28} />
                </Box>

                {/* meta row: favorite | originalPrice + discount */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', gap: 0.8 }}>
                        <Skeleton variant="rounded" width={16} height={16} />
                        <Skeleton variant="text" width={90} height={16} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                        <Skeleton variant="text" width={60} height={16} />
                        <Skeleton variant="rounded" width={32} height={22} sx={{ borderRadius: '6px' }} />
                    </Box>
                </Box>

                {/* price row: rating + price */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                        <Skeleton variant="rounded" width={18} height={18} />
                        <Skeleton variant="text" width={30} height={16} />
                        <Skeleton variant="text" width={60} height={16} />
                    </Box>
                    <Skeleton variant="text" width={100} height={24} />
                </Box>

                {/* button */}
                <Skeleton variant="rounded" width="100%" height={44} sx={{ borderRadius: '8px' }} />
            </ContentBox>
        </CardRoot>
    );
};

export default AppProductCardSkeleton;