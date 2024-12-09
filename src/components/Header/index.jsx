import Button from "../Button";

function Header() {
  return (
    <header className="font-custom flex justify-between items-center h-20">
      <div>
        <a href="#">Logo</a>
      </div>
      <nav>
        <ul className="flex gap-8">
          <li className="flex items-center">
            <a href="#">Sobre mim</a>
          </li>
          <li className="flex items-center">
            <a href="#">Serviços</a>
          </li>
          <li className="flex items-center">
            <a href="#">Minha Formação</a>
          </li>
          <li className="flex items-center">
            <a href="#">Meus trabahos</a>
          </li>
          <li className="flex items-center">
            <Button>Contate-me</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
