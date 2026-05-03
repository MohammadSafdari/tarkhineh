import { forwardRef } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

interface AppCardBlogProps{
    img: string,
     ask: string,
     description: string,
     date: string,
}

const AppCardBlog = forwardRef<HTMLDivElement,AppCardBlogProps>(
    (
        {  
            ask,
            description,
            img,
            date,
        },
        ref
    ) => {
         return(
        <Card sx={{ maxWidth: 345,borderRadius:"18px" }}>
            <CardActionArea>
                <Box>
                    <Box>
                        <img src={img} className="w-full"/>
                    </Box>
                   <CardContent>
                    <Box>
                        <Typography>{ask}</Typography>
                        <Typography sx={{marginTop:"5px",color:["#676F71"],fontSize:"14px"}}>{description}</Typography>
                    </Box>
                    <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"25px"}}>
                        <Typography sx={{color:["#676F71"],fontSize:"14px"}}>{date}</Typography>
                        <KeyboardBackspaceIcon sx={{color:["#676F71"],fontSize:"20px"}}/>
                        
                    </Box>
                </CardContent>
                </Box>
            </CardActionArea>
        </Card>
      )
    }
   
)

export default AppCardBlog