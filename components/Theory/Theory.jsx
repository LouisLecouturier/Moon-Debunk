import Image from "next/image";
import Link from "next/link";
import Arrow from "../../assets/icons/arrow.svg";

const Theory = () => {
  return (
    <section className="section dark-blue">
      <div className="sectionRow alternate">
        <div className="sectionContent">
          <h2 className="sectionTitle">Vous avez dit... complot ?</h2>
          <div className="mobileImageContainer">
            <Image
              className="mobileImage"
              src="/images/capricornOne.jpg"
              width={1200}
              height={675}
              layout="intrinsic"
              alt="saturn"
            />
            <span>Extrait de Capricorn One</span>
          </div>
          <p className="sectionParagraph">
            Face à un tel exploit, certaines personnes se montrent sceptiques et
            n’hésitent pas à remettre en cause la les informations fournies par
            la NASA. Peu à peu, c’est une communauté qui s’est formée prétendant
            que l’entierté du programme Apollo est une mise en scène en
            collaboration avec Hollywood. La NASA eut beau démentir et exposer
            tous les arguments possibles, des personnes doutent encore
            aujourd’hui que l’homme ait un jour marché sur la Lune.
          </p>
          <Link href="/story">
            <a className="sectionLink">
              <span>Découvrir les arguments</span>
              <Arrow className="arrow" />
            </a>
          </Link>
        </div>
        <div className="sectionContent ">
          <div className="desktopImageContainer full-width">
            <Image
              className="desktopImage"
              src="/images/capricornOne.jpg"
              width={1200}
              height={675}
              layout="intrinsic"
              alt="saturn"
            />
            <span>Extrait de Capricorn One</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theory;
