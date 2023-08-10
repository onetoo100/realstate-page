import Nav from "./Nav";
import logo from "../assets/logo.svg";
import ImageComponent from "./ui/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid contenedor">
        <div className="footer__box">
          <h3 className="footer__heading">Navegación</h3>
          <Nav />
        </div>

        <div className="footer__box">
          <h3 className="footer__heading">Nosotros</h3>
          <p className="footer__texto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            dolore quo tempore! Atque porro quibusdam voluptas nisi corrupti.
            Unde, ipsam vel deleniti magnam nulla nemo suscipit sunt porro
            blanditiis? Nemo.
          </p>
        </div>

        <div className="footer__box">
          <ImageComponent imageUrl={logo} alt="imagen logo" />
        </div>
      </div>

      <p className="footer__copyright">
        Todos los Derechos Reservados Real State
      </p>
    </footer>
  );
};

export default Footer;
