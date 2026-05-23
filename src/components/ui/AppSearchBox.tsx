import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import type { SxProps, Theme } from "@mui/material";

type SearchBoxColor = | "primary" | "secondary" | "success" | "warning" | "error" | "info";
type SearchBoxVariant = "outlined" | "filled" | "standard";
type SearchBoxSize = "small" | "medium";

interface AppSearchBoxProps {
    value?: string;
    defaultValue?: string;
    className?: string;
    placeholder?: string;
    color?: SearchBoxColor;
    variant?: SearchBoxVariant;
    size?: SearchBoxSize;
    fullWidth?: boolean;
    disabled?: boolean;
    autoFocus?: boolean;
    required?: boolean;
    readOnly?: boolean;
    loading?: boolean;
    clearable?: boolean;
    name?: string;
    id?: string;
    type?: React.HTMLInputTypeAttribute;
    sx?: SxProps<Theme>;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    debounce?: number;
    maxLength?: number;
    autoComplete?: string;
    helperText?: React.ReactNode;
    error?: boolean;
    "aria-label"?: string;
    "aria-describedby"?: string;
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
    onClear?: () => void;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const AppSearchBox = forwardRef<HTMLInputElement, AppSearchBoxProps>(
    (
        {
            value,
            defaultValue = "",
            className,
            placeholder = "جستجو...",
            color = "info",
            variant = "outlined",
            size = "medium",
            fullWidth = true,
            disabled = false,
            autoFocus = false,
            required = false,
            readOnly = false,
            loading = false,
            clearable = true,
            name,
            id,
            type = "text",
            sx,
            startIcon,
            endIcon,
            debounce = 300,
            maxLength,
            autoComplete = "off",
            helperText,
            error = false,
            "aria-label": ariaLabel,
            "aria-describedby": ariaDescribedBy,
            onChange,
            onSearch,
            onClear,
            onFocus,
            onBlur,
            onKeyDown,
        },
        ref
    ) => {

        const [internalValue, setInternalValue] = useState<string>(defaultValue ?? "");

        const debounceTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
        const debounceRef = useRef<number>(debounce);

        const isControlled = value !== undefined;
        const inputValue = isControlled ? value : internalValue;

        useEffect(() => {
            debounceRef.current = debounce;
        }, [debounce]);

        useEffect(() => {
            return () => clearTimeout(debounceTimer.current);
        }, []);

        const handleChange = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                const newValue = event.target.value;

                if (!isControlled) {
                    setInternalValue(newValue);
                }

                clearTimeout(debounceTimer.current);
                debounceTimer.current = setTimeout(() => {
                    onChange?.(newValue);
                }, debounceRef.current);
            },
            [isControlled, onChange]
        );

        const handleSearch = useCallback(() => {
            onSearch?.(inputValue);
        }, [onSearch, inputValue]);



        const handleKeyDown = useCallback(
            (event: React.KeyboardEvent<HTMLInputElement>) => {
                if (event.key === "Enter") {
                    handleSearch();
                }
                onKeyDown?.(event);
            },
            [handleSearch, onKeyDown]
        );

        const mergedSx: SxProps<Theme> = [
            {
                "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "& fieldset": { borderColor: "primary.main" },
                    "&:hover fieldset": { borderColor: "grey.400" },
                    "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                        borderWidth: 2,
                    },
                },
                "& .MuiInputBase-input": {
                    textAlign: "right",
                    direction: "rtl",
                },
                "& .MuiInputBase-input::placeholder": {
                    textAlign: "right",
                    direction: "rtl",
                },
            },
            ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ];

        return (
            <TextField
                inputRef={ref}
                id={id}
                name={name}
                type={type}
                value={inputValue}
                className={className}
                placeholder={placeholder}
                color={color}
                variant={variant}
                size={size}
                fullWidth={fullWidth}
                disabled={disabled}
                autoFocus={autoFocus}
                required={required}
                error={error}
                helperText={helperText}
                autoComplete={autoComplete}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                inputProps={{
                    maxLength,
                    readOnly,
                    "aria-label": ariaLabel,
                    "aria-describedby": ariaDescribedBy,
                }}
                sx={mergedSx}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {loading ? (
                                <CircularProgress size={18} />
                            ) : (
                                <IconButton
                                    size="small"
                                    onClick={handleSearch}
                                    edge="start"
                                    disabled={disabled}
                                    aria-label="search"
                                >
                                    {startIcon ?? <SearchIcon />}
                                </IconButton>
                            )}
                        </InputAdornment>
                    ),
                    endAdornment:
                        clearable && inputValue && !loading ? (
                            <InputAdornment position="end">
                                {endIcon ?? null}
                            </InputAdornment>
                        ) : endIcon ? (
                            <InputAdornment position="end">{endIcon}</InputAdornment>
                        ) : undefined,
                }}
            />
        );
    }
);

AppSearchBox.displayName = "AppSearchBox";

export default AppSearchBox;