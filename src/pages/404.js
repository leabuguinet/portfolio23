import React from "react";
import Layout from "../components/layout";
import Nav from "../components/nav";
import NavBurgerButton from "../components/nav-burger-button";
import Footer from "../components/footer";

const Mentions = ({ location }) => {
  const pageUrl = location.pathname;
  let homePage = false;
  let footerColor = "#A36361";
  let footerPadding = "0rem 0";

  return (
    <>
      <Layout pageUrl={pageUrl}>
        <div className="mentions-container">
          <NavBurgerButton />

          <Nav homePage={homePage}></Nav>

          <div className="mentions-content">
            <div>
              <h1>404</h1>
              <h1>Oopsie</h1>
              
            </div>

            <div className="catcontainer">
              <div id="cat">
                <div className="cat-head">
                  <div className="cat-stripe"></div>
                  <div className="cat-stripe-2"></div>
                  <div className="cat-stripe-3"></div>

                  <div className="face">
                    <div className="moustache"></div>
                    <div className="moustache-2"></div>
                    <div className="moustache-3"></div>

                    <div className="moustache-right"></div>
                    <div className="moustache-right-2"></div>
                    <div className="moustache-right-3"></div>
                    <div className="cat-eyes"></div>
                  </div>
                </div>
                <div className="cat-fraise"></div>
                <div className="body">
                  <div className="paws"></div>
                  <span className="stand"></span>
                </div>
                <div className="tail-container">
                  <div className="tail">
                    <div className="tail">
                      <div className="tail">
                        <div className="tail">
                          <div className="tail">
                            <div className="tail">
                              <div className="tail"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer footerColor={footerColor} footerPadding={footerPadding} />
    </>
  );
};

export default Mentions;
