import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import SearchHeader from "../home-components/Header/Header.js";
import Footer from "../home-components/Footer/Footer.js";

import GridContainer from "../home-components/Grid/GridContainer.js";
import GridItem from "../home-components/Grid/GridItem.js";
import Button from "../home-components/CustomButtons/Button.js";
import HeaderLinks from "../home-components/Header/HeaderLinks.js";
import Parallax from "../home-components/Parallax/Parallax.js";
import Register from "../home-components/FormDialog/Register.js";


import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "../home-components/Sections/ProductSection.js";
import TeamSection from "../home-components/Sections/TeamSection.js";
import WorkSection from "../home-components/Sections/WorkSection.js";

import { Link } from "react-router-dom";

import Cat from "../../assets/img/cat.gif";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <SearchHeader
        color="transparent"
        routes={dashboardRoutes}
        brand="shoptimize."

        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image="https://townsquare.media/site/341/files/2016/01/Cat.jpg?w=980&q=75">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            <div style = {{textAlign:"justify"}}>
              <h1 className={classes.title}>Get your groceries and get out.</h1>
              <h4>
                Your guests are showing up in an hour. You have a midnight deadline. You forgot to cook dinner for date night. Whatever the reason, you need to grab what you need and go.</h4>
                <h4>Shoptimize finds you the most efficient path to get all the items you need and get out the door ASAP.
              </h4>
              </div>
              <br />
              <Button
                color="danger"
                size="lg"
                component={Link}
                to="/shoptimize/search"
              >

                Create Grocery List
              </Button>

            </GridItem>
            <GridItem xs={12} sm={12} md={6}>

              <img width={500} src={Cat} alt="" />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>



          <TeamSection />


        </div>
      </div>
      <Footer />
    </div>
  );
}
