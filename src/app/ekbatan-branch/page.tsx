"use client";

import { Box, Container } from "@mui/material";
import { useMemo } from "react";
import AppProductCard from "@/src/components/ui/AppProductCard";
import AppSlider from "@/src/components/ui/AppSlider";
import AppCardComment from "@/src/components/ui/AppCardComment";
import { theme } from "@/src/theme/theme";


interface Product {
    name: string;
    image: string;
    price: number;
    originalPrice: number;
    discountPercent: number;
    rating: number;
    ratingCount: number;
}

interface Comment {
    authorName: string;
    date: string;
    comment: string;
    rating: number;
}


const MOCK_PRODUCT: Product = {
    name: "ekbatan",
    image: "branch.png",
    price: 100,
    originalPrice: 200,
    discountPercent: 10,
    rating: 5,
    ratingCount: 4,
};

const MOCK_COMMENTS: Comment[] = [
    {
        authorName: "محمدحسین صفدری",
        date: "2",
        comment:
            "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.",
        rating: 5,
    },
    {
        authorName: "محمدحسین صفدری",
        date: "2",
        comment:
            "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.",
        rating: 5,
    },
];

const PRODUCTS_PER_ROW = 4;


interface ProductRowProps {
    products: Product[];
    bgcolor?: string;
}

const ProductRow = ({ products, bgcolor }: ProductRowProps) => (
    <Box
        sx={{
            display: "flex",
            gap: 2,
            width: "90%",
            py: 2,
                ...(bgcolor && { backgroundColor: bgcolor, px: 2, borderRadius: 2 }),
        }}
    >
        {products.map((product, i) => (
            <AppProductCard key={`${product.name}-${i}`} {...product} />
        ))}
    </Box>
);

const CommentsSection = ({ comments }: { comments: Comment[] }) => (
    <Box
        sx={{
            display: "flex",
            width: "90%",
            gap: 2,
            py: 4,
        }}
    >
        {comments.map((c, i) => (
            <AppCardComment key={i} {...c} />
        ))}
    </Box>
);


const Ekbatan = () => {
    const featuredProducts = useMemo(
        () => Array.from({ length: PRODUCTS_PER_ROW }, () => MOCK_PRODUCT),
        []
    );

    return (
        <Box
            component="main"
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Hero slider */}
            <AppSlider />

            {/* Product sections */}
            <ProductRow products={featuredProducts} />

            <ProductRow
                products={featuredProducts}
                bgcolor={theme.palette.primary.main}
            />

            <ProductRow products={featuredProducts} />

            {/* Secondary slider */}
            <AppSlider />

            {/* Customer reviews */}
            <CommentsSection comments={MOCK_COMMENTS} />
        </Box>
    );
};

export default Ekbatan;