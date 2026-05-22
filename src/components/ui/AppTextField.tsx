import React, { forwardRef } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import type {SxProps, Theme} from "@mui/material";

type ButtonColor =| "primary"| "secondary"| "success"| "warning"| "error"| "info";
type ButtonSize = "small" | "medium" ;

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
    placeholder?: string;
    readOnly?: boolean;
    value?: string;
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
            placeholder,
            readOnly,
            value,
            sx,
        },
        ref
    ) => {
        return (
            <TextField
                inputRef={ref}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                label={label}
                disabled={disabled}
                error={error}
                fullWidth={fullWidth}
                size={size}
                color={color}
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
                    "& .MuiInputBase-input": {
                        textAlign: "right",
                        "& .MuiInputBase-input": {
                            textAlign: "right",
                        },

                        // حالت عادی (outline / label)
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "secondary.main",
                            },
                        },

                        // وقتی فوکوس میشه
                        "& .MuiOutlinedInput-root.Mui-focused": {
                            "& fieldset": {
                                borderColor: "primary.main",
                            },
                        },

                        // رنگ label در حالت عادی
                        "& label": {
                            color: "secondary.main",
                        },

                        // رنگ label در فوکوس
                        "& label.Mui-focused": {
                            color: "primary.main",
                        },
                    },
                }}
            />
        );
    }
);

AppTextField.displayName = "AppTextField";

export default AppTextField;