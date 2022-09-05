import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PokemonCard({name, type, image}) {
  return (
    <Card sx={{ maxWidth: 345, marginTop: "2em" }}>
      <CardMedia
        component="img"
        alt="pokedex"
        height="140"
        image = {image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {type}
        </Typography>
      </CardContent>
      <CardActions>
   
      </CardActions>
    </Card>
  );
}
