import AppInput from '@/components/AppInput';
import AppLogo from '@/components/AppLogo';
import CustomizedMenus from '@/components/AppProfileButton';
import CustomizedBadges from '@/components/AppShoppingButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import QuickFilter from './QuickFilter';

const NavBar = () => {
    return(
       <Box sx={{ flexGrow: 1}}>
          <AppBar   
          position="static"
          sx={{
            backgroundColor:"white",
             height:"110px",
              paddingX:"100px",
              display:"flex",
              justifyContent:"center",
              boxShadow:'none',
             borderBottom: "1px solid #E1E2E3"

               }}>
            <Toolbar 
            sx={{
                display: "grid",
                gridTemplateColumns: "70% 30%",
                alignItems: "center",          
                columnGap: "16px",             
              }}
              >
              <Box sx={{display:"flex",alignItems:"center",gap:'24px'}}>
                 <AppLogo />

                <AppInput 
                name='جستجو'
                placeholder='جستجو'
                radius='lg'
                startContent={
                <SearchIcon
                  sx={{
                    color:"#C2C5C6",
                    width:24,
                    marginLeft:'2px'
                  }}/>
                }
                />
              </Box>
              <Box sx={{display:"flex",justifyContent:"end",gap:"16px"}}>
                <CustomizedMenus/>
                <CustomizedBadges/>
              </Box>
            </Toolbar>
          </AppBar>
          <QuickFilter/>
       </Box>
    )
}

export default NavBar;