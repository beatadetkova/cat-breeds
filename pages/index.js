import React, { useState, useEffect } from 'react';
import {
  Container,
  Main,
  Title,
  Grid,
} from '../styles/Styles.js';
import SearchBox from './components/SearchBox.js';
import Card from './components/Card.js'


export async function getStaticProps() {
  const res = await fetch(`https://api.thecatapi.com/v1/breeds/`)
  const cats = await res.json()

  return { 
    props: { 
      cats 
    } 
  }
}

export default function Home({ cats }) {
  const [query, setQuery] = useState('')
  const [filteredCats, setFilteredCats] = useState(cats)

  useEffect(() => {
    if (query !== '') {
      setFilteredCats(cats.filter((cat) => cat.name.toLowerCase().startsWith(query.toLowerCase())))
    } else {
      setFilteredCats(cats)
    }
  }, [query, cats])


  return (
    <Container>
      <Main>
        <Title>
          Welcome to Cat Breeds!
        </Title>
        <SearchBox onQuery={setQuery}/>
        <Grid>
          {filteredCats.map((cat, i) => (
            <Card {...cat} key={i} />
          ))}
        </Grid>
      </Main>
    </Container>
  )
}
