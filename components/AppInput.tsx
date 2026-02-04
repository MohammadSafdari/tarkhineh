import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { forwardRef, ReactNode } from "react";

interface AppInputProps {
  label?: string;
  required?: boolean;
  error?: string;
  name: string;
  type?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  variant?: "flat" | "bordered" | "faded" | "underlined";
  fullWidth?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  helperText?: string;
  maxLength?: number;
  autoComplete?: string;
  autoFocus?: boolean;
  value?: string | number;
  defaultValue?: string | number;
}

const AppInput = forwardRef<HTMLInputElement, AppInputProps>(
  (
    {
      label,
      required = false,
      error,
      name,
      type = "text",
      startContent,
      endContent,
      onFocus,
      onBlur,
      onChange,
      size = "lg",
      radius = "lg",
      variant = "faded",
      fullWidth = true,
      disabled = false,
      readOnly = false,
      className,
      placeholder,
      helperText,
      maxLength,
      autoComplete,
      autoFocus,
      value,
      defaultValue,
      ...rest
    },
    ref,
  ) => {
    const getMuiSize = () => {
      if (size === "sm") return "small" as const;
      if (size === "md") return "small" as const;
      return "medium" as const;
    };

    const getMuiVariant = () => {
      if (variant === "underlined") return "standard" as const;
      return "outlined" as const;
    };

    

    const getBorderRadius = () => {
      const radiusMap: Record<NonNullable<AppInputProps["radius"]>, string> = {
        none: "0px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        full: "9999px",
      };
      return radiusMap[radius] || "12px";
    };

    const inputPropsConfig: React.InputHTMLAttributes<HTMLInputElement> = {
      ...(maxLength && { maxLength }),
      ...rest,
      ...(readOnly && { readOnly: true }),
    };

    interface InputPropsType {
      startAdornment?: ReactNode;
      endAdornment?: ReactNode;
      sx?: Record<string, unknown>;
    }

    const buildInputProps = (): InputPropsType => {
      const props: InputPropsType = {};

      if (startContent || endContent) {
        props.startAdornment = startContent ? (
          <InputAdornment position="start">{startContent}</InputAdornment>
        ) : undefined;

        props.endAdornment = endContent ? (
          <InputAdornment position="end">{endContent}</InputAdornment>
        ) : undefined;
      }

      // Create sx styles object
      const sxStyles: Record<string, unknown> = {
        ...(radius && {
          "& .MuiOutlinedInput-root": {
            borderRadius: getBorderRadius(),
          },
          "& .MuiInputBase-root": {
            borderRadius: getBorderRadius(),
          },
        }),
      };

      // Add variant specific styles
      if (variant === "faded") {
        sxStyles["& .MuiOutlinedInput-root"] = {
          ...(sxStyles["& .MuiOutlinedInput-root"] as object),
          backgroundColor: "rgba(0, 0, 0, 0.04)",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
        };
      } else if (variant === "flat") {
        sxStyles["& .MuiOutlinedInput-root"] = {
          ...(sxStyles["& .MuiOutlinedInput-root"] as object),
          backgroundColor: "rgba(0, 0, 0, 0.02)",
          border: "none",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          },
        };
      }

      props.sx = sxStyles;
      return props;
    };

    const inputProps = buildInputProps();

    return (
      <TextField
        ref={ref}
        name={name}
        label={label}
        type={type}
        required={required}
        error={!!error}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        helperText={error || helperText}
        disabled={disabled}
        fullWidth={fullWidth}
        size={getMuiSize()}
        variant={getMuiVariant()}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        className={className}
        value={value}
        defaultValue={defaultValue}
        inputProps={inputPropsConfig}
        InputProps={inputProps}
        

        sx={{
      ...(inputProps.sx as Record<string, unknown>),

      "& .MuiInputBase-input::placeholder": {
        color: "#A4A9AA",
        fontSize: "16px",
        opacity: 1,
        fontWeight: 500,
        
      },
       "& .MuiInputBase-input": { 
         color: "#151617",
         fontSize: "15px",
         fontWeight: 600,
           paddingY: '16px',
         paddingX:'12px'     
       
       },
    }}
      />
    );
  },
);

AppInput.displayName = "AppInput";

export default AppInput;
