import AppLogo from "@/components/AppLogo"
import { Box, Typography } from "@mui/material"
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return(
        <Box sx={{backgroundColor:["#C2C5C6"],paddingX:"30px",paddingY:"15px"}}>
            <Box sx={{display:"flex",alignItems:"center",gap:"50px"}}>
                <Box sx={{display:"flex",flexDirection:"column",gap:"8px",width:"50%"}}>
                    <Box>
                        <AppLogo/>
                    </Box>
                    <Box sx={{display:"flex",flexDirection:"column",gap:'4px'}}>
                        <Typography>درباره زی هوم</Typography>
                        <Typography>رباره زی هورباره زی هورباره زی هورباره زی هورباره زی هورباره زی هورباره زی هورباره زی هورباره زی هورباره زی هورباره زی هورباره زی هورباره زی هورباره زی هورباره زی هورباره زی هورباره زی هورباره زی هو</Typography>
                        <Typography>مشاهده بیشتر</Typography>
                    </Box>
                    <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        <Box>
                            <Typography>تلفن پشتیبانی 22222222</Typography>
                            <Typography>همراه ما باشید</Typography>
                        </Box>
                        <Box sx={{display:"flex",gap:"4px"}}>
                            <YouTubeIcon/>
                            <YouTubeIcon/>
                            <YouTubeIcon/>
                            <YouTubeIcon/>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display:"flex",alignItems:"center",justifyItems:"center",gap:"40px",width:"50%"}}>
                    <Box sx={{display:"flex",flexDirection:"column",gap:"8px"}}>
                        <Typography sx={{fontSize:"16px",fontWeight:"500"}}>معرفی فروشگاه</Typography>
                        <Typography sx={{color:['#676F71'],fontSize:"14px"}}>معرفی فروشگاه</Typography>
                        <Typography sx={{color:['#676F71'],fontSize:"14px"}}>معرفی فروشگاه</Typography>
                        <Typography sx={{color:['#676F71'],fontSize:"14px"}}>معرفی فروشگاه</Typography>
                        <Typography sx={{color:['#676F71'],fontSize:"14px"}}>معرفی فروشگاه</Typography>
                    </Box>
                    <Box sx={{display:"flex",flexDirection:"column",gap:"8px"}}>
                        <Typography sx={{fontSize:"16px",fontWeight:"500"}}>معرفی فروشگاه</Typography>
                        <Typography sx={{color:['#676F71'],fontSize:"14px"}}>معرفی فروشگاه</Typography>
                        <Typography sx={{color:['#676F71'],fontSize:"14px"}}>معرفی فروشگاه</Typography>
                        <Typography sx={{color:['#676F71'],fontSize:"14px"}}>معرفی فروشگاه</Typography>
                        <Typography sx={{color:['#676F71'],fontSize:"14px"}}>معرفی فروشگاه</Typography>
                    </Box>
                    <Box sx={{display:"flex",flexDirection:"column",gap:"8px"}}>
                        <Typography sx={{fontSize:"16px",fontWeight:"500"}}>معرفی فروشگاه</Typography>
                        <Typography sx={{color:['#676F71'],fontSize:"14px"}}>معرفی فروشگاه</Typography>
                        <Typography sx={{color:['#676F71'],fontSize:"14px"}}>معرفی فروشگاه</Typography>
                        <Typography sx={{color:['#676F71'],fontSize:"14px"}}>معرفی فروشگاه</Typography>
                        <Typography sx={{color:['#676F71'],fontSize:"14px"}}>معرفی فروشگاه</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer