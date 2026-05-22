import React, { forwardRef, useCallback, useRef } from "react";
import {Button} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { SxProps, Theme, PaletteColor } from "@mui/material";


type ButtonColor = "primary" ;
type TextColorKey = keyof Pick<PaletteColor, "main" | "light" | "dark" | "contrastText">;
type ButtonSize = "small" | "medium" | "large";

interface AppCardButtonProps {
    color?: ButtonColor;
    textColor?: TextColorKey;
    size?: ButtonSize;
    children?: React.ReactNode;
    border?: ButtonColor;
    disabled?: boolean;
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

const AppCardButton = forwardRef<HTMLButtonElement, AppCardButtonProps>(
    (
        {
            color = "primary",
            textColor,
            size= 'medium',
            border = false,
            disabled = false,
            onClick,
            sx,
            className,
            "aria-label": ariaLabel,
            "aria-describedby": ariaDescribedBy,
        },
        ref
    ) => {
        const theme = useTheme();

        const [added, setAdded] = React.useState(false);
        const [internalLoading, setInternalLoading] = React.useState(false);
        const isMountedRef = useRef(true);

        React.useEffect(() => {
            isMountedRef.current = true;
            return () => { isMountedRef.current = false; };
        }, []);

        const isDisabled = disabled || added;

        const handleClick = useCallback(
            async (event: React.MouseEvent<HTMLButtonElement>) => {
                if (added) return;

                setInternalLoading(true);
                try {
                    await onClick?.(event);
                    if (isMountedRef.current) setAdded(true);
                } finally {
                    if (isMountedRef.current) setInternalLoading(false);
                }
            },
            [onClick, added]
        );

        const resolvedBackground = (() => {
            if (added) return "transparent";

            return theme.palette[color].main;
        })();

        const resolvedTextColor = (() => {
            if (added) return theme.palette[color].main;
            if (textColor) return theme.palette[color][textColor];
            return theme.palette[color].contrastText;
        })();

        const resolvedBorder = (() => {
            if (added) return `1px solid ${theme.palette[color].main}`;
            if (!border) return "none";
            return `1px solid ${theme.palette[color].main}`;
        })();


        const label = added ? "افزوده شد" : "افزودن به سبد خرید";

        return (
            <Button
                ref={ref}
                component="button"
                onClick={handleClick}
                disabled={isDisabled}
                className={className}
                aria-label={ariaLabel}
                aria-describedby={ariaDescribedBy}
                sx={{
                    borderRadius:"4px",
                    padding: PADDING[size],
                    minWidth: 180,
                    backgroundColor: resolvedBackground,
                    color: resolvedTextColor,
                    border: resolvedBorder,
                    transition: "all 0.2s ease-in-out",
                    "&.Mui-disabled": {
                        opacity: 1,
                        color: resolvedTextColor,
                        border: resolvedBorder,
                        cursor: "default",
                    },

                    ...sx,
                }}
            >
                {label}
            </Button>
        );
    }
);

AppCardButton.displayName = "AppCardButton";
export default AppCardButton;