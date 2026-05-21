"use client";

import {Box} from "@mui/material";
import AppButton from "@/src/components/ui/AppButton";

const eee = () => {
    return(
        <Box sx={{backgroundColor:"primary.main"}}>
            <span color="primary">Hello World!</span>
            <AppButton/>
        </Box>
    )
}
export default eee