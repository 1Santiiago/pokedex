import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { color, textAlign } from '@mui/system';

export default function PokemonCard({name, type, image, id}) {
  return (
    <Card sx={{ maxWidth: 400, marginTop: "2em", textAlign:"center", backgroundColor:"#EB906A"}}>
      <CardMedia
        component="img"
        alt="pokedex"
        width="100%"
        height={'auto'}
        image = {image}
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          #{id}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" letterSpacing="10px">
          {name.toUpperCase()}
        </Typography>
        <Typography variant="body6" color="#fff" letterSpacing="2px">
          Type: <sup>{type}</sup>
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
