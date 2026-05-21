"use client";

import {Box} from "@mui/material";
import AppButton from "@/src/components/ui/AppButton";
import AddIcon from '@mui/icons-material/Add';
import AppCardButton from "@/src/components/ui/AppCardButton";
const eee = () => {
    return(
        <Box sx={{ display: "flex", flexDirection: "column",gap:"10px" }}>
            <Box sx={{display:"flex", gap:"4px"}}>
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
            <Box sx={{display:"flex", gap:"4px"}}>
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
                    textColor='main'
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
            <Box sx={{display:"flex", gap:"4px"}}>
                <AppButton
                    color="third"
                    endContent={<AddIcon/>}
                    startContent={<AddIcon/>}
                    size="medium"
                >
                    اینجا کلیک کن
                </AppButton>
                <AppButton
                    color="third"
                    background={"transparent"}
                    textColor='dark'
                    border={true}
                    shadow={false}
                    endContent={<AddIcon/>}
                    startContent={<AddIcon/>}
                    size="medium"
                >
                    اینجا کلیک کن
                </AppButton>
                <AppButton
                    color="third"
                    background={"transparent"}
                    textColor='dark'
                    border={false}
                    shadow={false}
                    endContent={<AddIcon/>}
                    startContent={<AddIcon/>}
                    size="medium"
                >
                    اینجا کلیک کن
                </AppButton>
            </Box>
        </Box>



    )
}
export default eee