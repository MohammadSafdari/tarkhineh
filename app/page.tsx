import AppCategoryCard from "@/components/AppCategoryCard";
import AppCard from "../components/AppCard"
import { Box, Typography } from "@mui/material";
import AppCardBlog from "@/components/AppCardBlog";


export default function Home() {
  return (
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",gap:"18px",marginTop:"10px",width:"80%" }}>
      <AppCard img="./pic.png" rate={3.5} color={true} title="مبل دو نفره سپنتا" description="sepanta-01H810"  price={52100} />
      <AppCard img="./pic.png" rate={3.5}  title="مبل دو نفره سپنتا" description="sepanta-01H810" oldPrice={98540} price={52100} discount={30}/>
      <AppCard img="./pic.png" rate={3.5} color={true} title="مبل دو نفره سپنتا" description="sepanta-01H810" oldPrice={98540} price={52100} discount={30}/>
      <AppCard img="./pic.png" rate={3.5} color={true} title="مبل دو نفره سپنتا" description="sepanta-01H810" oldPrice={98540} price={52100} discount={30}/>
    </Box>
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"50px",gap:"14px"}}>
      <Typography sx={{fontSize:"28px",}}>دسته بندی محصولات</Typography>
      <Box sx={{display:"flex",gap:"22px"}}>
        <AppCategoryCard title="نور و روشنایی" img="./pic.png"/>
        <AppCategoryCard title="نور و روشنایی" img="./pic.png"/>
        <AppCategoryCard title="نور و روشنایی" img="./pic.png"/>
        <AppCategoryCard title="نور و روشنایی" img="./pic.png"/>
      </Box>
    </Box>
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <img src={'./Frame.png'}/>
    </Box>
     <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",gap:"18px",marginTop:"10px",width:"80%" }}>
      <AppCard img="./pic.png" rate={3.5} color={true} title="مبل دو نفره سپنتا" description="sepanta-01H810"  price={52100} />
      <AppCard img="./pic.png" rate={3.5}  title="مبل دو نفره سپنتا" description="sepanta-01H810" oldPrice={98540} price={52100} discount={30}/>
      <AppCard img="./pic.png" rate={3.5} color={true} title="مبل دو نفره سپنتا" description="sepanta-01H810" oldPrice={98540} price={52100} discount={30}/>
      <AppCard img="./pic.png" rate={3.5} color={true} title="مبل دو نفره سپنتا" description="sepanta-01H810" oldPrice={98540} price={52100} discount={30}/>
    </Box>
     <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginY:"30px"}}>
      <img src={'./Frame2.png'}/>
    </Box>
     <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",gap:"18px",marginTop:"10px",width:"80%" }}>
      <AppCard img="./pic.png" rate={3.5} color={true} title="مبل دو نفره سپنتا" description="sepanta-01H810"  price={52100} />
      <AppCard img="./pic.png" rate={3.5}  title="مبل دو نفره سپنتا" description="sepanta-01H810" oldPrice={98540} price={52100} discount={30}/>
      <AppCard img="./pic.png" rate={3.5} color={true} title="مبل دو نفره سپنتا" description="sepanta-01H810" oldPrice={98540} price={52100} discount={30}/>
      <AppCard img="./pic.png" rate={3.5} color={true} title="مبل دو نفره سپنتا" description="sepanta-01H810" oldPrice={98540} price={52100} discount={30}/>
    </Box>
     <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <img src={'./Frame.png'}/>
    </Box>
     <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",gap:"18px",marginTop:"10px",width:"80%" }}>
      <AppCardBlog img="imgBlog.png" date="1405/08/22" ask="فرش ایرانی در خانه مدرن" description="فرش ایرانی یکی از با ارزش ترین محصولات"/>
      <AppCardBlog img="imgBlog.png" date="1405/08/22" ask="فرش ایرانی در خانه مدرن" description="فرش ایرانی یکی از با ارزش ترین محصولات"/>
      <AppCardBlog img="imgBlog.png" date="1405/08/22" ask="فرش ایرانی در خانه مدرن" description="فرش ایرانی یکی از با ارزش ترین محصولات"/>
      <AppCardBlog img="imgBlog.png" date="1405/08/22" ask="فرش ایرانی در خانه مدرن" description="فرش ایرانی یکی از با ارزش ترین محصولات"/>
    </Box>
    </Box>
  );
}

