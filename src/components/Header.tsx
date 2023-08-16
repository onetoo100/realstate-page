import Nav from "./Nav";
import ImageComponent from "./ui/image";
import logo from "../assets/logo.svg";
import headerImage from "../assets/imagenHeader.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__barra contenedor">
        <div className="header__logo">
          <ImageComponent imageUrl={logo} alt="logo real state" />
        </div>

        <Nav />
      </div>

      <div className="contenedor">
        <div className="header__contenido ">
          <h1 className="header__heading">
            Encuentra tu casa de lujo al mejor precio
          </h1>
          <p className="header__texto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea
            pariatur dolores ducimus! Repellendus maiores nemo tempore,
            cupiditate pariatur expedita
          </p>
          <ImageComponent
            imageUrl={headerImage}
            className="header__imagen"
            alt="imagen header"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
