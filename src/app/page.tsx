"use client";



import Navbar from "@/src/components/layouts/Navbar";
import AppSlider from "@/src/components/ui/AppSlider";
import AppFooter from "@/src/components/layouts/AppFooter";
import AppChooseBranch from "@/src/components/ui/AppChooseBrand";
import Box from "@mui/material/Box";

const eee = () => {
    return(
        <>
          <Navbar/>
            <AppSlider/>
            <Box sx={{display:"flex", gap:"8px",paddingY:'25px'}}>
                <AppChooseBranch
                    size="medium"
                    branch={{
                        id: '1',
                        name: 'شعبه اکباتان',
                        address: 'شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم',
                        image: '/branch.png',
                    }}
                />   <AppChooseBranch
                    size="medium"
                    branch={{
                        id: '1',
                        name: 'شعبه اکباتان',
                        address: 'شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم',
                        image: '/branch.png',
                    }}
                />   <AppChooseBranch
                    size="medium"
                    branch={{
                        id: '1',
                        name: 'شعبه اکباتان',
                        address: 'شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم',
                        image: '/branch.png',
                    }}
                />   <AppChooseBranch
                    size="medium"
                    branch={{
                        id: '1',
                        name: 'شعبه اکباتان',
                        address: 'شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم',
                        image: '/branch.png',
                    }}
                /> <AppChooseBranch
                    size="medium"
                    branch={{
                        id: '1',
                        name: 'شعبه اکباتان',
                        address: 'شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم',
                        image: '/branch.png',
                    }}
                />
            </Box>

            <AppFooter/>
        </>


    )
}
export default eee