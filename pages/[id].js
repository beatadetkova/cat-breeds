import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Link from 'next/link';

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
  margin: 1rem;
  padding: 1.5rem;
  border: 1px solid #eaeaea;
  border-radius: 10px;
`;

const InfoDetails = styled.div`
  margin: 3rem 1.2rem;
`;

const CatDetailPage = ( { cat }) => {
  return ( 
    <Info>
      <Link href="/">
        Back
      </Link>
      <InfoDetails>
        <p><b>Name:</b> {cat.name}</p>
        <p><b>Temperament:</b> {cat.temperament}</p>
        <p><b>Origin:</b> {cat.origin}</p>
        <p><b>Description:</b> {cat.description}</p>
        <p><b>Life span:</b> {cat.life_span}</p>
        <Button variant="contained" href={cat.wikipedia_url}>Wikipedia</Button>
      </InfoDetails>
      
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Adaptability</Typography>
        <Rating name="read-only" value={cat.adaptability} readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Affection level</Typography>
        <Rating name="read-only" value={cat.affection_level} readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Child friendly</Typography>
        <Rating name="read-only" value={cat.child_friendly} readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Dog friendly</Typography>
        <Rating name="read-only" value={cat.dog_friendly} readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Energy level</Typography>
        <Rating name="read-only" value={cat.energy_level} readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Grooming</Typography>
        <Rating name="read-only" value={cat.grooming} readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Health issues</Typography>
        <Rating name="read-only" value={cat.health_issues} readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Intelligence</Typography>
        <Rating name="read-only" value={cat.intelligence} readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Shedding level</Typography>
        <Rating name="read-only" value={cat.shedding_level} readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Social needs</Typography>
        <Rating name="read-only" value={cat.social_needs} readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Stranger friendly</Typography>
        <Rating name="read-only" value={cat.stranger_friendly} readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Vocalisation</Typography>
        <Rating name="read-only" value={cat.vocalisation} readOnly />
      </Box>
    </Info>
  )
}



export default CatDetailPage;
