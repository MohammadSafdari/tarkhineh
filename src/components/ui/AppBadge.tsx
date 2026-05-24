import { useState } from 'react';
import { Badge, IconButton } from '@mui/material';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

interface AppCartButtonProps {
    itemCount?: number;
}

const AppCartButton = ({ itemCount = 0 }: AppCartButtonProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <IconButton
            onClick={() => setIsActive((prev) => !prev)}
            disableRipple
            sx={{
                padding: '8px',
                borderRadius: '4px',
                backgroundColor: isActive ? 'primary.main' : 'info.main',
            }}
        >
            <Badge
                badgeContent={itemCount}
                invisible={itemCount === 0}
                color="primary"
                sx={{
                    '& .MuiBadge-badge': {
                        backgroundColor: isActive ? 'white' : 'primary.main',
                        color: isActive ? 'primary.main' : 'white',
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        minWidth: 18,
                        height: 18,
                    },
                }}
            >
                <LocalGroceryStoreOutlinedIcon
                    sx={{
                        fontSize: 24,
                        color: isActive ? 'primary.contrastText' : 'primary.main',
                    }}
                />
            </Badge>
        </IconButton>
    );
};

export default AppCartButton;