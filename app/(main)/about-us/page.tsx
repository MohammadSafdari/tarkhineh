import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Button, Divider } from "@mui/material";

const teamMembers = [
  {
    name: "علی رضایی",
    role: "مدیرعامل و بنیان‌گذار",
    image: "/images/team/ali.jpg",
    bio: "بیش از ۱۰ سال تجربه در حوزه فناوری",
  },
  {
    name: "سارا احمدی",
    role: "مدیر محصول",
    image: "/images/team/sara.jpg",
    bio: "متخصص تجربه کاربری و طراحی محصول",
  },
  {
    name: "محمد کریمی",
    role: "سرپرست توسعه",
    image: "/images/team/mohammad.jpg",
    bio: "عاشق کد زدن و معماری سیستم‌های مقیاس‌پذیر",
  },
];

export default function AboutUs() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" fontWeight={700} gutterBottom>
            درباره ما
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 700, mx: "auto", opacity: 0.9 }}>
            ما یک تیم جوان و باانگیزه هستیم که هدفمان ایجاد تجربه‌ای بهتر برای کاربران ایرانی است.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* داستان ما */}
        <Grid container spacing={6} alignItems="center">
            <Typography variant="h4" gutterBottom fontWeight={600}>
              داستان ما
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: "text.secondary" }}>
              در سال ۱۴۰۲ با یک ایده ساده اما قدرتمند شروع کردیم: «ایجاد محصولی که هم کاربردی باشد و هم لذت استفاده از آن را به کاربر بدهد».
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: "text.secondary" }}>
              امروز با افتخار به هزاران کاربر خدمات ارائه می‌دهیم و همچنان در حال رشد و یادگیری هستیم.
            </Typography>
          </Grid>
            <Box
              component="img"
              src="/images/about-us.jpg" // تصویر خودت رو جایگزین کن
              alt="درباره ما"
              sx={{
                width: "100%",
                borderRadius: 4,
                boxShadow: 3,
              }}
            />

        <Divider sx={{ my: 8 }} />

        {/* مأموریت و ارزش‌ها */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" gutterBottom>
            مأموریت ما
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mx: "auto", color: "text.secondary" }}>
            ساده‌سازی زندگی دیجیتال مردم ایران با فناوری مدرن و طراحی زیبا
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {["نوآوری", "کیفیت", "اعتماد", "سرعت"].map((value) => (
              <Card sx={{ textAlign: "center", py: 3 }}>
                <CardContent>
                  <Typography variant="h3" color="primary" gutterBottom>
                    ★
                  </Typography>
                  <Typography variant="h6">{value}</Typography>
                </CardContent>
              </Card>
          ))}
        </Grid>

        <Divider sx={{ my: 8 }} />

        {/* تیم ما */}
        <Typography variant="h4" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          تیم ما
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
              <Card sx={{ height: "100%", textAlign: "center" }}>
                <Box sx={{ pt: 4 }}>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: "auto",
                      border: "4px solid",
                      borderColor: "primary.main",
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="primary" gutterBottom>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
          ))}
        </Grid>

        {/* کال تو اکشن */}
        <Box
          sx={{
            mt: 10,
            p: 6,
            bgcolor: "grey.100",
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" gutterBottom>
            آماده همکاری با ما هستید؟
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            اگر ایده‌ای دارید یا می‌خواهید بخشی از داستان ما باشید، با ما در ارتباط باشید.
          </Typography>
          <Button variant="contained" size="large" href="/contact">
            تماس با ما
          </Button>
        </Box>
      </Container>
    </Box>
  );
}