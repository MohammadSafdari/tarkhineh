import Box from "@mui/material/Box"
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const QuickFilter = () => {
    return(
        <Box sx={{
            display:"flex",
            gap:"12px",
            paddingX:"78px",
            paddingY:"10px"
        }}
        >
            <Button>
                <PersonOutlineOutlinedIcon/>
                <Typography>دسته بندی کالا</Typography>
            </Button>
              <Button>
                <PersonOutlineOutlinedIcon/>
                <Typography>شگفت انگیزها</Typography>
            </Button>
              <Button>
                <PersonOutlineOutlinedIcon/>
                <Typography>ترند ترین</Typography>
            </Button>
              <Button>
                <PersonOutlineOutlinedIcon/>
                <Typography>پرفروش ترین</Typography>
            </Button>
              <Button>
                <PersonOutlineOutlinedIcon/>
                <Typography>محبوب ترین</Typography>
            </Button>
              <Button>
                <PersonOutlineOutlinedIcon/>
                <Typography>سوالات شما</Typography>
            </Button>
        </Box>
    )
}

export default QuickFilter;