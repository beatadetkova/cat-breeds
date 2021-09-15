
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

const CatDetailPage = ( { cat }) => {
  return ( 
    <div>
      <p>Name: {cat.name}</p>
      <p>Temperament: {cat.temperament}</p>
      <p>Origin: {cat.origin}</p>
      <p>Description: {cat.description}</p>
      <p>Life span: {cat.life_span}</p>
      <button><a href={cat.wikipedia_url}>Wikipedia</a></button>
    </div>
  )
}



export default CatDetailPage;
