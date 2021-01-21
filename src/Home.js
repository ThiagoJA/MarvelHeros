import styled from 'styled-components';
import Logo from '../src/components/Logo/Logo';
import Results from '../src/components/Results/Results';

const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0px 20px;
  @media (min-width: 768px) {
    padding: 0px 40px;
  }
  @media (min-width: 1366px) {
    padding: 0px 10%;
  }
  h2 {
    font-size: 20px;
    color: #404040;
    margin: 12px;
    @media (min-width: 768px) {
      font-size: 30px;
    }
    @media (min-width: 1650px) {
      font-size: 40px;
    }
  }
  p {
    font-size: 12px;
    color: #8C8C8C;
    margin-bottom: 30px;
    @media (min-width: 768px) {
      font-size: 14px;
    }
    @media (min-width: 1650px) {
      font-size: 16px;
    }
  }
`

function Home() {
  return (
    <div>
      <PageHeader>
          <Logo />
          <div>
            <h2>EXPLORE O UNIVERSO</h2>
            <p>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
          </div>
      </PageHeader>
      <section>
        <Results />
      </section>
    </div>
  );
}

export default Home;
