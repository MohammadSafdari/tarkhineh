import AppInput from '@/components/AppInput';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';



const NavBar = () => {
    return(
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"white", height:"110px"}}>
        <Toolbar sx={{display:"flex"}}>
            <AppInput
             name='hot'
             label='hot'
             radius='lg'
             placeholder='dont touch'
             size='sm'
             
            />
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default NavBar   