import React, { useEffect } from "react";
import ProductsContainer from "../../containers/Products/Products";
const Products = () => {
  useEffect(() => {
    document.title = "Menu - NOOR. Kombucha - Trà Lên Men Chất Lượng Cao";
  }, []);

  return (
    <>
      <ProductsContainer />
    </>
  );
};

export default Products;
