function Titulo({ titulo, flex, border }) {
  return <h2 className={`flex text-5xl pb-5 ${border} ${flex}`}>{titulo}</h2>;
}

export default Titulo;
