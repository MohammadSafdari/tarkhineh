"use client"
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useRouter } from "next/navigation";


const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
    
  },
}));

export default function CustomizedBadges() {
  const router = useRouter();
  return (
      <IconButton aria-label="cart" onClick={() => router.push("/register")}>
          <ShoppingCartOutlinedIcon sx={{width:24,height:24}} />
      </IconButton>
     
  );
}
