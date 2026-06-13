"use client";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import AppButton from "@/src/components/ui/AppButton";
import {theme} from "@/src/theme/theme";
import AppSlider from "@/src/components/ui/AppSlider";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import AppChooseBranch from "@/src/components/ui/AppChooseBrand";

const branches = [
    {
        id: '1',
        name: 'شعبه مرکزی تهران',
        address: 'تهران، خیابان انقلاب، پلاک ۱۲۳',
        image: '/branch.png',
        onClick: () => console.log('رفت به شعبه ۱'),
    },
    {
        id: '2',
        name: 'شعبه سعادت‌آباد',
        address: 'تهران، سعادت‌آباد، میدان فرهنگ',
        image: '/branch.png',
    }, {
        id: '1',
        name: 'شعبه مرکزی تهران',
        address: 'تهران، خیابان انقلاب، پلاک ۱۲۳',
        image: '/branch.png',
        onClick: () => console.log('رفت به شعبه ۱'),
    },
    {
        id: '2',
        name: 'شعبه سعادت‌آباد',
        address: 'تهران، سعادت‌آباد، میدان فرهنگ',
        image: '/branch.png',
    },
];

const categories = [
    { id: 1, label: "غذای اصلی", image: "/image.png" },
    { id: 2, label: "پیش غذا", image: "/image.png" },
    { id: 3, label: "دسر", image: "/image.png" },
    { id: 4, label: "نوشیدنی", image: "/image.png" },
];

const Grid = styled(Box)({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "28px",
});

const CardWrapper = styled(Box)(({ theme }) => ({
    position: "relative",
    height: "50%",
    top: "50%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.Sm,
    shadow: theme.shadows[20],
}));

const ImageWrapper =styled(Box)(({ theme }) => ({
    display: "flex",
    bottom:"110px",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
}))


const features = [
    { id: 1, icon: <GridViewOutlinedIcon />, label: "کیفیت بالای غذاها" },
    { id: 2, icon: <PersonOutlineOutlinedIcon />, label: "پرسنلی مجرب و حرفه‌ای" },
    { id: 3, icon: <AssignmentOutlinedIcon />, label: "منوی متنوع" },
    { id: 4, icon: <WifiOutlinedIcon />, label: "محیطی دلنشین و آرام" },
];

const Section = styled(Box)({
    position: "relative",
    width: "100%",
    display: "flex",
    paddingTop: "50px",
    paddingBottom: "50px"
});

const BgImage = styled(Box)({
    position: "absolute",
    inset: 0,
    zIndex: 0,
    "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
});

const Overlay = styled(Box)({
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.65)",
    zIndex: 1,
});

const Content = styled(Box)({
    position: "relative",
    zIndex: 2,
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: "48px",
    padding: "48px 80px",
    direction: "rtl",
});

const FeaturesGrid = styled(Box)({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "32px 48px",
    flexShrink: 0,
});

const FeatureItem = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    color: "#ffffff",
    "& svg": {
        fontSize: "36px",
    },
});

const Divider = styled(Box)({
    width: "1px",
    alignSelf: "stretch",
    backgroundColor: "rgba(255,255,255,0.2)",
    flexShrink: 0,
});

const TextBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "16px",
    flex: 1,
});

const BranchesSection = styled(Box)({
    width:'full',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    paddingTop:'40px',
    paddingBottom:'40px',
    gap:'20px',
});

const Branches = styled(Box)({
    width:'90%',
    display:'flex',
    gap:'16px'
});

export default function Home() {
    return (
        <Box>
            <Box>
                <AppSlider/>
            </Box>
            <Box sx={{marginY:"30px"}}>
                <Typography
                    fontSize={theme.typography.h4.fontSize}
                    color="primary"
                    fontWeight={700}
                    textAlign={"center"}
                >
                    منوی رستوران
                </Typography>

                <Grid>
                    {categories.map((cat) => (
                        <CardWrapper key={cat.id}>
                            <ImageWrapper>
                                <Image
                                    src={cat.image}
                                    alt={cat.label}
                                    width={240}
                                    height={240}
                                />
                                <AppButton
                                    color="info"
                                    textColor="secondary"
                                    radius="Xs"
                                    sx={{
                                        minWidth:"120px",
                                        maxWidth:"150px"
                                    }}

                                >
                                    {cat.label}
                                </AppButton>
                            </ImageWrapper>
                        </CardWrapper>
                    ))}
                </Grid>
            </Box>
            <Section>
                <BgImage>
                    <Image
                        src="/branch.png"
                        alt="رستوران ترخینه"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </BgImage>
                <Overlay />

                <Content>
                    <FeaturesGrid>
                        {features.map((f) => (
                            <FeatureItem key={f.id}>
                                {f.icon}
                                <Typography
                                    variant="bodySM"
                                    color="#fff"
                                    textAlign="center"
                                >
                                    {f.label}
                                </Typography>
                            </FeatureItem>
                        ))}
                    </FeaturesGrid>

                    <Divider />

                    <TextBox>
                        <Typography variant="h5" color="#fff">
                            رستوران‌های زنجیره‌ای ترخینه
                        </Typography>
                        <Typography
                            variant="bodyMD"
                            color="rgba(255,255,255,0.85)"
                            textAlign="right"
                            lineHeight="2"
                        >
                            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
                            ماست که بیش از ۲۰ سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
                            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
                            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
                            شأن شما عزیزان ارائه دهیم.
                        </Typography>
                        <AppButton
                            variant="outlined"
                            sx={{
                                color: "#fff",
                                borderColor: "#fff",
                                "&:hover": { borderColor: "#fff", backgroundColor: "rgba(255,255,255,0.1)" },
                            }}
                        >
                            اطلاعات بیشتر
                        </AppButton>
                    </TextBox>
                </Content>
            </Section>
            <BranchesSection>
                    <Typography sx={{
                        fontSize: theme.typography.h4,
                        color: theme.palette.secondary.main,
                    }}>
                        ترخینه گردی
                    </Typography>
                <Branches>
                    {branches.map((branch) => (
                        <AppChooseBranch
                            key={branch.id}
                            branch={branch}
                            size="medium"
                        />
                    ))}
                </Branches>
            </BranchesSection>

        </Box>
    );
}