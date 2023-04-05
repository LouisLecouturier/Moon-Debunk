import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Header from "../components/Shared/Header/Header";
import Hero from "../components/Shared/Hero/Hero";

import Arrow from "../assets/icons/arrow.svg";
import Footer from "../components/Shared/Footer/Footer";


import book from "../public/images/theory/book.webp"
import flag from "../public/images/theory/flag.webp"
import sky from "../public/images/theory/sky.webp"
import footprint from "../public/images/theory/footprint.webp"
import light from "../public/images/theory/light.webp"
import rock from "../public/images/theory/rock.webp"
import vehicles from "../public/images/theory/vehicles.webp"

const Theory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page dark">
      <Header />
      <div className="scroll-snap">
        <Hero
          title1="VOUS AVEZ DIT..."
          title2=" COMPLOT ?"
          text="Par Wissam Saad, Louis Lecouturier et Thomas Los"
        />
      </div>
      <section className="section scroll-snap">
        <div className="sectionRow">
          <div className="sectionContent">
            <h2 className="sectionTitle">Tout part de là</h2>
            <div
              className="mobileImageContainer"
              style={{ aspectRatio: "387/500" }}
            >
              <Image
                className="mobileImage"
                src={book}
                alt="Couverture du livre"
              />
            </div>
            <p className="sectionParagraph">
              Tout commence en <strong>1976</strong> lorsqu’un certain{" "}
              <strong>Bill Kaysing</strong> publie un livre :
            </p>
              <blockquote className="quote">

                “We Never Went to the Moon: America’s Thirty Billion Dollar
                Swindle”
              </blockquote>
            <p className="sectionParagraph">
              Dans ce livre, l’auteur expose tous les arguments qui, selon lui,
              prouvent que la mission{" "}
              <strong>Apollo 11 a été tournée dans un studio.</strong> Le
              tournage se serait alors passé dans une base secrète américaine
              située dans le Nevada (la fameuse zone 51). Le gouvernement
              américain aurait alors orchestré cette supercherie, avec l’aide
              d’Hollywood pour les effets spéciaux.
            </p>
            <p className="sectionParagraph">
              Le livre fait naturellement beaucoup parler de lui et une
              communauté se forme autour de cette théorie
            </p>
          </div>
          <div className="sectionContext image">
            <div className="imageContainer align-flex-end">
              <div
                className="desktopImageContainer"
                style={{ aspectRatio: "387/500" }}
              >
                <Image
                  className="desktopImage"
                  src={book}
                  alt="Couverture du livre"
                />
              </div>
              <span>Couverture du livre</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section scroll-snap">
        <h2 className="sectionTitle">Presque 30 ans plus tard</h2>
        <p className="sectionParagraph">
          En <strong>2001</strong> la chaîne américaine <strong>Fox TV</strong>{" "}
          diffuse un documentaire conspirationniste. Celui-ci reprend la théorie
          et donne suite au livre de Bill Kaysing en cherchant à prouver la
          véracité de tous les arguments avancés.
        </p>
          <blockquote className="quote">
            Conspiracy Theory : Did We Land on the Moon ? ("Théorie du complot :
            avons-nous marché sur la Lune ?") - <strong>Craig Tipley</strong>
          </blockquote>

        <p className="sectionParagraph">
          La diffusion de ce documentaire relance alors la théorie et propage
          davantage le doute. La NASA ne reste pas sans voix et souhaite
          démonter ces théories. Elle réfute les arguments les plus populaires
          et fournit de nombreuses ressources, notamment aux enseignants,
          démontant les différentes théories. Elle envisage même l’écriture d’un
          livre, avant de se rétracter pour ne pas donner trop de crédit aux
          complotistes.
        </p>
      </section>
      <section className="section scroll-snap">
        <h2 className="sectionTitle">Tout pour le buzz</h2>
        <p className="sectionParagraph">
          Plus récemment, certains Youtubers se sont également arrêtés sur cette
          théorie. Cela n’est pas sans effet : plus de 7 millions de vues pour
          une seule vidéo de sa sortie à début 2022.
        </p>
        <p className="sectionParagraph">
          De telles personnalités ont une certaine influence chez les jeunes qui
          ont peu de jugeote, et par nature, avec internet, il est possible de
          faire passer les informations, vraies ou fausses, beaucoup plus
          rapidement et d’avoir plus de visibilité.
        </p>
      </section>
      <section className="section scroll-snap">
        <h2 className="sectionTitle">
          Qui sont les acteurs de cette théorie ?
        </h2>
        <p className="sectionParagraph">
          Les acteurs majeurs de cette théorie sont juste des complotistes,
          n’ayant pas vraiment d’intêrets financiers ou autres. Ce sont juste
          des gens persuadés, principalement des Américains qui pensent que le
          gouvernement les manipule, notamment avec le contexte de la guerre
          froide lors de l’alunissage.
        </p>
        <p className="sectionParagraph">
          La théorie fait en réalité partie d’une théorie plus grande selon
          laquelle le gouvernement manipulerait la population.
        </p>
      </section>
      <section className="section scroll-snap">
        <h2 className="sectionTitle no-margin">
          Quels sont les arguments les plus connus ?
        </h2>
      </section>
      <section className="section scroll-snap">
        <div className="sectionRow">
          <div className="sectionContent">
            <h2 className="sectionTitle">Le drapeau flotte</h2>
            <div
              className="mobileImageContainer"
              style={{ aspectRatio: "1045/1316" }}
            >
              <Image
                className="mobileImage"
                src={flag}
                alt="Drapeau sur la Lune"
              />
            </div>

            <p className="sectionParagraph">
              Quand les astronautes posent le drapeau sur la Lune, celui-ci «
              flotte » dans le vent, alors qu'il n'y a pas d'atmosphère sur la
              Lune.
            </p>
          </div>
          <div className="sectionContext image">
            <div className="imageContainer align-flex-end">
              <div
                className="desktopImageContainer"
                style={{ aspectRatio: "1045/1316" }}
              >
                <Image
                  className="desktopImage"
                  src={flag}
                  alt="Drapeau sur la lune"
                />
              </div>
              <span>Drapeau sur la lune</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section scroll-snap">
        <div className="sectionRow">
          <div className="sectionContent">
            <h2 className="sectionTitle">L'absence d'étoiles</h2>
            <div
              className="mobileImageContainer"
              style={{ aspectRatio: "1108/1647" }}
            >
              <Image
                className="mobileImage"
                src={sky}
                alt="La Terre vue de la Lune"
              />
            </div>
            <p className="sectionParagraph">
              L’absence d’étoiles dans le ciel lunaire interroge: normalement ne
              devraient-elles pas être encore plus visibles par rapport à la
              Terre.
            </p>
          </div>
          <div className="sectionContext image">
            <div className="imageContainer align-flex-end">
              <div
                className="desktopImageContainer"
                style={{ aspectRatio: "1108/1647" }}
              >
                <Image
                  className="desktopImage"
                  src={sky}
                  alt="La Terre vue de la Lune"
                />
              </div>
              <span>La Terre vue de la Lune</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section scroll-snap">
        <div className="sectionRow">
          <div className="sectionContent">
            <h2 className="sectionTitle">Les empreintes</h2>
            <div
              className="mobileImageContainer"
              style={{ aspectRatio: "450/669" }}
            >
              <Image
                className="mobileImage"
                src={footprint}
                alt="Empreinte d'astronaute"
              />
            </div>
            <p className="sectionParagraph">
              Sur la photo les empreintes de pas sont très nettes, comme si
              Aldrin avait marché dans du sable mouillé. Or le sol de la Lune
              est plus semblable à du sable sec.
            </p>
          </div>
          <div className="sectionContext image">
            <div className="imageContainer align-flex-end">
              <div
                className="desktopImageContainer"
                style={{ aspectRatio: "450/669" }}
              >
                <Image
                  className="desktopImage"
                  src={footprint}
                  alt="Empreinte d'astronaute"
                />
              </div>
              <span>Empreinte d'astronaute</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section scroll-snap">
        <div className="sectionRow">
          <div className="sectionContent">
            <h2 className="sectionTitle">L'Éclairage</h2>
            <div
              className="mobileImageContainer"
              style={{ aspectRatio: "1670/2373" }}
            >
              <Image
                className="mobileImage"
                src={light}
                alt="Astronaute sortant d'un véhicule"
              />
            </div>
            <p className="sectionParagraph">
              L'astronaute est éclairé d'une manière très étrange qui donne
              l'impression d'un éclairage de studio. De plus, sa combinaison
              brille dans l’ombre des véhicules, comme s’il était placé au cœur
              d’un spot de lumière artificielle dans un studio.
            </p>
          </div>
          <div className="sectionContext image">
            <div className="imageContainer align-flex-end">
              <div
                className="desktopImageContainer"
                style={{ aspectRatio: "1670/2373" }}
              >
                <Image
                  className="desktopImage"
                  src={light}
                  alt="Astronaute sortant d'un véhicule"
                />
              </div>
              <span>Astronaute sortant d'un véhicule</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section scroll-snap">
        <div className="sectionRow">
          <div className="sectionContent">
            <h2 className="sectionTitle">Une lettre C sur une roche lunaire</h2>
            <div
              className="mobileImageContainer"
              style={{ aspectRatio: "329/301" }}
            >
              <Image
                className="mobileImage"
                src={rock}
                alt="Astronaute sortant d'un véhicule"
              />
            </div>
            <p className="sectionParagraph">
              Sur une photo de la NASA, on croit distinguer une lettre « C » sur
              une roche lunaire... Voilà encore une preuve qu’il s’agirait d’un
              décor de cinéma.
            </p>
          </div>
          <div className="sectionContext image">
            <div className="imageContainer align-flex-end">
              <div
                className="desktopImageContainer"
                style={{ aspectRatio: "329/301" }}
              >
                <Image
                  className="desktopImage"
                  src={rock}
                  alt="Astronaute sortant d'un véhicule"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section scroll-snap">
        <div className="sectionRow">
          <div className="sectionContent">
            <h2 className="sectionTitle">Absence de marquage au sol</h2>
            <div
              className="mobileImageContainer"
              style={{ aspectRatio: "1749/2537" }}
            >
              <Image
                className="mobileImage"
                src={vehicles}
                alt="Astronaute sortant d'un véhicule"
              />
            </div>
            <p className="sectionParagraph">
              Comment est-ce possible que des engins pesant plusieurs tonnes
              n’ont pas provoqué de poussières ou bien des cratères ? Sur les
              différentes photos de prises durant la mission, on ne remarque
              aucune trace de véhicule sur la lune.
            </p>
          </div>
          <div className="sectionContext image">
            <div className="imageContainer align-flex-end">
              <div
                className="desktopImageContainer"
                style={{ aspectRatio: "1749/2537" }}
              >
                <Image
                  className="desktopImage"
                  src={vehicles}
                  alt="Astronaute sortant d'un véhicule"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section scroll-snap">
        <h2 className="sectionTitle no-margin">
          Et un nombre incalculable d'autres arguments
        </h2>
      </section>
      <section className="section scroll-snap">
        <h2 className="sectionTitle">
          Mais... tous ces arguments ne tiennent pas la route
        </h2>
        <Link href="/debunk" className="sectionLink">
          <span>Découvrir pourquoi</span>
          <Arrow />
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default Theory;
