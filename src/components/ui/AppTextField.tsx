import React, { forwardRef } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import type { SxProps, Theme } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type ButtonColor = "primary" | "secondary" | "success" | "warning" | "error" | "info";
type ButtonSize = "small" | "medium";

interface AppTextFieldProps {
    startIcon?: React.ReactNode;
    endContent?: React.ReactNode;
    size?: ButtonSize;
    color?: ButtonColor;
    disabled?: boolean;
    error?: boolean;
    fullWidth?: boolean;
    label?: React.ReactNode;
    maxRows?: number | string;
    minRows?: number | string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    readOnly?: boolean;
    value?: string;
    name?: string;
    helperText?: string;
    sx?: SxProps<Theme>;
}

const AppTextField = forwardRef<HTMLInputElement, AppTextFieldProps>(
    (
        {
            startIcon,
            endContent,
            size = "medium",
            color = "primary",
            disabled,
            error,
            fullWidth,
            label,
            maxRows,
            minRows,
            onChange,
            onBlur,
            onFocus,
            placeholder,
            readOnly,
            value,
            name,
            helperText,
            sx,
        },
        ref
    ) => {
        const theme = useTheme();
        const isDarkMode = theme.palette.mode === "dark";

        // تعریف رنگ‌ها بر اساس شرایط
        const getBorderColor = () => {
            if (error) return "#C30000";
            if (disabled) return isDarkMode ? "#CBCBCB" : "#717171";
            return isDarkMode ? "#CBCBCB" : "#717171";
        };

        const getTextColor = () => {
            if (error) return "#C30000";
            if (disabled) return isDarkMode ? "#CBCBCB" : "#717171";
            return isDarkMode ? "#CBCBCB" : "#717171";
        };

        const getLabelColor = () => {
            if (error) return "#C30000";
            if (disabled) return isDarkMode ? "#CBCBCB" : "#717171";
            return isDarkMode ? "#CBCBCB" : "#717171";
        };

        const hoverBgColor = isDarkMode ? "#353535" : "#F9F9F9";
        const focusColor = "#417F56";

        return (
            <TextField
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                placeholder={placeholder}
                label={label}
                disabled={disabled}
                error={error}
                fullWidth={fullWidth}
                size={size}
                color={color}
                helperText={helperText}
                multiline={!!maxRows || !!minRows}
                maxRows={typeof maxRows === "number" ? maxRows : undefined}
                minRows={typeof minRows === "number" ? minRows : undefined}
                InputProps={{
                    readOnly,
                    startAdornment: startIcon ? (
                        <InputAdornment position="start">
                            {startIcon}
                        </InputAdornment>
                    ) : undefined,
                    endAdornment: endContent ? (
                        <InputAdornment position="end">
                            {endContent}
                        </InputAdornment>
                    ) : undefined,
                }}
                sx={{
                    // حذف هرگونه background اضافی
                    "& .MuiInputBase-root": {
                        backgroundColor: "transparent !important",
                    },

                    // استایل پایه برای input
                    "& .MuiInputBase-input": {
                        textAlign: "right",
                        color: getTextColor(),
                        backgroundColor: "transparent !important",
                        "&::placeholder": {
                            color: getTextColor(),
                            opacity: 0.7,
                        },
                    },

                    // استایل کانتینر OutlinedInput
                    "& .MuiOutlinedInput-root": {
                        backgroundColor: "transparent !important",

                        "& fieldset": {
                            borderColor: getBorderColor(),
                            transition: "all 0.2s ease",
                            backgroundColor: "transparent",
                        },

                        // حالت هاور - فقط رنگ حاشیه تغییر کنه، بدون تغییر پس‌زمینه
                        "&:hover fieldset": {
                            borderColor: error ? "#C30000" : focusColor,
                        },

                        "&:hover": {
                            backgroundColor: hoverBgColor,
                        },

                        // حالت فوکوس
                        "&.Mui-focused fieldset": {
                            borderColor: error ? "#C30000" : focusColor,
                            borderWidth: "2px",
                        },

                        "&.Mui-focused": {
                            backgroundColor: hoverBgColor,
                        },

                        // حذف حالت active سفید شدن
                        "&:active": {
                            backgroundColor: hoverBgColor,
                        },

                        "&:active fieldset": {
                            borderColor: error ? "#C30000" : focusColor,
                        },

                        // حالت دیسэйбл
                        "&.Mui-disabled": {
                            backgroundColor: "transparent !important",
                        },

                        "&.Mui-disabled fieldset": {
                            borderColor: getBorderColor(),
                        },

                        // حالت خطا
                        "&.Mui-error fieldset": {
                            borderColor: "#C30000",
                        },

                        "&.Mui-error:hover fieldset": {
                            borderColor: "#C30000",
                        },

                        "&.Mui-error.Mui-focused": {
                            backgroundColor: hoverBgColor,
                        },
                    },

                    // استایل برای لیبل
                    "& .MuiInputLabel-root": {
                        color: getLabelColor(),
                        "&.Mui-focused": {
                            color: error ? "#C30000" : focusColor,
                        },
                        "&.Mui-error": {
                            color: "#C30000",
                        },
                        "&.Mui-disabled": {
                            color: getLabelColor(),
                        },
                    },

                    // استایل برای هِلپِر تکست
                    "& .MuiFormHelperText-root": {
                        color: error ? "#C30000" : (isDarkMode ? "#CBCBCB" : "#717171"),
                        "&.Mui-error": {
                            color: "#C30000",
                        },
                    },

                    // استایل برای آیکون‌های ادورنمنت
                    "& .MuiInputAdornment-root": {
                        "& .MuiTypography-root": {
                            color: getTextColor(),
                        },
                        "& svg": {
                            color: getTextColor(),
                        },
                    },

                    // حذف افکت‌های دیفالت در حالت readOnly
                    "& .MuiInputBase-readOnly": {
                        "& fieldset": {
                            borderStyle: "dashed",
                        },
                    },

                    ...sx,
                }}
            />
        );
    }
);

AppTextField.displayName = "AppTextField";

export default AppTextField;