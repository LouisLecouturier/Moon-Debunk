import Image from "next/image";
import Link from "next/link";
import Arrow from "../../assets/icons/arrow.svg";

const Manipulation = () => {
  return (
    <section className="section dark-red">
      <div className="sectionRow">
        <div className="sectionContent">
          <h2 className="sectionTitle">On nous dit pas tout...</h2>
          <div className="mobileImageContainer">
            <Image
              className="mobileImage"
              src="/images/anonymous.jpg"
              width={1200}
              height={1500}
              layout="intrinsic"
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
          <Link href="/story">
            <a className="sectionLink">
              <span>Comment ça marche</span>
              <Arrow className="arrow" />
            </a>
          </Link>
        </div>
        <div className="sectionContent align-flex-end">
          <div className="desktopImageContainer">
            <Image
              className="desktopImage"
              src="/images/anonymous.jpg"
              width={1200}
              height={1500}
              layout="intrinsic"
              alt="Homme qui brule un journal"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manipulation;
