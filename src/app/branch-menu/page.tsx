"use client";

import { useMemo } from "react";
import { Box } from "@mui/material";
import AppSlider from "@/src/components/ui/AppSlider";
import AppMenuCard from "@/src/components/ui/AppMenuCard";
import AppChipList from "@/src/components/ui/AppChipList";
import AppSearchBox from "@/src/components/ui/AppSearchBox";

// ── Types ─────────────────────────────────────────────────────────────────────

interface MenuItem {
    id: number;
    title: string;
    description: string;
    originalPrice: number;
    discountedPrice: number;
    discountPercent: number;
    rating: number;
    imageUrl: string;
}

// ── Mock data ─────────────────────────────────────────────────────────────────

const MOCK_MENU_ITEM: Omit<MenuItem, "id"> = {
    title: "dd",
    description: "dd",
    originalPrice: 55,
    discountedPrice: 2,
    discountPercent: 2,
    rating: 1,
    imageUrl: "/branch.png",
};

const MOCK_MENU_ITEMS_COUNT = 20;

// ── Page ──────────────────────────────────────────────────────────────────────
const chipItems = [
    { id: 1, label: "ری‌اکت" },
    { id: 2, label: "نکست" },
    { id: 3, label: "تایپ‌اسکریپت" },
    { id: 4, label: "Material UI" },  { id: 2, label: "نکست" },
];

const BranchMenu = () => {
    const menuItems: MenuItem[] = useMemo(
        () =>
            Array.from({ length: MOCK_MENU_ITEMS_COUNT }, (_, i) => ({
                ...MOCK_MENU_ITEM,
                id: i + 1,
            })),
        []
    );

    return (
        <Box
            component="main"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
            }}
        >
            <AppSlider />

            <Box sx={{display: "grid",gridTemplateColumns: "50% 50%",alignItems:'center',justifyContent:"space-between",gap:"1  rem",width:'90%'}}>

                <AppSearchBox
                size="small"
                />

                <AppChipList
                    items={chipItems}
                />
            </Box>


            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 2,
                    width: "90%",
                }}
            >
                {menuItems.map((item) => (
                    <AppMenuCard key={item.id} {...item} />
                ))}
            </Box>
        </Box>
    );
};

export default BranchMenu;