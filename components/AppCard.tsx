import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { forwardRef, ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material';
import {Box} from '@mui/material';
import { display } from '@mui/system';


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
          borderRadius: radiusMap[radius],
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? "not-allowed" : "pointer",
          ...sx,
        }}
        onClick={disabled ? undefined : onClick}
      >
        <CardActionArea disabled={disabled}>
          {img && (
            <CardMedia
              component="img"
              height={sizeMap[size]}
              image={img}
              alt={title || "card image"}
            />
          )}
          <CardContent>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>

            {title && (
                <Typography
                variant="h6"
                component="div"
                color={color ? "primary" : "textPrimary"}
                gutterBottom
                >
                {title}
              </Typography>
            )}
            {rate !== undefined && (
                <Typography variant="body2" color="text.secondary">
                ⭐ {rate}
              </Typography>
            )}
            </Box>
            {description && (
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            )}
            {(price !== undefined || oldPrice !== undefined || discount) && (
              <Typography variant="body2" color="text.secondary">
                {oldPrice && (
                  <span style={{ textDecoration: "line-through", marginRight: 8 }}>
                    ${oldPrice.toFixed(2)}
                  </span>
                )}
                {price && <span>${price.toFixed(2)}</span>}
                {discount && discount > 0 && (
                  <span style={{ marginLeft: 8, color: "red" }}>
                    ({discount}% OFF)
                  </span>
                )}
              </Typography>
            )}
            {children && <div>{children}</div>}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
);

export default AppCard;