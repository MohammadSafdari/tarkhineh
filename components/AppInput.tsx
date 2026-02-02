import TextField from '@mui/material/TextField';
import { forwardRef } from 'react';

interface AppInputProps{
     label?: string;
     required?: boolean;
     error?: string;
     name: string;
     type?: string;
     startContent?: React.ReactNode;
     endContent?: React.ReactNode;
     onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
     onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
     onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
     value?: string | number;
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
}

const AppInput = forwardRef<HTMLInputElement, AppInputProps>((
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
      value,
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
      ...rest
    },
    ref
  ) => {
    
    // Map size to MUI compatible size
    const getMuiSize = () => {
      if (size === "sm") return "small";
      if (size === "lg" || size === "xl" || size === "2xl") return "medium";
      return "medium";
    };

    // Map variant to MUI compatible variant
    const getMuiVariant = () => {
      if (variant === "underlined") return "standard";
      return "outlined";
    };


    return (
      <TextField
        ref={ref}
        name={name}
        label={label}
        type={type}
        required={required}
        error={!!error}
        value={value}
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
        inputProps={{
          maxLength,
          ...rest,
        }}
      />
    );
  }
);

AppInput.displayName = 'AppInput';

export default AppInput;