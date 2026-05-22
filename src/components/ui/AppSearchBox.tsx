import {forwardRef} from "react";

interface AppSearchBoxProps {
    className?: string;
    size?: "small" | "medium" | "large";
}

const AppSearchBox = forwardRef<HTMLInputElement, AppSearchBoxProps>(({

                   size,                                                   }) => {
    return (
        <a>s</a>
    )
})

AppSearchBox.displayName = "AppSearchBox";