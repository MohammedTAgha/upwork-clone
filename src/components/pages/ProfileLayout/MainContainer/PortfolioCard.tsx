import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function PortfolioCard({ ImgSrc, Content }:{ ImgSrc?: string, Content?:string }) {
  return (
    <Card sx={{ minWidth: 250, maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ImgSrc || "/assets/images/global/favicon.png"}
          alt={Content || "Portfolio Card"}
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="success" sx={{
          fontWeight: '600'
        }}>
          {Content || 'Portfolio Card'}
        </Button>
      </CardActions>
    </Card>
  );
}