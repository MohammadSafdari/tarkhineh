import React, { useState, useRef } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { styled } from "@mui/material/styles";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import {theme} from "@/src/theme/theme";

interface AppTextAreaProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    minRows?: number;
    maxRows?: number;
    disabled?: boolean;
}

const Wrapper = styled("div")({
    width: "100%",
    borderRadius: theme.shape.Xs,
    border: `1px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(2),
});

const PlaceholderRow = styled("div")({
    // // display: "flex",
    // // alignItems: "center",
    // // justifyContent: "flex-end",
    // color: theme.palette.secondary.main,
    // fontSize: theme.typography.bodySM,
});

const StyledTextarea = styled(TextareaAutosize)({
    width: "100%",
    background: "transparent",
    border: "none",
    outline: "none",
    resize: "none",
    color: "rgba(255,255,255,0.85)",
    fontSize: "14px",
    fontFamily: "'Vazirmatn', 'Tahoma', sans-serif",
    lineHeight: "1.6",
    caretColor: "#ffffff",
    boxSizing: "border-box",
    "::placeholder": {
        color: "transparent",
    },
    "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
    },
});

const AppTextArea: React.FC<AppTextAreaProps> = ({
                                                     placeholder = "توضیحات سفارش (اختیاری)",
                                                     value,
                                                     onChange,
                                                     minRows = 4,
                                                     maxRows = 10,
                                                     disabled = false,
                                                 }) => {
    const [internalValue, setInternalValue] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const controlled = value !== undefined;
    const currentValue = controlled ? value : internalValue;
    const isEmpty = !currentValue || currentValue.length === 0;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (!controlled) setInternalValue(e.target.value);
        onChange?.(e.target.value);
    };

    return (
        <Wrapper
            onClick={() => {
                if (!disabled) textareaRef.current?.focus();
            }}
        >
            {isEmpty && (
                <PlaceholderRow>
                    <span>{placeholder}</span>
                    <ContentPasteIcon sx={{ fontSize: 16, opacity: 0.7 }} />
                </PlaceholderRow>
            )}
            <StyledTextarea
                ref={textareaRef}
                value={currentValue}
                onChange={handleChange}
                minRows={isEmpty ? minRows - 1 : minRows}
                maxRows={maxRows}
                disabled={disabled}
            />
        </Wrapper>
    );
};

export default AppTextArea;