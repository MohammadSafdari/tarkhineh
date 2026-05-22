"use client";

import {Box} from "@mui/material";
import AppButton from "@/src/components/ui/AppButton";
import AddIcon from '@mui/icons-material/Add';
import AppCardButton from "@/src/components/ui/AppCardButton";
import AppTextField from "@/src/components/ui/AppTextField";
const eee = () => {
    return(
        <Box sx={{ display: "flex", flexDirection: "column",gap:"10px" }}>
            <Box sx={{display:"flex",flexDirection:"column", gap:"4px"}}>
                <AppButton
                    color="primary"
                    endContent={<AddIcon/>}
                    startContent={<AddIcon/>}
                    size="medium"
                >
                    اینجا کلیک کن
                </AppButton>

                <AppButton
                    color="primary"
                    background={"transparent"}
                    border={true}
                    shadow={false}
                    textColor='main'
                    endContent={<AddIcon/>}
                    startContent={<AddIcon/>}
                    size="medium"
                >
                    اینجا کلیک کن
                </AppButton>

                <AppButton
                    color="primary"
                    background={"transparent"}
                    border={false}
                    shadow={false}
                    textColor='main'
                    endContent={<AddIcon/>}
                    startContent={<AddIcon/>}
                    size="medium"
                >
                    اینجا کلیک کن
                </AppButton>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column", gap:"4px"}}>
                <AppButton
                    color="info"
                    endContent={<AddIcon/>}
                    textColor='primary'
                    startContent={<AddIcon/>}
                    size="medium"
                >
                     کلیک کن
                </AppButton>
                <AppButton
                    color="info"
                    background={"transparent"}
                    textColor='contrastText'
                    border={true}
                    shadow={false}
                    endContent={<AddIcon/>}
                    startContent={<AddIcon/>}
                    size="medium"
                >
                    اینجا کلیک کن
                </AppButton>
                <AppButton
                    color="info"
                    background={"transparent"}
                    textColor='contrastText'
                    border={false}
                    shadow={false}
                    endContent={<AddIcon/>}
                    startContent={<AddIcon/>}
                    size="medium"
                >
                    اینجا کلیک کن
                </AppButton>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column", gap:"4px"}}>
                <AppButton
                    color="secondary"
                    endContent={<AddIcon/>}
                    startContent={<AddIcon/>}
                    size="medium"
                >
                    اینجا کلیک کن
                </AppButton>
                <AppButton
                    color="secondary"
                    background={"transparent"}
                    textColor='secondary'
                    border={true}
                    shadow={false}
                    endContent={<AddIcon/>}
                    startContent={<AddIcon/>}
                    size="medium"
                >
                    اینجا کلیک کن
                </AppButton>
                <AppButton
                    color="secondary"
                    background={"transparent"}
                    textColor='main'
                    border={false}
                    shadow={false}
                    endContent={<AddIcon/>}
                    startContent={<AddIcon/>}
                    size="medium"
                >
                    اینجا کلیک کن
                </AppButton>
            </Box>
            <Box> <AppCardButton/></Box>
            <Box sx={{backgroundColor:"gray",padding:"10px"}}>
                <AppTextField
                    startIcon={<AddIcon/>}
                    value={"رمز عبور"}
                    endContent={<AddIcon/>}
                    size={"medium"}
            />
                <AppTextField
                    startIcon={<AddIcon/>}
                    fullWidth={true}
                    label="kir"
                    value={"رمز عبور"}
                    endContent={<AddIcon/>}
                    size={"medium"}
                    error={true}
            />
                <AppTextField
                    startIcon={<AddIcon/>}
                    value={"رمز عبور"}
                    endContent={<AddIcon/>}
                    size={"medium"}
                    error={true}
            />
            </Box>
        </Box>



    )
}
export default eee