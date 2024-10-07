import React from "react";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Seo from "../components/seo"
//import { Head } from "../components/head"

import WordpressLogo from "../assets/svg/wordpress.inline.svg";
import ReactLogo from "../assets/svg/react.inline.svg";
import SymphonyLogo from "../assets/svg/symphony.inline.svg";
import MysqlLogo from "../assets/svg/mysql.inline.svg";
import SassLogo from "../assets/svg/sass.inline.svg";
import CssLogo from "../assets/svg/css.inline.svg";
import HtmlLogo from "../assets/svg/html.inline.svg";
import JsLogo from "../assets/svg/js.inline.svg";
import PhpLogo from "../assets/svg/php.inline.svg";
import GatsbyLogo from "../assets/svg/gatsby.inline.svg";
import GsapLogo from "../assets/svg/gsap.inline.svg";
import NavBurgerButton from "../components/nav-burger-button";
import { motion, useAnimationControls } from "framer-motion";

const Apropos = ({ location }) => {
  const pageUrl = location.pathname;
  let homePage = false;
  let footerColor = "#819688";
  let footerPadding = "4rem 0 1rem 0";
  /* 
  const [rotate, setRotate] = useState(false);

  const variants = {
    rotate: { rotate: [0, -30, 0], transition: { duration: 0.5 } },
    // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
    stop: { y: [0, -10, 0], transition: { repeat: Infinity, repeatDelay: 3 } }
  };
 */

  return (
    <>
      <Layout pageUrl={pageUrl}>
        <div className="about-container">
          <NavBurgerButton />

          <Nav homePage={homePage}></Nav>

          <h1 className="page-title">À propos</h1>

          <div className="about-content">
            <motion.div
              className="pencil-container"
              //variants={variants}
              //animate={rotate ? 'rotate' : 'stop'}
              initial={{ rotate: "169deg" }}
              whileHover={{
                rotate: "199deg",
                transition: { duration: 0.2 },
              }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}

              /* onClick={() => setRotate(true)} */
            >
              <div className="pencil">
                <div className="top"></div>
              </div>
            </motion.div>

            <div className="pilea-container">
              <div className="pot"></div>
              <div className="pilea-center"></div>
              <div className="stem"></div>
              <div className="stem-2"></div>
              <div className="stem-3"></div>
              <div className="stem-4"></div>
              <div className="stem-5"></div>
              <div className="stem-6"></div>
              <div className="stem-7"></div>
              <div className="stem-8"></div>
              <div className="stem-9"></div>
              <div className="stem-10"></div>
              <div className="stem-11"></div>
              <div className="stem-12"></div>
              <div className="stem-13"></div>
              <div className="stem-14"></div>
            </div>

            <div className="curriculum-paper">
              <div className="curriculum-content">
                <h1>Léa Buguinet</h1>

                <section className="exp-pro">
                  <h2>
                    <span>&#10022; </span>Expériences professionnelles
                  </h2>

                  <div className="exp-pro-item">
                    <div className="exp-pro-date">
                      <p>Depuis 2022</p>
                    </div>
                    <div className="exp-pro-description">
                      <p>Agence Taurine - Agence de communication • 75</p>
                      <p>Développeuse Front-end</p>
                      <p>
                        Création/Refonte de sites internet selon cahier des
                        charges et maquettes Figma (sites vitrines et
                        e-commerce)
                      </p>
                      <p>
                        Maintenance, mise à jour, et résolution de problèmes sur
                        les sites existants
                      </p>
                      <p>Formation aux clients pour la gestion de leur site</p>
                      <p>
                        Participation aux rendez-vous clients pour les guider et
                        les conseiller
                      </p>
                    </div>
                  </div>

                  <div className="exp-pro-item">
                    <div className="exp-pro-date">
                      <p>Depuis 2021</p>
                    </div>
                    <div className="exp-pro-description">
                      <p>
                        Freelance pour entreprises, associations et particuliers
                      </p>
                      <p>
                        Découvrez quelques-uns de ces projets dans le portfolio
                      </p>
                    </div>
                  </div>

                  {/* <div className="exp-pro-item">
                  <div className="exp-pro-date">
                    <p>2018 - 2021</p>
                  </div>
                  <div className="exp-pro-description">
                    <p>
                      La Constellation - Opérateur culturel & compagnie de
                      théâtre • 91
                    </p>
                    <p>Assistante de communication</p>
                    <p>Gestion de projets culturels artistiques</p>
                    <p>Création de visuels tout support, rédaction et PAO</p>
                    <p>Création du site internet Wix</p>
                  </div>
                </div> */}
                </section>

                <section className="skills">
                  <h2>
                    <span>&#10022; </span>Compétences
                  </h2>

                  <div className="skills-item-top">
                    <h3>Technologies :</h3>

                    <div className="skills-logolist">
                      <div>
                        <p>
                          <CssLogo /> CSS
                        </p>
                        <p>
                          <SassLogo /> Sass
                        </p>
                        <p>
                          <GsapLogo />
                          GSAP
                        </p>
                        <p>
                          <HtmlLogo /> HTML
                        </p>
                      </div>

                      <div>
                        <p>
                          <JsLogo />
                          Javascript
                        </p>
                        <p>
                          <GatsbyLogo /> Gatsby
                        </p>
                        <p>
                          <ReactLogo /> React
                        </p>
                      </div>

                      <div>
                        <p>
                          <WordpressLogo />
                          Wordpress
                        </p>
                        <p>
                          <PhpLogo />
                          Php
                        </p>
                        <p>
                          <SymphonyLogo /> Symphony
                        </p>
                        <p>
                          <MysqlLogo /> MySQL
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="skills-items">
                    <div className="skills-item">
                      <h3>Autres :</h3>
                      <p>Adobe Suite</p>
                      <p>MacOS / PC </p>
                      <p>Figma · Canva</p>
                    </div>
                    <div className="skills-item">
                      <h3>Compétences transversales :</h3>
                      <p>Gestion de projet</p>
                      <p>Travail en équipe</p>
                    </div>
                    <div className="skills-item">
                      <h3>Langues :</h3>
                      <p>Anglais C2</p>
                      <p>Espagnol B1</p>
                    </div>
                  </div>
                </section>
                <section className="diplomas">
                  <h2>
                    <span>&#10022; </span>Diplômes & Formations
                  </h2>

                  <div className="diploma-item">
                    <h3>Formation Développement Web • 2021 • La Passerelle</h3>
                    <p>
                      Intégration, programmation, conception et gestion de bases
                      de données. Bonnes pratiques du développement web :
                      sécurité, optimisation, référencement naturel et
                      versioning.
                    </p>
                  </div>

                  <div className="diploma-item">
                    <h3>
                      Master Politiques Culturelles • 2018 • Université Paris 7
                      Diderot
                    </h3>
                    <p>
                      Gestion de projets - Sociologie - Médiation - Publics ·
                      Mémoire : "L'accessibilité aux personnes en situation de
                      handicap dans les musées : une chance pour tous ?" ·
                      Accessibilité web
                    </p>
                  </div>

                  <h3 className="diploma-item">
                    Licence Lettre Langue Civilisation Étrangère - Anglais •
                    2016 • Université Paris 7 Diderot
                  </h3>
                  <h3 className="diploma-item">
                    Classe Préparatoire Littéraire • 2015 • Lycée Corot (91) •
                    Spécialité Anglais
                  </h3>
                </section>

                <section className="hobbies">
                  <h2>
                    <span>&#10022; </span>Centres d'intérêt
                  </h2>

                  <p>- Lire des livres et des BD</p>
                  <p>- Aller au cinéma</p>
                  <p>- Voir des concerts</p>
                  <p>- Gribouiller</p>
                  <p>- Jouer</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer footerColor={footerColor} footerPadding={footerPadding} />
    </>
  );
};

export const Head = () => <Seo title="À propos" description="Léa Buguinet - CV - Compétences et expériences professionnelles" />

export default Apropos;