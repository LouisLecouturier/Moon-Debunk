import Image from "next/image";
import Link from "next/link";
import styles from "./Story.module.scss";

import Arrow from "../../assets/icons/arrow.svg";

const Story = () => {
  return (
    <section className="section dark">
      <div className="sectionRow">
        <div className="sectionContent">
          <h2 className="sectionTitle">Un peu d'histoire...</h2>
          <div className="mobileImageContainer">
            <Image
              className="mobileImage"
              src="/images/rocket.jpg"
              width={2352}
              height={3000}
              alt="saturn"
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

          <Link href="/story">
            <a className="sectionLink">
              <span>En savoir plus</span>
              <Arrow className="arrow" />
            </a>
          </Link>
        </div>
        <div className="sectionContent align-flex-end">
          <div className="desktopImageContainer">
            <Image
              className="desktopImage"
              src="/images/rocket.jpg"
              width={2352}
              height={3000}
              layout="intrinsic"
              alt="saturn"
            />
            <span>Fusée Saturn V</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;