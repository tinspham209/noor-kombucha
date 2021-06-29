import { Container, Typography, Button } from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeroKom.elements";
import { Link } from "react-router-dom";
import { BiMouse } from "react-icons/bi";
// import { useSelector } from "react-redux";
import { scroller } from "react-scroll";
import heroImg from "../../assets/img/heroImage.webp";

const HeroKom = () => {
  const classes = useStyles();

  const scrollToNextSection = () => {
    scroller.scrollTo("infoSection", { smooth: true, duration: 1000 });
  };

  const scrollToProducts = () => {
    scroller.scrollTo("products", { smooth: true, duration: 1000 });
  };

  return (
    <>
      <section className={classes.hero}>
        <div className={classes.heroWrapper}>
          <Container maxWidth="lg" className={classes.heroRow}>
            <div className={classes.heroImg}>
              <img src={heroImg} alt="hero img" className={classes.heroImage} />
            </div>
            <div className={classes.heroContent}>
              <Typography className={classes.heroContentTitle}>
                NOOR Kombucha
              </Typography>
              <Typography className={classes.heroContentSubTitle}>
                Tự hào làm ra Kombucha thực sự, có hương vị chỉ với những nguyên
                liệu chất lượng cao nhất từ ​​sản phẩm hữu cơ, được sản xuất tại
                Đà Nẵng, Việt Nam
              </Typography>

              <a href="https://m.me/noorkombucha" target="__blank">
                <Button variant="contained" className={classes.button}>
                  Đặt ngay
                </Button>
              </a>
              <Button
                variant="outlined"
                className={`${classes.button} ${classes.buttonOutlined}`}
                onClick={scrollToProducts}
              >
                Xem thêm
              </Button>
            </div>
          </Container>

          <div className={classes.footer}>
            <div className={classes.fixedScrollDown}>
              <Typography variant="h6" className={classes.typo}>
                KÉO XUỐNG
              </Typography>
              <div className={classes.icon} onClick={scrollToNextSection}>
                <BiMouse />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroKom;
