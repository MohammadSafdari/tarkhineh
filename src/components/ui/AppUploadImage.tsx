import React, { useRef, useState } from "react";
import { Box, Typography, IconButton, InputBase, styled } from "@mui/material";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import { theme } from "@/src/theme/theme";

interface AppUploadImageProps {
    onChange?: (files: File[]) => void;
}

const DropZone = styled(Box)<{ isfocused?: string; hasfilles?: string }>(
    ({ isfocused, hasfilles }) => ({
        border: `1.5px solid ${
            isfocused === "true"
                ? theme.palette.primary.main
                : theme.palette.grey[400]
        }`,
        borderRadius: theme.shape.Sm,
        width: "520px",
        height: "220px",
        display: "flex",
        flexDirection: hasfilles === "true" ? "row" : "column",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(1.5),
        cursor: "pointer",
        transition: "border-color 0.2s",
        "&:hover .upload-icon": {
            color: theme.palette.primary.main,
        },
    })
);

const FileNameInput = styled(InputBase)({
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.Xs,
    padding: theme.spacing(0.8, 1.5),
    fontSize: 13,
    color: theme.palette.secondary.main,
    width: "200px",
    maxWidth: "200px",
});

const AddButton = styled(IconButton)({
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.Xs,
    padding: theme.spacing(0 , 3),
    color: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: theme.palette.primary.light + "22",
    },
});

const AppUploadImage: React.FC<AppUploadImageProps> = ({ onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles]   = useState<File[]>([]);
    const [focused, setFocused] = useState(false);

    const handleClick = () => inputRef.current?.click();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = Array.from(e.target.files ?? []);
        if (!selected.length) return;
        setFiles(selected);
        onChange?.(selected);
        e.target.value = "";
    };

    const handleDragOver  = (e: React.DragEvent) => { e.preventDefault(); setFocused(true); };
    const handleDragLeave = () => setFocused(false);
    const handleDrop      = (e: React.DragEvent) => {
        e.preventDefault();
        setFocused(false);
        const dropped = Array.from(e.dataTransfer.files);
        if (!dropped.length) return;
        setFiles(dropped);
        onChange?.(dropped);
    };

    const fileLabel = files.map((f) => f.name).join("; ");
    const hasFiles  = files.length > 0;

    return (
        <>
            <input
                ref={inputRef}
                type="file"
                multiple
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleChange}
            />

            <DropZone
                isfocused={focused.toString()}
                hasfilles={hasFiles.toString()}
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {hasFiles ? (
                    <Box sx={{display: "flex", gap:'10px'}}>
                        <FileNameInput value={fileLabel} readOnly />
                        <AddButton
                            size="small"
                            onClick={(e) => { e.stopPropagation(); handleClick(); }}
                        >
                            <CreateNewFolderOutlinedIcon fontSize="small" />
                        </AddButton>
                    </Box>
                ) : (
                    <>
                        <CreateNewFolderOutlinedIcon
                            className="upload-icon"
                            sx={{
                                fontSize: 52,
                                color: focused
                                    ? theme.palette.primary.main
                                    : theme.palette.grey[400],
                                transition: "color 0.2s",
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: theme.typography.bodySM,
                                color: focused
                                    ? theme.palette.primary.main
                                    : theme.palette.secondary.light,
                                fontWeight: focused ? 600 : 400,
                                transition: "color 0.2s",
                            }}
                        >
                            تصاویری از ملک را بارگذاری کنید...
                        </Typography>
                    </>
                )}
            </DropZone>
        </>
    );
};

export default AppUploadImage;