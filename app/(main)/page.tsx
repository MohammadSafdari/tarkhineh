"use client"

import { memo, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import AppCard from "@/components/AppCard";
import AppCategoryCard from "@/components/AppCategoryCard";
import AppCardBlog from "@/components/AppCardBlog";

const products = [
    {
        img: "./pic.png",
        rate: 3.5,
        color: true,
        title: "مبل دو نفره محمدم",
        description: "sepanta-01H810",
        price: 52100,
    },
    {
        img: "./pic.png",
        rate: 3.5,
        title: "مبل دو نفره سپنتا",
        description: "sepanta-01H810",
        oldPrice: 98540,
        price: 52100,
        discount: 30,
    },
    {
        img: "./pic.png",
        rate: 3.5,
        color: true,
        title: "مبل دو نفره سپنتا",
        description: "sepanta-01H810",
        oldPrice: 98540,
        price: 52100,
        discount: 30,
    },
    {
        img: "./pic.png",
        rate: 3.5,
        color: true,
        title: "مبل دو نفره سپنتا",
        description: "sepanta-01H810",
        oldPrice: 98540,
        price: 52100,
        discount: 30,
    },
];

const categories = Array(4).fill({
    title: "نور و روشنایی",
    img: "./pic.png",
});

const blogs = Array(4).fill({
    img: "imgBlog.png",
    date: "1405/08/22",
    ask: "فرش ایرانی در خانه مدرن",
    description: "فرش ایرانی یکی از با ارزش ترین محصولات",
});

const sectionRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    mt: "10px",
};

const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const ProductSection = memo(() => (
    <Box sx={sectionRowStyle}>
        {products.map((item, index) => (
            <AppCard key={index} {...item} />
        ))}
    </Box>
));

const Banner = memo(
    ({
         src,
         className = "",
         marginY = 0,
     }: {
        src: string;
        className?: string;
        marginY?: string | number;
    }) => (
        <Box sx={{ ...centerStyle, my: marginY }}>
            <img
                src={src}
                className={className}
                alt={src}
                loading="lazy"
            />
        </Box>
    )
);

export default function Home() {

    const renderedCategories = useMemo(
        () =>
            categories.map((item, index) => (
                <AppCategoryCard key={index} {...item} />
            )),
        []
    );

    const renderedBlogs = useMemo(
        () =>
            blogs.map((item, index) => (
                <AppCardBlog key={index} {...item} />
            )),
        []
    );



    return (
        <Box
            sx={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    mt: "50px",
                    gap: "14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    p: 2,
                }}
            >


                <Box sx={sectionRowStyle}>
                    {renderedCategories}
                </Box>
            </Box>

            <Banner src="./Frame.png" />

            <ProductSection />

            <Banner
                src="./Frame2.png"
                className="bg-red-500"
                marginY="30px"
            />

            <ProductSection />

            <Box
                sx={{
                    ...centerStyle,
                    width: "100%",
                    mt: 3,
                }}
            >
                <img
                    src="./Frame.png"
                    alt="Frame"
                    loading="lazy"
                />
            </Box>

            <Box
                sx={{
                    ...sectionRowStyle,
                    mt: 4,
                }}
            >
                {renderedBlogs}
            </Box>
        </Box>
    );
}