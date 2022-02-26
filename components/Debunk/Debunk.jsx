import Image from "next/image";
import Link from "next/link";
import Arrow from "../../assets/icons/arrow.svg";

const Debunk = () => {
  return (
    <section className="section dark-green">
      <div className="sectionRow alternate">
        <div className="sectionContent">
          <h2 className="sectionTitle">Et puis m*rde, réflechissez</h2>
          <div className="mobileImageContainer">
            <Image
              className="mobileImage"
              src="/images/debunkMeme.jpg"
              width={600}
              height={599}
              layout="intrinsic"
              alt="Homme qui brule un journal"
            />
          </div>
          <p className="sectionParagraph">
            Bien que les nombreuses théories avancées par les complotistes
            soient travaillées et renforcées par des biais cognitifs, il ne faut
            pas y croire ! Nous allons d'ailleurs vous montrer pourquoi cet
            alunissage a bel et bien eu lieu.
          </p>

          <Link href="/story">
            <a className="sectionLink">
              <span>Découvrir la vérité</span>
              <Arrow className="arrow" />
            </a>
          </Link>
        </div>
        <div className="sectionContent">
          <div className="desktopImageContainer">
            <Image
              className="desktopImage"
              src="/images/debunkMeme.jpg"
              width={600}
              height={599}
              layout="intrinsic"
              alt="Homme qui brule un journal"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Debunk;
