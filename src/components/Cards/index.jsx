function Cards({ imagem, titulo, conteudo }) {
  return (
    <section className="flex items-center flex-col justify-center h-96 p-9 border-2 rounded-sm gap-5">
      <img className="w-14" src={`/images/${imagem}`} alt="" />
      <h3>{titulo}</h3>
      <p>{conteudo}</p>
    </section>
  );
}

export default Cards;
