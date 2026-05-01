import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { ReactNode, forwardRef } from "react";
import { SxProps, Theme } from "@mui/material/styles";

interface AppButtonProps {
  text?: string;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "contained" | "outlined" | "text" | "flat" | "faded";
  size?: "sm" | "md" | "lg" | "xl";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
  className?: string;

  sx?: SxProps<Theme>; 
}

const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(
  (
    {
      text,
      children,
      type = "button",
      variant = "contained",
      size = "lg",
      radius = "lg",
      color = "primary",
      fullWidth = false,
      disabled = false,
      loading = false,
      startIcon,
      endIcon,
      onClick,
      className,
      sx, 
    },
    ref,
  ) => {
    const getMuiSize = () => {
      if (size === "sm") return "small" as const;
      if (size === "md") return "medium" as const;
      return "large" as const;
    };

    const getMuiVariant = () => {
      if (variant === "flat" || variant === "faded") return "contained";
      return variant;
    };

    const getBorderRadius = () => {
      const radiusMap: Record<
        NonNullable<AppButtonProps["radius"]>,
        string
      > = {
        none: "0px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      };
      return radiusMap[radius];
    };

    return (
      <Button
        ref={ref}
        type={type}
        variant={getMuiVariant()}
        size={getMuiSize()}
        color={color}
        fullWidth={fullWidth}
        disabled={disabled || loading}
        onClick={onClick}
        className={className}
        startIcon={!loading ? startIcon : undefined}
        endIcon={!loading ? endIcon : undefined}
        sx={{
          borderRadius: getBorderRadius(),
          textTransform: "none",
          fontSize: "15px",
          paddingY: "12px",
          paddingX: "20px",

          ...(variant === "flat" && {
            backgroundColor: "rgba(0,0,0,0.04)",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.08)",
              boxShadow: "none",
            },
          }),

          ...(variant === "faded" && {
            backgroundColor: "rgba(0,0,0,0.02)",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.05)",
            },
          }),

          ...sx, 
        }}
      >
        {loading ? (
          <CircularProgress size={22} color="inherit" />
        ) : (
          children ?? text
        )}
      </Button>
    );
  },
);

AppButton.displayName = "AppButton";

export default AppButton;