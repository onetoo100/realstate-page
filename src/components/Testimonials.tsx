import ImageComponent from "./ui/image";
import testimonial from "../assets/testimonial.jpg";
import blog1 from "../assets/blog_1.jpg";
import blog2 from "../assets/blog_2.jpg";
import blog3 from "../assets/blog_3.jpg";
import { testimonialsData } from "../data/data";

const Testimonials = () => {
  return (
    <div className="testimoniales-blog contenedor">
      <section className="testimoniales-blog__testimoniales">
        <h2 className="testimoniales-blog__heading">
          Que dicen <span>Nuestros Clientes</span>{" "}
        </h2>

        <div className="testimonial">
          <ImageComponent
            className="testimonial__imagen"
            imageUrl={testimonial}
            alt="imagen testimonial"
          />
          <div className="testimonial__contenido">
            <p className="testimonial__nombre">Familia Messi</p>
            <p className="testimonial__texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              aliquam deleniti. Id, quas porro illo deleniti excepturi hic unde
              eum vel mollitia aliquid molestiae earum harum exercitationem
              doloribus iste. Nostrum.
            </p>
          </div>
        </div>
      </section>
      <section className="testimoniales-blog__blog">
        <h2 className="testimoniales-blog__heading">
          Últimas entradas <span>de nuestro Blog</span>{" "}
        </h2>

        {testimonialsData.map((e, index) => (
          <div key={index} className="entrada">
            <div className="entrada__imagen-contenedor">
              <ImageComponent
                className="entrada__imagen"
                imageUrl={index === 0 ? blog1 : index === 1 ? blog2 : blog3}
                alt="imagen blog"
              />
            </div>
            <div className="entrada__contenido">
              <h3 className="entrada__nombre">{e.title}</h3>
              <p className="entrada__meta">{e.fecha}</p>
              <p className="entrada__texto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est
                neque, asperiores veritatis dolorum nisi
              </p>
              <a className="entrada__enlace" href="#">
                Leer Artículo
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Testimonials;
