import Button from "../Button";
import image from "./img.png";

function BodyMain({ children }) {
  return (
    <main className="flex items-center justify-center border-t-2">
      <section className="basis-3/5">
        <img className="max-w-xl  " src={image} alt="" />
      </section>

      <section>
        {children}
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          eveniet velit laudantium alias officiis qui dolores aliquid facere eum
          iure quo! Quae quia a id dolore harum ullam esse inventore.
        </p>
        <Button>Conheça meus projetos</Button>
      </section>
    </main>
  );
}

export default BodyMain;
