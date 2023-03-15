import Image from "next/image";
import Link from "next/link";
import Arrow from "../../../assets/icons/arrow.svg";


import debunkMeme from "../../../public/images/debunkMeme.webp"

const Debunk = () => {
  return (
    <section className="section dark-green scroll-snap">
      <div className="sectionRow">
        <div className="sectionContent">
          <h2 className="sectionTitle">Et puis m*rde, réfléchissez</h2>
          <div className="mobileImageContainer">
            <Image
              className="mobileImage"
              src={debunkMeme}
              
              alt="Homme qui brule un journal"
            />
          </div>
          <p className="sectionParagraph">
            Bien que les nombreuses théories avancées par les complotistes
            soient travaillées et renforcées par des biais cognitifs, il ne faut
            pas y croire ! Nous allons d'ailleurs vous montrer pourquoi cet
            alunissage a bel et bien eu lieu.
          </p>

          <Link href="/story" className="sectionLink">

              <span>Découvrir la vérité</span>
              <Arrow className="arrow" />

          </Link>
        </div>
        <div className="sectionContent image">
          <div className="imageContainer align-flex-end">
            <div
              className="desktopImageContainer"
              style={{ "aspect-ratio": "600/599" }}
            >
              <Image
                className="desktopImage"
                src={debunkMeme}
                alt="Meme sur la théorie"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Debunk;
