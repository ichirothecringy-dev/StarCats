import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4 ">
            <span className="h4 d-flex">StarCats  &#174; </span>
            <a href="/">
              <img
                src="/logostarcats-light.svg"
                alt="Cat Cafe Logo"
                width={80}
                height={80}
                className=" ms-3 "
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <ul className="list-unstyled mb-0">
              <li className="">
                <Link to="/" className="text-decoration-none text-white">
                  Inicio
                </Link>
              </li>
              <li className="">
                <Link to="/about" className="text-decoration-none text-white">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/Productos"
                  className="text-decoration-none text-white"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  to="/Productos"
                  className="text-decoration-none text-white"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="/" className="text-white me-3">
                <i className="bi bi-facebook fs-3"></i>
                <span className="visually-hidden">Facebook</span>
              </a>
              <a href="/" className="text-white me-3">
                <i className="bi bi-twitter fs-3"></i>
                <span className="visually-hidden">Twitter</span>
              </a>
              <a href="/" className="text-white">
                <i className="bi bi-instagram fs-3"></i>
                <span className="visually-hidden">Instagram</span>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <p className="mb-1">123 Cat Street, Meowtown, CA 12345</p>
            <p className="mb-1">Teléfono: (555) 555-5555</p>
            <p className="mb-0">Abierto de 8am a 6pm</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
