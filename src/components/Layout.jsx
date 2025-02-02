import { useAuth } from "../context/AuthContext";
import Authentication from "./Authentication";
import Modal from "./Modal";

import { useState } from "react";

export default function Layout(props) {
  const { children } = props;

  const [showModal, setShowModal] = useState(true);

  const { globalUser, logout } = useAuth();

  const header = (
    <header>
      <div>
        <h1 className="text-gradient">CAFFIEND</h1>
        <p>For Coffee Insatiates</p>
      </div>
      {globalUser ? (
        <button onClick={logout}>
          <p>Logout</p>
          <i className="fa-solid fa-mug-hot"></i>
        </button>
      ) : (
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          <p>Sign up free</p>
          <i className="fa-solid fa-mug-hot"></i>
        </button>
      )}
    </header>
  );

  const footer = (
    <footer>
      <p>
        <span className="text-gradient">Caffiend</span> was made by{" "}
        <a
          target="_blank"
          href="https://huyhuynh-portfolio-website.netlify.app/"
        >
          Huy Huynh
        </a>
        <br></br>
        using the FantaCSS
        <p>
          Check my project:{" "}
          <a target="_blank" href="https://github.com/HuyHuynh2k2">
            GITHUB
          </a>
        </p>
      </p>
    </footer>
  );

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    // "Chilren represent more than one components, such as Hero or CoffeeForm"
    <>
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <Authentication handleCloseModal={handleCloseModal} />
        </Modal>
      )}
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
