import { Box, Button, Container, Typography } from "@mui/material";
import { Home, ArrowBack } from "@mui/icons-material";

export default function NotFound() {

  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box>
        {/* عدد 404 بزرگ */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "6rem", sm: "8rem", md: "10rem" },
            fontWeight: 900,
            color: "primary.main",
            lineHeight: 1,
            mb: -2,
            opacity: 0.9,
          }}
        >
          404
        </Typography>

        {/* عنوان */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
          صفحه مورد نظر یافت نشد
        </Typography>

        {/* توضیح */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 420, mx: "auto", mb: 5 }}
        >
          متأسفانه صفحه‌ای که دنبال آن بودید وجود ندارد یا حذف شده است.
        </Typography>

        {/* دکمه‌ها */}
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<Home />}
            sx={{ px: 4 }}
          >
            رفتن به صفحه اصلی
          </Button>

          <Button
            variant="outlined"
            size="large"
            startIcon={<ArrowBack />}
          >
            بازگشت به صفحه قبل
          </Button>
        </Box>

        {/* تصویر یا آیکون اضافی (اختیاری) */}
        <Box sx={{ mt: 6, opacity: 0.7 }}>
          <Typography variant="h2" sx={{ fontSize: "6rem" }}>
            🤔
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}