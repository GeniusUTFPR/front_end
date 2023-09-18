import React from "react";
// import { LogoUTFPR } from "../../components";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--cor-primaria)",
        height: "46px",
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <p
        style={{
          color: "#000000",
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
          fontWeight: "600",
          fontSize: "11px",
          margin: "0 auto",
        }}
      >
        {" "}
        Copyright © 2023. Todos os direitos reservados | Desenvolvido por:
        Eduardo R. , Rafaela T. , Milena C. , Walancy S.
      </p>

      {/* <LogoUTFPR/> */}
    </footer>
  );
};

export default Footer;