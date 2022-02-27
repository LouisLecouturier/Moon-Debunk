import Image from "next/image";
import Header from "../components/Shared/Header/Header";
import Hero from "../components/Shared/Hero/Hero";
import Arrow from "../assets/icons/arrow.svg";
import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Shared/Footer/Footer";

const Debunk = () => {
  return (
    <div className="page dark">
      <Head>
        <title>Manipulation</title>
      </Head>
      <Header />
      <div className="scroll-snap">
        <Hero
          title1="Et puis m*erde,"
          title2="Reflechissez"
          text="Par Gaspard Torris et Mael Monteil"
        />
      </div>
      <section className="section scroll-snap">
        <h3 className="sectionSubTitle">
          Bien que les nombreuses théories avancées par les complotistes soient
          travaillées et argumentées, il ne faut pas y croire ! Nous allons
          d'ailleurs vous montrer pourquoi cette alunissage a bel et bien eu
          lieu.
        </h3>
        <p className="sectionParagraph">
          D'abord les images qui datent de 1969 dans des conditions de vide avec
          l’éclairage naturel du soleil font que ces dernières ne sont pas de
          qualité excellente et de nombreuses “preuves” du non-alunissage ont
          été démontées par ce fait. Les personnes qui en parlent et qui
          établissent des preuves en faveur du complot, sont elles des experts?
          Il est nécessaire de se renseigner sur les personnes qui alimentent
          ces théories.
        </p>
      </section>
      <section className="section scroll-snap">
        <h2 className="sectionTitle no-margin">
          Commençons par les plus grosses preuves qui indiqueraient que
          l’alunissage est réalisé en studio.
        </h2>
      </section>
      <section className="section scroll-snap">
        <div className="sectionRow">
          <div className="sectionContent">
            <h2 className="sectionTitle">Le drapeau flotte</h2>
            <div
              className="mobileImageContainer"
              style={{ "aspect-ratio": "1045/1316" }}
            >
              <Image
                className="mobileImage"
                src="/images/theory/flag.webp"
                layout="responsive"
                width={1045}
                height={1316}
                alt="Drapeau sur la Lune"
              />
            </div>

            <p className="sectionParagraph">
              Tout d’abord les complotistes soulignent que le drapeau ne devrait
              pas flotter car l’absence d’atmosphère sur la lune induit qu’il
              n’y a aucun vent sur la lune. Mais ce que ces derniers ne savaient
              pas était que le mat se terminait d’une tige horizontale afin de
              tenir le drapeau droit pour la photo (pas étonnant que les
              américains aient pensé à ce détail).
            </p>
            <p className="sectionParagraph">
              (Le pire c'est que si on regarde bien, on voit clairement la tige
              en haut du drapeau)
            </p>
          </div>
          <div className="sectionContext image">
            <div className="imageContainer align-flex-end">
              <div
                className="desktopImageContainer"
                style={{ "aspect-ratio": "1045/1316" }}
              >
                <Image
                  className="desktopImage"
                  src="/images/theory/flag.webp"
                  layout="responsive"
                  width={1045}
                  height={1316}
                  alt="Drapeau sur la lune"
                />
              </div>
              <span>Drapeau sur la lune</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section scroll-snap">
        <h2 className="sectionTitle">Pas de flammes</h2>
        <p className="sectionParagraph">
          On observe qu’il n’y a pas de flammes lors de la vidéo du décollage de
          la capsule pour la lune. Non, ce n’est pas une erreur des monteurs qui
          auraient oublié d’en ajouter, ce phénomène est dû à la combustion des
          carburants utilisés qui sont l'aerozine 50 et le peroxyde d'azote.
          Leur combustion est incolore (transparente). De plus, l'absence d'O2
          (car la lune n’a pas d'atmosphère), empêche l'apparition de flammes
          (triangle du feu).
        </p>
      </section>
      <section className="section scroll-snap">
        <div className="sectionRow">
          <div className="sectionContent">
            <h2 className="sectionTitle">L'absence d'étoiles</h2>
            <div
              className="mobileImageContainer"
              style={{ "aspect-ratio": "262/378" }}
            >
              <Image
                className="mobileImage"
                src="/images/theory/sky.webp"
                layout="responsive"
                width={262}
                height={378}
                alt="La Terre vue de la Lune"
              />
            </div>
            <p className="sectionParagraph">
              Les preuves avancées sont aujourd’hui toutes démystifiées, comme
              le fait que l’on ne voit pas d’étoiles alors que l’absence
              d'atmosphère de la lune devrait nous laisser les percevoir.
              L’alignement des étoiles serait-il trop dur à rendre réaliste?
              Est-ce ce pourquoi le réalisateur a préféré ne pas en mettre pour
              ne pas que l’on lui en fasse la remarque?
            </p>
            <p className="sectionParagraph">
              Spoiler alerte ! Non, en effet en plein jour avec la pollution
              lumineuse du soleil les étoiles sont plus dure à percevoir, mais
              c’est surtout à cause de la focalisation lumineuse de l’objectif.
              Si vous filmez une fleur dans votre jardin avec la lumière du
              soleil et que vous rendez la luminosité de l’objectif optimal pour
              ces conditions, si vous conservez ces réglages et que vous filmez
              de nuit, la vidéo serait sombre et vous ne verrez pas la fleur.
            </p>
          </div>
          <div className="sectionContext image">
            <div className="imageContainer align-flex-end">
              <div
                className="desktopImageContainer"
                style={{ "aspect-ratio": "262/378" }}
              >
                <Image
                  className="desktopImage"
                  src="/images/theory/sky.webp"
                  layout="responsive"
                  width={262}
                  height={378}
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
            <h2 className="sectionTitle">Une lettre C sur une roche lunaire</h2>
            <div
              className="mobileImageContainer"
              style={{ "aspect-ratio": "600/529" }}
            >
              <Image
                className="mobileImage"
                src="/images/theory/realRock.webp"
                layout="responsive"
                width={600}
                height={529}
                alt="La vraie photo"
              />
            </div>
            <p className="sectionParagraph">
              Juste un poil/poussière sur l'objectif... c'est aussi bête que
              ça... Sur une photo différente prise au même endroit, on ne
              remarque aucune lettre sur cette roche
            </p>
          </div>
          <div className="sectionContext image">
            <div className="imageContainer align-flex-end">
              <div
                className="desktopImageContainer"
                style={{ "aspect-ratio": "600/529" }}
              >
                <Image
                  className="desktopImage"
                  src="/images/theory/realRock.webp"
                  layout="responsive"
                  width={600}
                  height={529}
                  alt="La vraie photo"
                />
              </div>
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
              style={{ "aspect-ratio": "1670/2373" }}
            >
              <Image
                className="mobileImage"
                src="/images/theory/light.webp"
                layout="responsive"
                width={1670}
                height={2373}
                alt="Astronaute sortant d'un véhicule"
              />
            </div>
            <p className="sectionParagraph">
              C'est sans doute l'argument qui a mis le plus de temps à
              démystifier. On observe par les ombres et lumières que le soleil
              est situé à droite et que Aldrin se cache dans l’ombre de la
              capsule, mais que celui-ci est quand même éclairé. On pourrait
              penser qu’une lumière d'éclairage du studio est pointée vers lui.
            </p>
            <p className="sectionParagraph">
              Ce mythe a dû attendre 2014 avant d'être démystifié
              catégoriquement par des recherches de Nvidia. Le groupe a simulé
              l’environnement numériquement, car la lumière n’est pas juste
              émise et crée des ombres. Les rayons se diffusent et réfléchissent
              différemment suivant les matériaux et les couleurs des objets.
              Avec cette simulation ils se rapprochaient de la vérité, mais les
              résultats n'étaient pas concluants.
            </p>
            <p className="sectionParagraph">
              Puis un jour en observant une image en champ opposé, il
              remarquèrent une lumière, Ils se rendirent compte que cette
              lumière était Neil Armstrong, non pas qu’il soit intelligent mais
              sa combinaison blanche composée de teflon reflétait la lumière du
              soleil. Nvidia ajouta l’élément qu'ils leur manquait: Armstrong, à
              leur simulation et de résultat fut sans appel.
            </p>
          </div>
          <div className="sectionContext image">
            <div className="imageContainer align-flex-end">
              <div
                className="desktopImageContainer"
                style={{ "aspect-ratio": "1670/2373" }}
              >
                <Image
                  className="desktopImage"
                  src="/images/theory/light.webp"
                  layout="responsive"
                  width={1670}
                  height={2373}
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
            <h2 className="sectionTitle">Abscence de marquage au sol</h2>
            <div
              className="mobileImageContainer"
              style={{ "aspect-ratio": "670/322" }}
            >
              <Image
                className="mobileImage"
                src="/images/theory/paths.webp"
                layout="responsive"
                width={670}
                height={322}
                alt="Une lettre C sur une roche lunaire"
              />
            </div>
            <p className="sectionParagraph">
              Si l’on prend un peu de recul et que l’on observe la surface de la
              Lune, on peut clairement repérer le site d’alunissage du LEM.
            </p>
          </div>
          <div className="sectionContext image">
            <div className="imageContainer align-flex-end">
              <div className="desktopImageContainer flex">
                <Image
                  className="desktopImage"
                  src="/images/theory/paths.webp"
                  layout="intrinsic"
                  width={670}
                  height={322}
                  alt="Une lettre C sur une roche lunaire"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section scroll-snap">
        <h2 className="sectionTitle">Pour les sceptiques</h2>
        <p className="sectionParagraph">
          Et pour ceux qui diraient “oui mais ça vient de la NASA gnagnagna...”
          : voici une page wikipedia qui liste des preuves rassemblées par des
          tiers (en Anglais)
        </p>
        <a
          className="sectionLink"
          href="https://en.wikipedia.org/wiki/Third-party_evidence_for_Apollo_Moon_landings"
        >
          <span>Aller à la page</span>
          <Arrow />
        </a>
      </section>
      <section className="section scroll-snap">
        <h2 className="sectionTitle">Toujours pas convaincu ?</h2>
        <p className="sectionParagraph">
          Enfin, imaginons que tout cela soit vraiment faux : la NASA et le
          gouvernement Américain ont falsifié un atterrissage sur notre
          satellite naturel. Or après 50 ans, personne n’a rien avoué. Les
          centaines voire les milliers de personnes impliquées auraient-elles
          réussi à garder le secret pendant tout ce temps ?
        </p>
      </section>
      <section className="section scroll-snap">
        <h2 className="sectionTitle">Mais pourquoi on y croit ?</h2>
        <p className="sectionParagraph">
          Après tout, tous les experts s'accordent à dire que ces théories sont
          fausses et on ne compte pas le nombre de preuves qui démonte ces
          théories...
        </p>
        <Link href="/manipulation">
          <a className="sectionLink">
            <span>Voir pourquoi</span>
            <Arrow />
          </a>
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default Debunk;
