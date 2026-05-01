import Box from "@mui/material/Box"
import AppButton from "@/components/AppButton";
import MenuIcon from '@mui/icons-material/Menu';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import HotelClassOutlinedIcon from '@mui/icons-material/HotelClassOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const QuickFilter = () => {
    return(
        <Box sx={{
            display:"flex",
            paddingX:"100px",
            paddingY:"10px",
            
        }}
        >
           <AppButton
           sx={{
            fontSize:"14px",
            color:'#292C2D',
            display:'flex',
            gap:'5px',
            alignItems:'center',
              "&:hover": {
              color: "#DC2655",
              backgroundColor: "white",
              transition:'all'
              },
           }}
            type="submit"
            text="دسته بندی کالاها"
            startIcon={<MenuIcon/>}
            variant="text"
           />
           <AppButton
           sx={{
            fontSize:"14px",
             color:'#292C2D',
            display:'flex',
            gap:'5px',
            alignItems:'center',
              "&:hover": {
              color: "#DC2655",
              backgroundColor: "white",
              transition:'all'
              },
           }}
            type="submit"
            text="دسته بندی کالاها"
            startIcon={<AutoAwesomeOutlinedIcon/>}
            variant="text"
           />
           <AppButton
           sx={{
            fontSize:"14px",
            color:'#292C2D',
            display:'flex',
            gap:'5px',
            alignItems:'center',
              "&:hover": {
              color: "#DC2655",
              backgroundColor: "white",
              transition:'all'
              },
           }}
            type="submit"
            text="دسته بندی کالاها"
            startIcon={<HotelClassOutlinedIcon/>}
            variant="text"
           />
           <AppButton
           sx={{
            fontSize:"14px",
             color:'#292C2D',
            display:'flex',
            gap:'5px',
            alignItems:'center',
              "&:hover": {
              color: "#DC2655",
              backgroundColor: "white",
              transition:'all'
              },
           }}
            type="submit"
            text="دسته بندی کالاها"
            startIcon={<EmojiEventsOutlinedIcon/>}
            variant="text"
           />
           <AppButton
           sx={{
            fontSize:"14px",
            color:'#292C2D',
            display:'flex',
            gap:'5px',
            alignItems:'center',
              "&:hover": {
              color: "#DC2655",
              backgroundColor: "white",
              transition:'all'
              },
           }}
            type="submit"
            text="دسته بندی کالاها"
            startIcon={<FavoriteBorderOutlinedIcon/>}
            variant="text"
           />
           <AppButton
           sx={{
            fontSize:"14px",
              color:'#292C2D',
              "&:hover": {
              color: "#DC2655",
              backgroundColor: "white",
              transition:'all'
              },
           }}
            type="submit"
            text="دسته بندی کالاها"
            variant="text"
           />
     
         
        </Box>
    )
}

export default QuickFilter;