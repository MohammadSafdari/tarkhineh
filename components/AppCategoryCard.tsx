import { forwardRef } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface AppCategoryCardProps {
    title: string;
    img: string;
}

const AppCategoryCard = forwardRef<HTMLDivElement, AppCategoryCardProps>(
    (
        {
         title,
         img
        },
        ref
    ) => {
        return(
     <Card sx={{borderRadius:"12px",width:"256px"}}>
      <CardActionArea sx={{padding:"8px" }}>
       <img src={img}/>
       <Typography sx={{textAlign:"center",marginTop:"10px"}}>{title}</Typography>
      </CardActionArea>
    </Card>
        )
    })

    export default AppCategoryCard