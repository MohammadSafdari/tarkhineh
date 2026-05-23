import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppLogo from "@/src/components/ui/AppLogo";
import AppMenuBar from "@/src/components/ui/AppMenuBar";
import AppProfile from "@/src/components/ui/AppProfile";
import AppBadge from "@/src/components/ui/AppBadge";
import AppSearchBox from "@/src/components/ui/AppSearchBox";
import AppSearchButton from "@/src/components/ui/AppSearchButton";

const Navbar =() => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar
                position="static"
                sx={{ backgroundColor: 'secondary.contrastText',paddingX:"108px", paddingY:"20px"}}>
                <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent:"space-between"}}>
                    <Box sx={{display:"flex",gap:"4px"}}>
                        <AppProfile/>
                        <AppBadge/>
                        <AppSearchButton/>
                    </Box>
                    <AppMenuBar/>
                    <AppLogo/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;