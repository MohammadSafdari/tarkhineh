import { Box, Skeleton, Stack, Container, CircularProgress, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Container sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Stack alignItems="center" spacing={3}>
        <CircularProgress size={60} thickness={5} />
        <Typography variant="h6" color="text.secondary">
          در حال بارگذاری...
        </Typography>
        
        {/* اسکلتون‌های اضافی برای حجم بیشتر */}
        <Box sx={{ width: "100%", maxWidth: 600, mt: 4 }}>
          <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
          <Stack spacing={1} sx={{ mt: 2 }}>
            <Skeleton variant="text" height={40} />
            <Skeleton variant="text" width="70%" />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}