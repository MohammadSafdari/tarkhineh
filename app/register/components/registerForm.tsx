"use client";

import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";

export default function RegisterForm() {
  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        ثبت نام
      </Typography>

      <TextField
        label="نام"
        fullWidth
      />

      <TextField
        label="ایمیل"
        fullWidth
      />

      <TextField
        label="رمز عبور"
        type="password"
        fullWidth
      />

      <Button
        variant="contained"
        size="large"
      >
        ثبت نام
      </Button>
    </Box>
  );
}