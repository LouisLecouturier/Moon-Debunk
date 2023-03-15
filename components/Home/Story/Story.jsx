import Image from "next/image";
import Link from "next/link";

import Arrow from "../../../assets/icons/arrow.svg";

import saturn from "../../../public/images/rocket.webp";

const Story = () => {
  return (
    <section className="section dark scroll-snap">
      <div className="sectionRow">
        <div className="sectionContent">
          <h2 className="sectionTitle">Un peu d'histoire...</h2>
          <div className="mobileImageContainer">
            <Image
              className="mobileImage"
              src={saturn}
              alt="Lanceur Saturn V"
            />
            <span>Fusée Saturn V</span>
          </div>
          <p className="sectionParagraph">
            La course à la lune commence officiellement en 1961 par le discours
            du président Kennedy annonçant l’ambition d’envoyer un homme sur la
            lune, et de le faire revenir sain et sauf avant la fin de la
            décennie. En pleine guerre froide, ce projet a pour but de démontrer
            la supériorité des américains et du modèle capitaliste sur l’URSS.
            En effet, après l’échec de la course à l’espace pour le bloc Ouest,
            la super puissance n’a plus le droit à l’erreur et doit se relancer.
          </p>

          <Link href="/story" className="sectionLink">
            <span>En savoir plus</span>
            <Arrow className="arrow" />
          </Link>
        </div>
        <div className="sectionContent image">
          <div className="imageContainer align-flex-end">
            <div
              className="desktopImageContainer"
              style={{ "aspect-ratio": "2352/3000" }}
            >
              <Image
                className="desktopImage"
                src={saturn}
                alt="Lanceur Saturn V"
              />
            </div>
            <span>Lanceur Saturn V</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
