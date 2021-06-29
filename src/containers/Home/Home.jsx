import React, { useEffect, useState } from "react";
import {
  HeroKom,
  HighlightPosts,
  InfoMaps,
  Products,
  SpinnerBook,
} from "../../components";
import {
  setPosts,
  setProductsList,
  setProductSpecial,
} from "../../app/slice/fetchApi";
import { useDispatch } from "react-redux";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { fetchBlogData, fetchProduct } from "../../api";
import {
  COFFEE,
  COLDBREW,
  JUICE,
  MACCHIATO,
  TEA,
  YOGURT,
} from "../../app/ItemTypes";
import { useSelector } from "react-redux";

const Home = () => {
  const [spinner, setSpinner] = useState(true);
  const dispatch = useDispatch();

  const special = useSelector((state) => state.api.products.special);
  const posts = useSelector((state) => state.api.posts);

  useEffect(() => {
    document.title = "NOOR. Kombucha - Trà Lên Men Chất Lượng Cao";
  }, []);

  useEffect(() => {
    if (!posts) {
      fetchBlogData()
        .then((posts) => {
          let postSort = [];
          postSort = posts.slice().sort((value1, value2) => {
            const dateValue1 = new Date(value1.publishedAt).getTime();
            const dateValue2 = new Date(value2.publishedAt).getTime();
            return dateValue1 < dateValue2 ? 1 : -1;
          });
          const action = setPosts(postSort);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, posts]);

  useEffect(() => {
    if (!special) {
      fetchProduct()
        .then((products) => {
          const special = [];

          const coffee = [];
          const coldbrew = [];
          const tea = [];
          const macchiato = [];
          const yogurt = [];
          const juice = [];

          products.map((product, index) => {
            if (product.projectType === COFFEE) coffee.push(product);
            else if (product.projectType === COLDBREW) coldbrew.push(product);
            else if (product.projectType === TEA) tea.push(product);
            else if (product.projectType === MACCHIATO) macchiato.push(product);
            else if (product.projectType === YOGURT) yogurt.push(product);
            else if (product.projectType === JUICE) juice.push(product);

            product.special && special.push(product);

            return null;
          });
          let action;
          const object = {
            special: special,
            coffee: coffee,
            coldbrew: coldbrew,
            tea: tea,
            macchiato: macchiato,
            yogurt: yogurt,
            juice: juice,
          };
          action = setProductsList(object);
          dispatch(action);
          action = setProductSpecial(special);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, special]);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <div>
      {spinner ? (
        <SpinnerBook />
      ) : (
        <>
          <HeroKom />
          <LazyLoadComponent>
            <InfoMaps />
          </LazyLoadComponent>
          <LazyLoadComponent>
            <Products products={special} />
          </LazyLoadComponent>
          <LazyLoadComponent>
            <HighlightPosts />
          </LazyLoadComponent>
          {/* <LazyLoadComponent>
            <InstaPosts />
          </LazyLoadComponent>
           */}
        </>
      )}
    </div>
  );
};

export default Home;
