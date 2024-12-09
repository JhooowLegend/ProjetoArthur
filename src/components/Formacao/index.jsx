import image from "./BrasaoPUC.png";

function Formacao({ children }) {
  return (
    <section className="my-10 flex flex-col gap-5">
      {children}
      <div className="flex items-center justify-center">
        <div className="basis-3/5">
          <h3>PUC MINAS</h3>
          <p>Arquitetura</p>
        </div>

        <div>
          <img className="max-w-60" src={image} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Formacao;
