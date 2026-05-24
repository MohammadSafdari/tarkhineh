import { useState } from 'react';
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const AppSearchButton = () => {

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
                <SearchOutlinedIcon
                    sx={{
                        fontSize: 24,
                        color: isActive ? 'primary.contrastText' : 'primary.main',
                    }}
                />
        </IconButton>
    );
};

export default AppSearchButton;