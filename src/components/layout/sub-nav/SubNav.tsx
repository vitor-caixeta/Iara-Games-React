import React from "react";
import Stack from "react-bootstrap/Stack";

function SubNav() {
  return (
    <Stack
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#1D0031",
        borderTop: '1px solid #fff',

        padding: '5px 100px'
      }}
      direction="horizontal"
      gap={3}
    >
      <a href="#" className="p-2 no-underline text-white cursor-pointer hover:text-secondary">Todos</a>
      <a href="#destaques" className="p-2 no-underline text-white cursor-pointer hover:text-secondary">Destaques</a>
      <a href="#novidades" className="p-2 no-underline text-white cursor-pointer hover:text-secondary">Novidades</a>
      <a href="#promocoes" className="p-2 no-underline text-white cursor-pointer hover:text-secondary">Promoções</a>
      <a href="#recomendados" className="p-2 no-underline text-white cursor-pointer hover:text-secondary">Recomendados</a>
      <a href="#" className="p-2 no-underline text-white cursor-pointer hover:text-secondary">Coleções</a>
    </Stack>
  );
}

export default SubNav;
