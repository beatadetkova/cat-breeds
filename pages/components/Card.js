import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const StyledWiki = styled.a`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

export default function MediaCard({ name, description, life_span: lifespan, wikipedia_url: wikipediaUrl}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="body2" color="textSecondary" component="p">
          {lifespan}
        </Typography>
        <StyledWiki href={wikipediaUrl}>
            Wikipedia
        </StyledWiki>
      </CardActions>
    </Card>
  );
}

