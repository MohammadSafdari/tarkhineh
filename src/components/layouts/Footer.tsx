import * as React from 'react';
import {
    Box,
    Typography,
    TextField,
    IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppButton from '@/src/components/ui/AppButton';
import AppTextField from "@/src/components/ui/AppTextField";
import {theme} from "@/src/theme/theme";


interface FooterLink {
    label: string;
    href?: string;
}

interface FooterColumn {
    title: string;
    links: FooterLink[];
}


const COLUMNS: FooterColumn[] = [
    {
        title: 'دسترسی آسان',
        links: [
            { label: 'پرسش‌های متداول' },
            { label: 'قوانین ترخینه' },
            { label: 'حریم خصوصی' },
        ],
    },
    {
        title: 'شعبه‌های ترخینه',
        links: [
            { label: 'شعبه اکباتان' },
            { label: 'شعبه چالوس' },
            { label: 'شعبه اقدسیه' },
            { label: 'شعبه ونک' },
        ],
    },
];

const SOCIAL_ICONS = [
    { icon: <TelegramIcon />, label: 'تلگرام' },
    { icon: <InstagramIcon />, label: 'اینستاگرام' },
    { icon: <TwitterIcon />, label: 'توییتر' },
];


const FooterRoot = styled(Box)({
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    direction: 'rtl',
});

const BgImage = styled('img')({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    filter: 'brightness(0.35)',
    zIndex: 0,
});

const ContentGrid = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: theme.spacing(4),
    padding: theme.spacing(5, 6),
    alignItems: 'start',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr 1fr',
        gap: theme.spacing(3),
        padding: theme.spacing(4, 3),
    },
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
        padding: theme.spacing(3, 2),
    },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    ...theme.typography.h5,
    color: theme.palette.secondary.contrastText,
    marginBottom: theme.spacing(2),
    fontWeight: 700,
}));

const FooterLink = styled(Typography)(({ theme }) => ({
    ...theme.typography.captionLG,
    color: theme.palette.info.main,
    marginBottom: theme.spacing(2),
    cursor: 'pointer',
    transition: 'color 0.2s',
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));

const TextAreaField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        backgroundColor: 'transparent',
        borderRadius: 6,
        direction: 'rtl',
        height: '150px',
        color: theme.palette.info.main,
        '& fieldset': {
            borderColor: 'rgba(255,255,255,0.25)',
            borderWidth: 1,
        },
        '&:hover fieldset': {
            borderColor: 'rgba(255,255,255,0.45)',
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
            borderWidth: 1,
        },
    },
    '& .MuiInputBase-input': {
        textAlign: 'right',
        fontSize: 14,
        color: theme.palette.info.main,
        '&::placeholder': {
            color: 'rgba(255,255,255,0.4)',
            opacity: 1,
        },
    },
}));

const CharCount = styled(Typography)(({ theme }) => ({
    ...theme.typography.captionSM,
    color: 'rgba(255,255,255,0.35)',
    marginTop: theme.spacing(0.5),
    textAlign: 'left',
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.info.main,
    padding: 6,
    transition: 'color 0.2s',
    '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
    },
    '& .MuiTouchRipple-root': { display: 'none' },
    '& svg': { fontSize: 22 },
}));

// ─── Component ────────────────────────────────────────────────────────────────

const Footer: React.FC = () => {
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const MAX_MESSAGE = 200;

    return (
        <FooterRoot>
            <BgImage
                src="https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=1400&q=80"
                alt="footer background"
            />

            <ContentGrid>
                {COLUMNS.map((col) => (
                    <Box key={col.title}>
                        <SectionTitle>{col.title}</SectionTitle>
                        {col.links.map((link) => (
                            <FooterLink key={link.label}>{link.label}</FooterLink>
                        ))}

                        {col.title === 'دسترسی آسان' && (
                            <Box sx={{ display: 'flex', gap: 0.5, mt: 2 }}>
                                {SOCIAL_ICONS.map((s) => (
                                    <SocialButton key={s.label} aria-label={s.label}>
                                        {s.icon}
                                    </SocialButton>
                                ))}
                            </Box>
                        )}
                    </Box>
                ))}


                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    <SectionTitle>پیام به ترخینه</SectionTitle>

                    <AppTextField
                        color='primary'
                        placeholder="نام و نام خانوادگی"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        size="small"
                        fullWidth
                    />
                    <AppTextField
                        color='primary'
                        placeholder="شماره تماس"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        size="small"
                        fullWidth
                    />
                    <AppTextField
                        color='primary'
                        placeholder="آدرس ایمیل (اختیاری)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size="small"
                        fullWidth
                    />

                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column',marginTop: '55px',gap:"5px"}}>
                    <Box>
                        <TextAreaField
                            placeholder="پیام شما"
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value.slice(0, MAX_MESSAGE))
                            }
                            multiline
                            rows={6}
                            fullWidth
                        />
                        <CharCount>
                            {message.length}/{MAX_MESSAGE}
                        </CharCount>
                    </Box>
                    <Box sx={{ display: 'flex',justifyContent:"end" }}>
                        <AppButton
                            color="secondary"
                            size="medium"
                            radius="Xs"
                            background={"transparent"}
                            border={true}
                            sx={{
                                color: theme.palette.secondary.contrastText,
                                borderColor: theme.palette.secondary.light,
                                width: '60%',
                            }}
                        >
                            ارسال پیام
                        </AppButton>
                    </Box>
                </Box>
            </ContentGrid>
        </FooterRoot>

    );
};

export default Footer;