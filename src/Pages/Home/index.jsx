import BodyMain from "../../components/BodyMain";
import Header from "../../components/Header";
import ContainerCards from "../../components/ContainerCards";
import Cards from "../../components/Cards";
import Titulo from "../../components/Titulos";
import Formacao from "../../components/Formacao";

function Home() {
  return (
    <>
      <div className="mx-32">
        <Header />
        <BodyMain>
          <Titulo titulo="Titulo" border="border-b-2" />
        </BodyMain>
        <ContainerCards>
          <Titulo titulo="Serviços" flex="justify-center" />
          <section className="flex gap-5 mt-5">
            <Cards
              imagem="sack-dollar.png"
              titulo="Teste"
              conteudo="lorem lorem lorem lorem lorem lorem lorem lorem lorem "
            />
            <Cards
              imagem="sack-dollar.png"
              titulo="Teste"
              conteudo="lorem lorem lorem lorem lorem lorem lorem lorem lorem "
            />
            <Cards
              imagem="sack-dollar.png"
              titulo="Teste"
              conteudo="lorem lorem lorem lorem lorem lorem lorem lorem lorem "
            />
          </section>
        </ContainerCards>
        <Formacao>
          <Titulo titulo="Minha Formação" flex="justify-center" />
        </Formacao>
      </div>
    </>
  );
}

export default Home;
