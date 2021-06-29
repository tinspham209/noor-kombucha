import { makeStyles } from "@material-ui/core/styles";
import bgImg from "../../assets/img/bg_blog_home.webp";

export const useStyles = makeStyles((theme) => ({
  hero: {
    width: "100%",
    height: "100%",
    background: `url(${bgImg}) no-repeat top right, #ECE3DA`,
    backgroundSize: "30%",
    borderBottomRightRadius: "250px",
    // backgroundColor: "#f5f5f5",

    padding: "50px 0",

    [theme.breakpoints.down("md")]: {
      // height: "calc(100vh - 80px - 60px)",
      background: "#ECE3DA",
      paddingBottom: "80px",
    },
  },

  heroWrapper: {
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",

    position: "relative",
  },

  heroRow: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },

  heroContent: {
    position: "relative",
    zIndex: "10",
    width: "55%",
    marginLeft: "50px",
    marginTop: "100px",

    color: "#4B4C4E",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: "0",
      marginLeft: "0",
    },
  },

  heroContentTitle: {
    fontSize: "70px",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: '"BebasNeue","Lato", san-serif',
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      fontSize: "32px",
    },
  },
  heroContentSubTitle: {
    marginTop: "30px",
    fontSize: "24px",
    fontWeight: "500",
    fontFamily: '"Source Sans Pro", san-serif',

    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
  },
  heroImg: {
    width: "45%",

    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
  },
  heroImage: {
    width: "100%",
    // height: "",
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      transform: "translateX(-20px)",
    },
  },

  fixedScrollDown: {
    position: "absolute",
    bottom: "1%",
    left: "50%",
    zIndex: "99",

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",

    color: "#4B4C4E",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  icon: {
    fontSize: "40px",
    animation: `$pulse 2s infinite`,
    WebkitAnimation: `$pulse 2s infinite`,
  },
  typo: {
    "&::before": {
      content: '""',
      position: "absolute",
      top: "35px",
      width: "100%",
      border: "2px solid #4B4C4E",
    },
  },

  infoSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    borderRadius: "20px",
    fontSize: "20px",
    background: "rgba(246,194,73, 1)",
    color: "black",
    fontWeight: "bold",
    transition: "all 0.3s ease-in-out",
    marginTop: "30px",

    "&:hover": {
      background: "rgba(246,194,73, 0.9)",
      color: "white",
    },

    [theme.breakpoints.down("md")]: {
      width: "45%",
    },
  },

  buttonOutlined: {
    background: "transparent",
    border: "3px solid rgba(246,194,73, 1)",
    marginLeft: "20px",

    [theme.breakpoints.down("md")]: {
      // marginLeft: "0",
    },
  },

  "@keyframes pulse": {
    "0%": {
      webkitTransform: "translate(0, 0)",
      transform: "translate(0, 0)",
    },
    "50%": {
      webkitTransform: "translate(0, 10px)",
      transform: "translate(0, 10px)",
    },
    "100%": {
      webkitTransform: "translate(0, 0)",
      transform: "translate(0, 0)",
    },
  },
}));
