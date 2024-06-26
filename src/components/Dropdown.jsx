import { useEffect, useState } from "react";
import "bootstrap";
import styles from "../styles/NavBar.module.css";

export default function DropDown({ info: { name } }) {
  const [selected, setSelected] = useState(null);
  const catFromState = ["Café en granos", "Bebidas", "Comidas"];

  useEffect(() => setSelected(null), []);

  return (
    <div className="dropdown">
      <a
        className="nav-link dropdown-toggle"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {name}
      </a>
      <div
        className={`dropdown-menu p-2 ${styles.dropdownMenu} text-center`}
        style={{ width: selected != null ? 600 : 300 }}
      >
        <div className="row">
          <div className="col text-center">
            <h6 className={styles.dropdownHeader}>Categorías</h6>
            <div className="list-group">
              {catFromState.map((category, index) => (
                <a
                  key={index}
                  className={`border-0 rounded-3 list-group-item list-group-item-action ${
                    selected === index ? styles.dropdownItemSelected : styles.dropdownItem
                  }`}
                  href="#"
                  onMouseEnter={() => setSelected(index)}
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
          {selected != null && (
            <div className="col-6 text-center">
              <h6 className={styles.dropdownHeader}>Productos</h6>
              {selected === 0 && (
                <div id="ListaCafe" className="list-group list-group-flush">
                  <a className={`list-group-item list-group-item-action border-0 rounded-3 ${styles.dropdownItem}`} href="#">
                    México ATM
                  </a>
                  <a className={`list-group-item list-group-item-action border-0 rounded-3 ${styles.dropdownItem}`} href="#">
                    Brasil Crucera
                  </a>
                  <a className={`list-group-item list-group-item-action border-0 rounded-3 ${styles.dropdownItem}`} href="#">
                    El Salvador VV
                  </a>
                </div>
              )}
              {selected === 1 && (
                <div id="ListaPostres" className="list-group list-group-flush">
                  <a className={`list-group-item list-group-item-action border-0 rounded-3 ${styles.dropdownItem}`} href="#">
                    Tarta de almendras
                  </a>
                  <a className={`list-group-item list-group-item-action border-0 rounded-3 ${styles.dropdownItem}`} href="#">
                    Postre de coco
                  </a>
                  <a className={`list-group-item list-group-item-action border-0 rounded-3 ${styles.dropdownItem}`} href="#">
                    Cheesecake de frutilla
                  </a>
                </div>
              )}
              {selected === 2 && (
                <div id="ListaConfiteria" className="list-group list-group-flush">
                  <a className={`list-group-item list-group-item-action border-0 rounded-3 ${styles.dropdownItem}`} href="#">
                    Croissant con jamón y queso
                  </a>
                  <a className={`list-group-item list-group-item-action border-0 rounded-3 ${styles.dropdownItem}`} href="#">
                    Sándwiches olímpicos de copetín
                  </a>
                  <a className={`list-group-item list-group-item-action border-0 rounded-3 ${styles.dropdownItem}`} href="#">
                    Sándwiches de atún
                  </a>
                </div>
              )}
              <span>
                <a href="/products">Ver más -</a>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
