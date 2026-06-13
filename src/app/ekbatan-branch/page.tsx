import { Box } from "@mui/material";
import AppProductCard from "@/src/components/ui/AppProductCard";
import { theme } from "@/src/theme/theme";
import AppSlider from "@/src/components/ui/AppSlider";

const MOCK_PRODUCT = {
    name: "ekbatan",
    image: "branch.png",
    price: 100,
    originalPrice: 200,
    discountPercent: 10,
    rating: 5,
    ratingCount: 4,
};

const rowSx = {
    display: 'flex',
    gap: '1rem',
    width: '90%',
    paddingTop: '1rem',
    paddingBottom: '1rem',
};

const ProductRow = ({ bgcolor }: { bgcolor?: string }) => (
    <Box sx={{ ...rowSx, ...(bgcolor && { backgroundColor: bgcolor }) }}>
        {Array.from({ length: 4 }, (_, i) => (
            <AppProductCard key={i} {...MOCK_PRODUCT} />
        ))}
    </Box>
);

const Ekbatan = () => (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <AppSlider />
        <ProductRow />
        <ProductRow bgcolor={theme.palette.primary.main} />
        <ProductRow />
        <AppSlider />
    </Box>
);

export default Ekbatan;