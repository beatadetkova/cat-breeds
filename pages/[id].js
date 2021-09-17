import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

export async function getStaticPaths() {
  const res = await fetch('https://api.thecatapi.com/v1/breeds/')
  const cats = await res.json()

  const paths = cats.map((cat) => ({
    params: { id: cat.id },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.thecatapi.com/v1/breeds/${params.id}`)
  const cat = await res.json()

  return { props: { cat } }
}

const Info = styled.div`
  margin: 4rem;
  padding: 1.5rem;
  border: 1px solid #eaeaea;
  border-radius: 10px;
`;

const InfoDetails = styled.div`
  margin: 3rem 1.2rem;
`;

const useStyles = makeStyles({
  box: {
    width: 200,
  },
  backButton: {
    marginLeft: '0.5rem'
  },
  info: {
    backgroundColor: 'white',
    boxShadow: '5px 5px 10px #666'
  }
});

export default function CatDetailPage ( { cat }) {
  const catTraits = ['adaptability', 'affection_level', 'child_friendly', 'dog_friendly', 'energy_level', 'grooming', 'health_issues', 'intelligence', 'shedding_level', 'social_needs', 'stranger_friendly', 'vocalisation']

  const classes = useStyles();

  return ( 
    <Info className={classes.info}>
      <Button className={classes.backButton} variant="contained" href="/">
        <ArrowBackIosOutlinedIcon />
        <span>Back</span>
      </Button>
      <InfoDetails>
        <p><b>Name:</b> {cat.name}</p>
        <p><b>Temperament:</b> {cat.temperament}</p>
        <p><b>Origin:</b> {cat.origin}</p>
        <p><b>Description:</b> {cat.description}</p>
        <p><b>Life span:</b> {cat.life_span}</p>
        <Button variant="contained" href={cat.wikipedia_url} target="_blank" rel="noreferrer noopener">Wikipedia</Button>
      </InfoDetails>
      {catTraits.map((trait, i) => {
        const capitalizedTrait = trait.charAt(0).toUpperCase() + trait.slice(1);
        const traitName = capitalizedTrait.replace(/_/g, ' ');
        return (
          <Box className={classes.box} component="fieldset" mb={3} borderColor="transparent" key={i}>
            <Typography component="legend">{traitName}</Typography>
            <Rating name="read-only" value={cat[trait]} readOnly />
          </Box>
        )
      })}
    </Info>
  )
}
