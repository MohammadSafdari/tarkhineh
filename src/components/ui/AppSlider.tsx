"use client"

import * as React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AppButton from "@/src/components/ui/AppButton";
import {theme} from "@/src/theme/theme";


interface Slide {
    id: number;
    image: string;
    title: string;
    onCta?: () => void;
}

interface AppSliderProps {
    slides?: Slide[];
    autoPlayInterval?: number;
}


const DEFAULT_SLIDES: Slide[] = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80',
        title: 'یک ماجراجویی آشپزی برای تمام حواس',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1400&q=80',
        title: 'طعم‌هایی که فراموش نمی‌شوند',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80',
        title: 'تجربه‌ای متفاوت در هر وعده',
    },
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80',
        title: 'یک ماجراجویی آشپزی برای تمام حواس',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1400&q=80',
        title: 'طعم‌هایی که فراموش نمی‌شوند',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80',
        title: 'تجربه‌ای متفاوت در هر وعده',
    },
];


const fadeIn = keyframes`
  from { opacity: 0; transform: scale(1.04); }
  to   { opacity: 1; transform: scale(1); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;


const SliderRoot = styled(Box)({
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    userSelect: 'none',
});

const SlideImage = styled('img')({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    animation: `${fadeIn} 0.7s ease forwards`,
});

const Overlay = styled(Box)({
    position: 'absolute',
    inset: 0,
    background:
        'linear-gradient(to right, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.25) 100%)',
});

const SlideContent = styled(Box)({
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: '0 80px',
    direction: 'rtl',
    textAlign: 'center',
    gap: 24,
});

const NavArrow = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 3,
    width: 40,
    height: 40,
    color: '#fff',
    backgroundColor: 'transparent',
    border: 'none',
    transition: 'color 0.2s',
    '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
    },
    '& .MuiTouchRipple-root': { display: 'none' },
    '& svg': { fontSize: 32 },
}));

const DotsWrapper = styled(Box)({
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'white',
    padding: '10px 25px',
    borderRadius: '25px 25px 16px 0',

    '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: -20,
        width: 20,
        height: 20,
        borderRadius: '0 0 100px 0px',
        boxShadow: '8px 9px 0px 5px white',
    },

    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        right: -20,
        width: 20,
        height: 20,
        borderRadius: '0 0 0 100px',
        boxShadow: '-8px 8px 0px 5px white',
    },
});

interface DotProps {
    active: boolean;
}

const Dot = styled('button')<DotProps>(({ active, theme }) => ({
    width: active ? 12 : 8,
    height: active ? 12 : 8,
    borderRadius: 100,
    border: active ?`2px solid ${theme.palette.info.light}` : 'none',
    cursor: 'pointer',
    padding: '4px',
    backgroundColor: active ? theme.palette.primary.main : theme.palette.secondary.light,
    transition: ' background-color 0.3s ease',
}));



const AppSlider: React.FC<AppSliderProps> = ({
                                                 slides = DEFAULT_SLIDES,
                                                 autoPlayInterval = 5000,
                                             }) => {
    const [current, setCurrent] = React.useState(0);
    const [animKey, setAnimKey] = React.useState(0); // remount image to retrigger animation

    const goTo = React.useCallback(
        (index: number) => {
            const next = (index + slides.length) % slides.length;
            setCurrent(next);
            setAnimKey((k) => k + 1);
        },
        [slides.length],
    );

    const prev = () => goTo(current - 1);
    const next = () => goTo(current + 1);

    React.useEffect(() => {
        if (!autoPlayInterval) return;
        const timer = setInterval(() => goTo(current + 1), autoPlayInterval);
        return () => clearInterval(timer);
    }, [current, autoPlayInterval, goTo]);

    const slide = slides[current];

    return (
        <SliderRoot sx={{ height:336 }}>

            <SlideImage key={animKey} src={slide.image} alt={slide.title} />

            <Overlay />

            <NavArrow onClick={prev} sx={{ left: 32 }} aria-label="قبلی">
                <ChevronLeftIcon />
            </NavArrow>

            <NavArrow onClick={next} sx={{ right: 32 }} aria-label="بعدی">
                <ChevronRightIcon />
            </NavArrow>

            <SlideContent key={`content-${animKey}`}>
                <Typography
                    sx={{
                        ...((slide as any).titleSx ?? {}),
                        color: theme.palette.info.main ,
                        fontWeight: 700,
                        marginTop: 8,
                        ...theme.typography.h2,
                        lineHeight: '160%',
                        animation: `${slideUp} 0.6s ease 0.1s forwards`,
                        opacity: 0,
                        direction: 'rtl',
                    }}
                >
                    {slide.title}
                </Typography>

                <Box sx={{ animation: `${slideUp} 0.6s ease 0.25s forwards`, opacity: 0 }}>
                    <AppButton
                        size='medium'
                        type='button'
                        radius="Sm"
                        sx={{paddingX:"28px"}}
                    >
                        سفارش آنلاین غذا
                    </AppButton>
                </Box>
            </SlideContent>

            <DotsWrapper>
                {slides.map((_, i) => (
                    <Dot key={i} active={i === current} onClick={() => goTo(i)} />
                ))}
            </DotsWrapper>
        </SliderRoot>
    );
};

export default AppSlider;