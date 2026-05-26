import React, { useState } from "react";
import { Box, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CheckIcon from "@mui/icons-material/Check";

export interface ChipItem {
    id: number | string;
    label: string;
}

interface AppChipListProps {
    items: ChipItem[];
    onChange?: (selectedId: number | string | null) => void;
}

const StyledChip = styled(Chip, {
    shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected?: boolean }>(({ theme, isSelected }) => ({
    direction: "rtl",
    borderRadius: theme.shape.Xll,
    backgroundColor: isSelected ? theme.palette.info.main : "#EDEDED",
    color: isSelected ? theme.palette.primary.main : theme.palette.secondary.main,
    ...theme.typography.overlineLG,
    paddingRight: theme.spacing(1.5),
    paddingLeft: theme.spacing(1.5),
    transition: "background-color 0.2s ease, color 0.2s ease",
    cursor: "pointer",

    "& .MuiChip-icon": {
        color: theme.palette.primary.main,
        fontSize: 18,
        marginLeft: "2px",
        marginRight: "-6px",
        pointerEvents: "none",
        display: isSelected ? "block" : "none",
    },

    "& .MuiChip-deleteIcon": {
        color: theme.palette.secondary.dark,
        fontSize: 18,
        marginRight: "2px",
        marginLeft: "-6px",
        display: isSelected ? "none" : "block",
    },

    "&:hover": {
        backgroundColor: isSelected
            ? theme.palette.info.main
            : theme.palette.secondary.light,
    },
}));

const AppChipList: React.FC<AppChipListProps> = ({ items, onChange }) => {
    const [selectedId, setSelectedId] = useState<number | string | null>(null);

    const handleClick = (id: number | string) => {
        const next = selectedId === id ? null : id;
        setSelectedId(next);
        onChange?.(next);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row-reverse",
                flexWrap: "nowrap",
                gap: 1,
                overflowX: "auto",
                direction: "rtl",
                pb: 0.5,
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
            }}
        >
            {items.map((item) => {
                const isSelected = selectedId === item.id;
                return (
                    <StyledChip
                        key={item.id}
                        label={item.label}
                        isSelected={isSelected}
                        icon={<CheckIcon />}
                        deleteIcon={<NavigateBeforeIcon />}
                        onDelete={() => {}}
                        onClick={() => handleClick(item.id)}
                    />
                );
            })}
        </Box>
    );
};

export default AppChipList;