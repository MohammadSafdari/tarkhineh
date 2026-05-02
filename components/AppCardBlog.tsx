import { forwardRef } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from "@mui/material";

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
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <Box sx={{display:"flex",flexDirection:"column",gap:"12px"}}>
                    <Box>
                        <img src={img}/>
                    </Box>
                    <Box>
                        <Typography>{ask}</Typography>
                        <Typography>{description}</Typography>
                    </Box>
                    <Box>
                        <Typography>{date}</Typography>
                        <Typography>برگشت</Typography>
                        
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
      )
    }
   
)

export default AppCardBlog