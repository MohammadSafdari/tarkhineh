"use client"

import React, { forwardRef, useCallback, useRef } from "react";
import { Button, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { SxProps, Theme, PaletteColor } from "@mui/material";

type ButtonColor = "primary" | "secondary" | "success" | "warning" | "error" | "info";
type ButtonVariant = "contained" | "outlined" | "text";
type ButtonSize = "small" | "medium" | "large";
type TextColorKey = keyof Pick<PaletteColor, "main" | "light" | "dark" | "contrastText">;
type Shape = "Xs" | "Sm" | "Md" | "Lg" | "Xl" | "Xll";

interface AppButtonProps {
    color?: ButtonColor;
    variant?: ButtonVariant;
    size?: ButtonSize;
    radius?: Shape;
    background?: "default" | "transparent" | (string & {});
    textColor?: ButtonColor | TextColorKey;
    border?: boolean;
    shadow?: boolean;
    children?: React.ReactNode;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    fullWidth?: boolean;
    type?: "reset" | "submit" | "button";
    disabled?: boolean;
    loading?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    sx?: SxProps<Theme>;
    className?: string;
    "aria-label"?: string;
    "aria-describedby"?: string;
}

const PADDING: Record<ButtonSize, string> = {
    small: "8px 8px",
    medium: "8px 16px",
    large: "14px 24px",
};

const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(
    (
        {
            color = "primary",
            variant = "contained",
            size = "medium",
            background = "default",
            textColor,
            radius = "Sm",
            border = false,
            shadow = true,
            children = "کلیک",
            startContent,
            endContent,
            fullWidth = false,
            type = "button",
            disabled = false,
            loading = false,
            onClick,
            sx,
            className,
            "aria-label": ariaLabel,
            "aria-describedby": ariaDescribedBy,
        },
        ref
    ) => {
        const theme = useTheme();

        const [internalLoading, setInternalLoading] = React.useState(false);
        const isMountedRef = useRef(true);

        React.useEffect(() => {
            isMountedRef.current = true;
            return () => {
                isMountedRef.current = false;
            };
        }, []);

        const isLoading = loading || internalLoading;
        const isDisabled = disabled || isLoading;

        const handleClick = useCallback(
            async (event: React.MouseEvent<HTMLButtonElement>) => {
                if (!onClick) return;
                setInternalLoading(true);
                try {
                    await onClick(event);
                } finally {
                    if (isMountedRef.current) {
                        setInternalLoading(false);
                    }
                }
            },
            [onClick]
        );

        const resolvedBackground = (() => {
            if (background === "transparent") return "transparent";
            if (background !== "default") return background;
            if (variant === "outlined" || variant === "text") return "transparent";
            return theme.palette[color].main;
        })();

        const resolvedTextColor = (() => {
            if (textColor && ["primary", "secondary", "success", "warning", "error", "info"].includes(textColor)) {
                return theme.palette[textColor as ButtonColor].main;
            }
            if (textColor) {
                return theme.palette[color][textColor as TextColorKey];
            }
            if (variant === "outlined" || variant === "text") {
                return theme.palette[color].main;
            }
            return theme.palette[color].contrastText;
        })();

        const resolvedBorder = (() => {
            if (variant === "outlined") return undefined;
            if (!border) return "none";
            return `1px solid ${theme.palette[color].main}`;
        })();

        const resolvedShadow = (() => {
            if (!shadow || variant !== "contained") return "none";
            return theme.shadows[2];
        })();

        const resolvedRadius = (theme.shape as Record<Shape, number | string>)[radius] ?? 4;

        const typographyVariant =
            size === "small"
                ? theme.typography.buttonSM ?? theme.typography.button
                : size === "large"
                    ? theme.typography.buttonSM ?? theme.typography.button
                    : theme.typography.buttonMD ?? theme.typography.button;

        return (
            <Button
                ref={ref}
                variant={variant}
                color={color}
                type={type}
                fullWidth={fullWidth}
                onClick={(e) => {
                    e.currentTarget.classList.add("clicked");
                    handleClick(e);
                }}
                disabled={isDisabled}
                startIcon={!isLoading ? startContent : undefined}
                endIcon={!isLoading ? endContent : undefined}
                className={className}
                aria-label={ariaLabel}
                aria-describedby={ariaDescribedBy}
                aria-busy={isLoading}
                aria-disabled={isDisabled}
                sx={{
                    borderRadius: `${resolvedRadius}px !important`,
                    padding: PADDING[size],
                    textTransform: "none",
                    transition: "all 0.2s ease-in-out",
                    backgroundColor: resolvedBackground,
                    color: resolvedTextColor,
                    ...(resolvedBorder !== undefined && { border: resolvedBorder }),
                    boxShadow: resolvedShadow,
                    ...typographyVariant,
                    "&:hover": {
                        backgroundColor:
                            resolvedBackground !== "transparent"
                                ? theme.palette[color].light
                                : variant === "outlined"
                                    ? `${theme.palette[color].main}14`
                                    : "transparent",
                        color:
                            resolvedBackground === "transparent"
                                ? theme.palette[color].dark
                                : resolvedTextColor,
                        border:
                            resolvedBackground === "transparent" && (variant === "outlined" || border)
                                ? `1px solid ${theme.palette[color].dark}`
                                : resolvedBorder,
                        boxShadow:
                            shadow && variant === "contained"
                                ? theme.shadows[4]
                                : "none",
                    },
                    "&:active": {
                        transform: "scale(0.98)",
                    },
                    "&.clicked": {
                        ...(resolvedBackground !== "transparent"
                            ? { backgroundColor: theme.palette[color].dark }
                            : variant === "outlined" || border
                                ? {
                                    color: theme.palette[color].dark,
                                    border: `1px solid ${theme.palette[color].dark}`,
                                }
                                : { color: theme.palette[color].dark }),
                    },
                    "&.Mui-disabled": {
                        opacity: 0.6,
                        pointerEvents: "none",
                    },
                    ...sx,
                }}
            >
                {isLoading ? (
                    <CircularProgress
                        size={size === "small" ? 16 : size === "large" ? 24 : 20}
                        color="inherit"
                        aria-label="در حال بارگذاری"
                    />
                ) : (
                    children
                )}
            </Button>
        );
    }
);

AppButton.displayName = "AppButton";

export default AppButton;
export type { AppButtonProps, ButtonColor, ButtonVariant, ButtonSize };