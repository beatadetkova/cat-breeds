import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
padding: 5rem 0;
flex: 1;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`;

const Title = styled.div`
margin: 0;
padding-bottom: 30px;
line-height: 1.15;
font-size: 4rem;
text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  justify-items: stretch;
  max-width: 800px;
  margin-top: 3rem;
  grid-gap: 20px;
`;


export {  Container, Main, Title, Grid };