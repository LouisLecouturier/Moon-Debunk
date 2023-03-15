import Image from "next/image";
import { useEffect } from "react";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";
import Hero from "../components/Shared/Hero/Hero";

import styles from "../styles/pages/Story.module.scss";

import apollo1 from "../public/images/story/apollo1.webp"
import lk from "../public/images/story/lk.webp"
import manOnMoon from "../public/images/story/manOnMoon.webp"


const Story = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div className="page dark">
        <Header/>
        <div className="scroll-snap">
          <Hero
              title1="Un peu"
              title2="d'histoire..."
              text="par Paul Quiquempois"
          />
        </div>

        <section className="section scroll-snap">
          <h2 className="sectionTitle">Contexte</h2>
          <p className="sectionParagraph">
            La course à la lune commence officiellement en 1961 par le discours du
            président Kennedy annonçant l’ambition d’envoyer un homme sur la lune,
            et de le faire revenir sain et sauf avant la fin de la décennie. En
            pleine guerre froide, ce projet a pour but de démontrer la supériorité
            des américains et du modèle capitaliste sur l’URSS. En effet, après
            l’échec de la course à l’espace pour le bloc Ouest, la super puissance
            n’a plus le droit à l’erreur et doit se relancer.
          </p>
          <p className="sectionParagraph">
            Nait alors le projet Apollo le 25 mai 1961 qui durera 11 ans et aura
            pour but, la conquête de la lune. C’est le troisième projet de la NASA
            après Mercury (premiers américains dans l’espace) et Gemini (étude des
            vols orbitaux) qui ont permis d’engranger une expérience précieuse
            pour mener à bien ce nouveau projet.
          </p>
        </section>
        <div className="scroll-snap relative">
          <div className="effects">
            <div className={styles.fireLeft}></div>
            <div className={styles.fireLeft2}></div>
            <div className={styles.fireRight}></div>
          </div>
          <section className="section pageSection">
            <div className="sectionRow">
              <div className="sectionContent">
                <h2 className="sectionTitle">Des débuts difficiles</h2>
                <div className="mobileImageContainer">
                  <Image
                      className="mobileImage"
                      src={apollo1}
                      alt="Capsule de la mission Apollo 1"
                  />
                  <span>Capsule de la mission Apollo 1</span>
                </div>
                <p className="sectionParagraph">
                  Apollo 1 était la première mission du programme à devoir
                  emporter un équipage. Initialement prévu pour le 7 mars 1967,
                  elle sera écourté le 27 janvier de la même année. Lors d’un
                  entrainement de l’équipage dans le module de commande du
                  vaisseau un court circuit se produit et provoque un incendie.
                  Aucun système d’évacuation rapide n’ayant été prévu, le feu se
                  répend et provoque la mort de l’équipage, dans une communication
                  horrible où l’on entend les trois astronautes hurler de douleur.
                </p>
                <p className="sectionParagraph">
                  Cela força la NASA à geler le programme pendant 21 mois afin de
                  revoir de fond en comble les systèmes du module de commande et
                  de la saturne V (lanceur utilisé dans le projet) et ainsi,
                  éviter de nombreux disfonctionnements qui auraient couté cher au
                  projet.
                </p>
                <p className="sectionParagraph">
                  Donald Slayton (patron des astronautes) déclara plus tard:
                  <blockquote className="quote">
                    “Je suis persuadé que nous aurions fini par nous casser la
                    figure à plusieurs reprises avant d'arriver sur la Lune,
                    peut-être même n'y serions-nous jamais arrivés s'il n'y avait
                    pas eu Apollo 1. Nous sommes tombés sur un nid de vipères qui
                    nous aurait donné bien du fil à retordre par la suite.”
                  </blockquote>
                </p>
              </div>
              <div className="sectionContent image">
                <div className="imageContainer align-flex-end">
                  <div
                      className="desktopImageContainer"
                      style={{"aspect-ratio": "703/1024"}}
                  >
                    <Image
                        className="desktopImage"
                        src={apollo1}
                        alt="Capsule de la mission Apollo 1"
                    />
                  </div>
                  <span>Capsule de la mission Apollo 1</span>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="section scroll-snap">
          <h2 className="sectionTitle">Les avancées pas à pas </h2>
          <p className="sectionParagraph">
            Jusque Apollo 7 les missions consistaient à tester les équipements et
            procédures tout en restant en orbite terrestre. Elles n’emportaient
            pas toujours d’équipages. Apollo 8 est la première mission à quitter
            l’orbite terrestre pour celle de la lune. Cela fait de l’équipage les
            premiers hommes à s’échapper de la gravité d’un corps céleste, les
            premiers à perdre de vu la Terre et de voir un levé de Terre, et les
            premiers à partir aussi loin.
          </p>
          <p className="sectionParagraph">
            A partir de ce moment, la réussite n’est plus très loin, Apollo 9 et
            10 sont des répétitions en conditions réelles. Et le 1 mai 1969, après
            le succès d’Apollo 10, tout est prêt pour réaliser les objectifs fixés
            il y a maintenant 8 ans.
          </p>
        </section>
        <section className="section dark-red scroll-snap">
          <div className="sectionRow">
            <div className="sectionContent">
              <h2 className="sectionTitle">La concurrence</h2>
              <div className="mobileImageContainer">
                <Image
                    className="mobileImage"
                    src={lk}
                    alt="Module LK soviétique"
                />
                <span>Module LK soviétique</span>
              </div>

              <p className="sectionParagraph">
                Du côté Russe, un programme visant à amener un homme sur la lune
                et naturellement créé à la suite des déclarations du président
                Kennedy. Fort de sa réussites dans la conquête de l’espace, l’URSS
                pense réussir bien avant les américains. Mais, à cause du retard
                technologique, notamment en informatique et en moteur à réaction,
                le projet n’avance pas. De plus, avec la mort de Sergeï Korolev en
                1966, l’URSS est quasiment hors jeu. En effet, en plus des retards
                technologiques, tout le programme spatial soviétique reposait sur
                les épaules de Korolev, il était à la fois le chef d’orchestre,
                mais également à tous les pupitres du programme. Si bien qu’à sa
                mort, ses ingénieurs sont incapables de mener à bien leur projet.
              </p>
            </div>
            <div className="sectionContent image">
              <div className="imageContainer align-flex-end">
                <div
                    className="desktopImageContainer"
                    style={{"aspect-ratio": "1197/1662"}}
                >
                  <Image
                      className="desktopImage"
                      src={lk}
                      alt="Module LK soviétique"
                  />
                </div>
                <span>Module LK soviétique</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section scroll-snap">
          <h2 className="sectiontitle no-margin">
            « Un petit pas pour l’homme mais un pas de géant pour l’humanité. »
          </h2>
        </section>
        <section className="section scroll-snap">
          <div className="sectionRow align-center">
            <div className="sectionContent">
              <div className="mobileImageContainer">
                <Image
                    className="mobileImage"
                    src={manOnMoon}
                    alt="Homme sur la lune"
                />
              </div>
              <p className="sectionParagraph">
                Le 16 juillet 1969, Neil Amstrong, Buzz Aldrin et Mickael Colins,
                l’équipage d’Apollo 11 embarque dans la capsule Columbia, au
                sommet de la saturne V avant de décoller pour la lune devant près
                d’un million de personne rassemblés pour l’évènement.
              </p>
              <p className="sectionParagraph">
                Après une orbite lunaire, Amstrong et Aldrin embarquent dans le
                module lunaire baptisé Eagle tandis que Colins reste dans le
                module de commande. S’en suit la séparation des deux modules et la
                descente vers la surface de la lune pour eagle. Malgré des
                problèmes de communication, la descente se passe bien. Mais
                Amstrong se rend compte qu’ils vont dépasser le site prévu de
                l’alunissage à cause d’un problème de poussé.
              </p>
              <p className="sectionParagraph">
                Arrivé proche de la surface, des voyants de l’ordinateur de bord
                s’allument, il est surchargé d’informations tandis qu’Amstrong ne
                trouve pas d’endroit où se poser. Les réserves de carburant
                s’amenuisent... Mais à trente secondes de la pannes sèche, il
                aperçoit un endroit dégagé et se pose. Ses constantes indiquent
                156 BPM.
              </p>
              <p className="sectionParagraph">
                6 heures plus tard, Eagle est dépressurisé et les astronautes
                peuvent sortir, planter le drapeau, prendre des photos et ramasser
                des échantillons.
              </p>
              <p className="sectionParagraph">
                Les américains ont gagné la course à la lune.
              </p>
            </div>
            <div className="sectionContent image">
              <div className="imageContainer align-flex-end">
                <div
                    className="desktopImageContainer"
                    style={{"aspect-ratio": "393/569"}}
                >
                  <Image
                      className="desktopImage"
                      src={manOnMoon}
                      alt="Capsule d'Apollo 1"
                  />
                </div>
                <span>Homme sur la Lune</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section scroll-snap">
          <h2 className="sectionTitle">La suite du programme</h2>

          <p className="sectionParagraph">
            Par la suite, la NASA à continué d’envoyer des astronautes sur la
            lune, permettant l’alunissage avec précision, la récupération
            d’échantillons plus gros et même de faire du rover sur la lune!! Aucun
            accident à part Apollo 13 (qui a quand même vu revenir ses trois
            membres d’équipage sains et saufs) n’est à déplorer sur la fin du
            programme. Mais très vite l’intérêt pour la lune décroit. En effet,
            cela coûte cher et ne sert plus à grand chose. C’est pourquoi, en
            1972, le projet prend fin.
          </p>
          <p className="sectionParagraph">
            Le programme Apollo aura couté plus de 25 milliards de dollars et
            reste l’un des plus grand hauts faits de l’humanité. En plein contexte
            de concurrence géopolitique et de démonstration de puissance , la
            course à la lune à permis de développer énormément de technologies
            utilisées par la suite dans de nombreux domaines tel que la médecine
            ou l’aviation, et marque donc une période prolifique à l’innovation et
            à la recherche.
          </p>
        </section>
        <Footer/>
      </div>
  );
};

export default Story;
