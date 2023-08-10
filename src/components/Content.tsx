import { propertiesData } from "../data/data";

const Content = () => {
  return (
    <main className="propiedades contenedor">
      <h2 className="propiedades__heading">
        Nuestras <span>Propiedades</span>
      </h2>

      <div className="propiedades__grid">
        {propertiesData.map((e, index) => (
          <div key={index} className="propiedad">
            <div className="propiedad__imagen">
              <h3 className="propiedad__nombre">{e.title}</h3>
            </div>
            <div className="propiedad__contenido">
              <p className="propiedad__texto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                dolores adipisci totam eaque sunt facilis esse alias eius ullam
                non possimus ex, hic molestiae error amet soluta sit eum sint.
              </p>
              <p className="propiedad__precio">{e.price}</p>
              <a className="propiedad__enlace" href="#">
                Ver Propiedad
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Content;
