import {Button} from "@mui/material";

interface AppButtonProps {
    size?: number,
    text?: string,
    icon?: string,
}-

const AppButton: React.FC<AppButtonProps> = ({
    size = 16,
    text = 'ee',
    icon = '2',}) => {
    return (
        <Button>
            click
        </Button>
    )
}

export default AppButton;