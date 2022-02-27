import Image from "next/image";
import Link from "next/link";
import Arrow from "../../../assets/icons/arrow.svg";

const Debunk = () => {
  return (
    <section className="section dark-green scroll-snap">
      <div className="sectionRow">
        <div className="sectionContent">
          <h2 className="sectionTitle">Et puis m*rde, réflechissez</h2>
          <div className="mobileImageContainer">
            <Image
              className="mobileImage"
              src="/images/debunkMeme.webp"
              width={600}
              height={599}
              layout="responsive"
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
        <div className="sectionContent image">
          <div className="imageContainer align-flex-end">
            <div
              className="desktopImageContainer"
              style={{ "aspect-ratio": "600/599" }}
            >
              <Image
                className="desktopImage"
                src="/images/debunkMeme.webp"
                layout="responsive"
                width={600}
                height={599}
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
