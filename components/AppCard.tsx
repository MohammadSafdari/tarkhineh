import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { forwardRef, ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material';
import {Box} from '@mui/material';


interface AppCardProps {
  children?: ReactNode;
  img?: string;
  rate?: number;
  title?: string;
  description?: string;
  color?: boolean;
  oldPrice?: number;
  price?: number;
  discount?: number;
  size?: "sm" | "md" | "lg" | "xl";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  sx?: SxProps<Theme>;
}

const AppCard = forwardRef<HTMLDivElement, AppCardProps>(
  (
    {
      children,
      img,
      rate,
      title,
      description,
      color,
      oldPrice,
      price,
      discount,
      size = "lg",
      radius = "sm",
      disabled = false,
      onClick,
      className,
      sx,
    },
    ref
  ) => {
    
    const sizeMap = {
      sm: 200,
      md: 250,
      lg: 300,
      xl: 350,
    };

     const radiusMap = {
      none: 0,
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16,
      full: 9999,
    };

    return (
      <Card
        ref={ref}
        className={className}
        sx={{
          maxWidth: sizeMap[size],
          height:"340px",
          borderRadius: radiusMap[radius],
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? "not-allowed" : "pointer",
          ...sx,
        }}
        onClick={disabled ? undefined : onClick}
      >
        <CardActionArea sx={{height:"100%"}}>

          {img && (
            <CardMedia
            component="img"
            height={sizeMap[size]}
            image={img}
            alt={title || "card image"}
            />
          )}
          <CardContent>
            <Box sx={{display:"flex",flexDirection:"column", gap:"12px"}}>
            <Box>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            {title && (
              <Typography sx={{fontSize:"16px",color:["#52595A"]}}>
                  {title}
                </Typography>
                )}
                {rate !== undefined && (
                  <Typography >
                    {rate} ⭐
                  </Typography>
                )}
                </Box>
                {description && (
                  <Typography sx={{fontSize:"16px",color:["#52595A"],fontWeight:"400"}}>
                    {description}
                  </Typography>
                )}
              </Box>
              <Box>
              {color && (
                <Box sx={{display:"flex",gap:"4px"}}>
                  <Box sx={{backgroundColor:["#52595A"],borderRadius:"100px",paddingX:"10px",paddingY:"4px"}}></Box>
                  <Box sx={{backgroundColor:["#745F38"],borderRadius:"100px",paddingX:"10px",paddingY:"4px"}}></Box>
                  <Box sx={{backgroundColor:["#D1D4D4"],borderRadius:"100px",paddingX:"10px",paddingY:"4px"}}></Box>
                  <Box sx={{backgroundColor:["#737272"],borderRadius:"100px",paddingX:"10px",paddingY:"4px"}}></Box>
                </Box>
              )}
              </Box>
              <Box>
              {(price !== undefined || oldPrice !== undefined || discount) && (
                <Box sx={{display:"flex",alignItems:"end",justifyContent:"space-between"}}>
                    {discount && discount > 0 && (
                      <Typography sx={{backgroundColor:['#F87171'],color:"white",paddingX:"8px",paddingY:"2px",borderRadius:"100px",fontSize:"12px"}}>
                        {discount}%
                      </Typography>
                    )}
                  <Box sx={{display:"flex",flexDirection:"column",alignItems:"end",gap:"4px"}}>
                    {oldPrice && (
                      <Typography sx={{ textDecoration: "line-through",color:["#52595A"],fontSize:"14px"}}>
                        ${oldPrice.toFixed(2)}
                      </Typography>
                    )}
                      {price && 
                        <Typography sx={{textAlign:"end"}}>${price.toFixed(2)}</Typography>
                      }
                  </Box>
                </Box>
              )}
              </Box>
              </Box>
              {children && <div>{children}</div>}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
);

export default AppCard;