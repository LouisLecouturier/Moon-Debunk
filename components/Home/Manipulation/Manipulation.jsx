import Image from "next/image";
import Link from "next/link";
import Arrow from "../../../assets/icons/arrow.svg";

import anonymous from "../../../public/images/anonymous.webp"

const Manipulation = () => {
  return (
    <section className="section dark-red scroll-snap">
      <div className="sectionRow alternate">
        <div className="sectionContent">
          <h2 className="sectionTitle">Pourquoi on y croit</h2>
          <div className="mobileImageContainer">
            <Image
              className="mobileImage"
              src={anonymous}
              alt="Homme qui brule un journal"
            />
          </div>
          <p className="sectionParagraph">
            La théorie du complot répond au besoin d’avoir l’explication des
            informations qui nous parviennent. Alors, comment cette théorie
            est-elle devenue crédible aux yeux de certaines personnes ?
          </p>
          <p className="sectionParagraph">
            Selon les psychologues ayant étudié la question, les biais cognitifs
            seraient en grandes partie responsables de l’adhésion aux théories
            du complot. En d’autres termes notre systèmes cognitif est plus
            enclin à croire ce qui relève d’un biais cognitif, nous serions
            “neuronalement” conçus pour croire au théorie complotiste.
          </p>
          <Link href="/manipulation" className="sectionLink">
            <span>Comment ça marche</span>
            <Arrow className="arrow" />
          </Link>
        </div>
        <div className="sectionContent image">
          <div className="imageContainer align-flex-end">
            <div
              className="desktopImageContainer"
              style={{ aspectRatio: "1200/1500" }}
            >
              <Image
                className="desktopImage"
                src={anonymous}
                alt="Homme qui brule un journal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manipulation;
