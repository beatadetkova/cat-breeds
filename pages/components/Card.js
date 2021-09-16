import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  description: {
    height: 80,
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 4,
    wordBreak: "break-word",
    overflow: "hidden"
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

const StyledWiki = styled.a`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-decoration: none;
`;

export default function MediaCard({ name, id, description, life_span: lifespan, wikipedia_url: wikipediaUrl}) {
  const classes = useStyles();

  return (
    <Card>
      <Link href={`/${id}`} passHref>
        <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography  className={classes.description} variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
              </CardContent>
        </CardActionArea>
      </Link>
      <CardActions className={classes.actions}>
        <Typography variant="body2" color="textSecondary" component="p">
          Lifespan: {lifespan}
        </Typography>
        {wikipediaUrl &&
          <StyledWiki href={wikipediaUrl} target="_blank" rel="noreferrer noopener">
            Wikipedia
          </StyledWiki>
        }
      </CardActions>
    </Card>
  );
}

