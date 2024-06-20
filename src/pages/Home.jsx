import styles from "../styles/Home.module.css";
import CarouselCats from "../components/CarouselCats";
import CarouselProducts from "../components/CarouselProducts";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar/";
import { useEffect, useState } from "react";
function Home() {
  const [products, setProducts] = useState([]);
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/products"
        );
        if (!response.ok) {
          throw new Error("API fetch error, !ok");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + "/kittens");
        if (!response.ok) {
          throw new Error("API fetch error, !ok");
        }
        const data = await response.json();
        setCats(data.kittens);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <header>
        <NavBar />
        <div>
          <div>
            <h1>STARCATS</h1>
            <p className={styles.pHeader}>
              Vive la experiencia <br />
              del café con felinos
            </p>
          </div>
          <img
            src="/public/header.png"
            alt="header image"
            className={`img-fluid ${styles.headerImage}`}
          />
          <div className={styles.btnHeader}>
            <a
              className={`${styles.btnLeft} d-flex justify-content-center`}
              href="/products"
              role="button"
            >
              <i className="bi bi-arrow-right"></i>
            </a>
            <a
              className={`${styles.btnRight}  d-flex justify-content-center`}
              href="/products"
              role="button"
            >
              Ver el menú
            </a>
          </div>
        </div>
      </header>
      <section className={styles.containerCategory}>
        <div className="container-fluid ">
          <div className="row">
            <h2>Categorias</h2>
            <div
              className={`"col-12 col-sm-12 col-lg-3 col-md-6 d-flex align-items-center text-wrap`}
            >
              <p className="fs-3">
                CADA PRODUCTO, UN COMPROMISO CON LA EXCELENCIA
              </p>
            </div>

            <div className="col-12 col-sm-12 col-lg-3 col-md-6 d-flex ">
              <div className={styles.card}>
                <img
                  src="img/categorias/cupcoffee.png"
                  alt="Cup of coffee"
                  className="img-fluid"
                />
                <a className="d-lg-none fs-3 mt-4" href="">
                  CAFÉ
                </a>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-lg-3 col-md-6 d-flex ">
              <div className={styles.card}>
                <img
                  src="img/categorias/medialuna.png"
                  alt="Medialuna"
                  className="img-fluid"
                />
                <a className="d-lg-none fs-3 mt-4" href="">
                  PASTELERÍA
                </a>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-lg-3 col-md-6 d-flex ">
              <div className={styles.card}>
                <img
                  src="img/categorias/beans.png"
                  alt="Coffee beans"
                  className="img-fluid"
                />
                <a className="d-lg-none fs-3 mt-4" href="">
                  GRANOS
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-3 justify-content-center d-none d-lg-flex ">
            <div className={`col-md-6 d-flex justify-content-center `}>
              <div className=" d-flex justify-content-center col-md-6 "></div>
              <div className={`col-md-6 d-flex justify-content-center `}>
                <a className="fs-2 " href="#">
                  CAFÉ
                </a>
              </div>
              <div className={`col-md-6 d-flex justify-content-center `}>
                <a className="fs-2 " href="#">
                  PASTELERÍA
                </a>
              </div>
              <div className={`col-md-6 d-flex justify-content-center `}>
                <a className="fs-2 " href="#">
                  GRANOS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CarouselProducts products={products} />
      <CarouselCats cats={cats} />
      <Footer />
    </>
  );
}

export default Home;
