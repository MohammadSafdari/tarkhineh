"use client";

import Navbar from "@/src/components/layouts/Navbar";
import AppSlider from "@/src/components/ui/AppSlider";
import AppFooter from "@/src/components/layouts/AppFooter";
import Box from "@mui/material/Box";
import AppProductCard from "@/src/components/ui/AppProductCard";
import AppFavoriteCard from "@/src/components/ui/AppFavoriteCard";
import AppCardMenu from "@/src/components/ui/AppMenuCard";
import AppChipList, {ChipItem} from "@/src/components/ui/AppChipList";

const categories: ChipItem[] = [
    { id: 1, label: "غذای ایرانی" },
    { id: 2, label: "غذاهای غیر ایرانی" },
    { id: 3, label: "غذاهای گرم" },
    { id: 4, label: "غذاهای سرد" },
    { id: 5, label: "پرفروش‌ترین" },
    { id: 6, label: "اقتصادی‌ترین" },
];

const eee = () => {
    return(
        <Box sx={{display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
          <Navbar/>
            <AppSlider/>
            <Box sx={{display:"flex", gap:"8px",paddingY:'25px'}}>
              <AppProductCard
                    name="غذای گیاهی"
                    image={'./branch.png'}
                    price={200000}
                    originalPrice={35000}
                    discountPercent={50}
                    ratingCount={5}
              />      <AppProductCard
                    name="غذای گیاهی"
                    image={'./branch.png'}
                    price={200000}
                    originalPrice={35000}
                    discountPercent={50}
                    ratingCount={5}
              />      <AppProductCard
                    name="غذای گیاهی"
                    image={'./branch.png'}
                    price={200000}
                    originalPrice={35000}
                    discountPercent={50}
                    ratingCount={5}
              />      <AppProductCard
                    name="غذای گیاهی"
                    image={'./branch.png'}
                    price={200000}
                    originalPrice={35000}
                    discountPercent={50}
                    ratingCount={5}
              />      <AppProductCard
                    name="غذای گیاهی"
                    image={'./branch.png'}
                    price={200000}
                    originalPrice={35000}
                    discountPercent={50}
                    ratingCount={5}
              />
            </Box>
            <Box sx={{display:"flex", gap:"8px",paddingY:'25px'}}>
                <AppFavoriteCard
                    name='پاستا سبزیجات '
                    image={'./branch.png'}
                    price={200000}
                    rating={4}
                /><AppFavoriteCard
                    name='پاستا سبزیجات '
                    image={'./branch.png'}
                    price={200000}
                    rating={4}
                /><AppFavoriteCard
                    name='پاستا سبزیجات '
                    image={'./branch.png'}
                    price={200000}
                    rating={4}
                /><AppFavoriteCard
                    name='پاستا سبزیجات '
                    image={'./branch.png'}
                    price={200000}
                    rating={4}
                /><AppFavoriteCard
                    name='پاستا سبزیجات '
                    image={'./branch.png'}
                    price={200000}
                    rating={4}
                />
            </Box>
            <Box sx={{display:"flex",gap:"10px"}}>
                <AppCardMenu
                    title="پاستا سبزیجات"
                    description="پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده"
                    originalPrice={175000}
                    discountedPrice={150000}
                    discountPercent={20}
                    rating={2.5}
                    imageUrl="./branch.png"
                    onAddToCart={() => console.log("Added to cart")}
                />
                    <AppCardMenu
                    title="پاستا سبزیجات"
                    description="پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده"
                    originalPrice={175000}
                    discountedPrice={150000}
                    discountPercent={20}
                    rating={2.5}
                    imageUrl="./branch.png"
                    onAddToCart={() => console.log("Added to cart")}
                />
            </Box>

             <AppChipList items={categories} onChange={(ids) => console.log(ids)} />
            <AppFooter/>
        </Box>


    )
}
export default eee