import Head from 'next/head';
import Image from 'next/image';
import {
  Container,
  Main,
  Title,
  Grid,
  Input,
  Button,
} from '../styles/Styles.js';
import SearchBox from './components/SearchBox.js';
import Card from './components/Card.js'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          Welcome to Cat Breeds!
        </Title>

        <SearchBox />

        <Grid>
          <Card>
          </Card>
        </Grid>
      </Main>
    </Container>
  )
}
