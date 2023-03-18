import Head from "next/head";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";
import Hero from "../components/Shared/Hero/Hero";

const Manipulation = () => {
  return (
    <div className="page dark">
      <Head>
        <title>Manipulation</title>
      </Head>
      <Header />
      <div className="scroll-snap">
        <Hero title1="Pourquoi" title2="On y croit" text="Par Xavier Lemarié" />
      </div>
      <section className="section scroll-snap">
        <h3 className="sectionSubTitle">
          La théorie du complot répond au besoin d’avoir l’explication des
          informations qui nous parviennent.
        </h3>
        <h3 className="sectionSubTitle no-margin">
          Alors, comment cette théorie est-elle devenue crédible aux yeux de
          certaines personnes ?
        </h3>
      </section>

      <section className="section scroll-snap">
        <h2 className="sectionTitle ">Les biais cognitifs</h2>
        <p className="sectionParagraph">
          Selon les psychologues ayant étudié la question, les biais cognitifs
          seraient en grandes partie responsables de l’adhésion aux théories du
          complot. En d’autres termes notre systèmes cognitif est plus enclin à
          croire ce qui relève d’un biais cognitif, nous serions “neuronallement”
          conçus pour croire au théorie complotiste.
        </p>
        <hr />
        <h3 className="margin-24">
          Bon nombre de biais cognitif peuvent être assimilés au théories du
          complot, les plus importants seraient :
        </h3>
        <p className="sectionParagraph">
          - Le biais d’intentionalité, qui nous pousse à croire que rien n’est
          fait par hasard et que les accidents sont forcement prémédités.
        </p>
        <p className="sectionParagraph">
          - Le biais de confirmation, on croit avant de voir, il est simple de
          ne faire que des recherches dans le sens de notre pensée, on va alors
          forcement tomber sur des gens de notre avis et donc confirmant notre
          théorie.
        </p>
        <p className="sectionParagraph">
          - Le biais de corrélation, qui nous fait surestimer le lien entre deux
          évènements qui n’ont pas forcément de lien.
        </p>
      </section>
      <section className="section scroll-snap">
        <h3 className="sectionSubTitle">
          Mais les biais cognitifs ne sont pas les seuls actionnaires des
          complots.
        </h3>
      </section>
      <section className="section scroll-snap">
        <h2 className="sectionTitle ">L’aspect social</h2>

        <p className="sectionParagraph">
          Le phénomène “d’excès d’institutions” engendrerait un fort
          conspirationnisme qui est l’expression d’une crise de l’individu et de
          son autonomie, ainsi que de son angoisse face au pouvoir croissant,
          technocratique et bureaucratique des administrations.
        </p>
        <p className="sectionParagraph">
          Pour un autre courant, les théories du complot naissent, à l’inverse,
          de la disparition des « institutions structurantes ». Selon le juriste
          américain Mark Fenster, le développement des théories du complot
          résulte du déclin de la société civile traditionnelle (mouvements
          politiques, syndicalistes et religieux) qui laisse désemparés les
          groupes les plus fragiles. Pour Pierre-André TAGUIEFF, les théories du
          complot répondent à ce besoin de « ré-enchantement du monde ».
        </p>
      </section>
      <section className="section scroll-snap">
        <h2 className="sectionTitle">l’aspect psychosocial</h2>
        <hr />
        <h3 className="margin-24">
          Le succès de la théorie du complot répondrais à 4 fonctions
          psychosociales :
        </h3>

        <p className="sectionParagraph">
          - Fuir le réel pour demeurer dans le confort de ses certitudes : une
          théorie va souvent reposer sur le fait “qu’on nous ment” pour
          confirmer notre idée même si d’autre arguments pourraient les
          contredire, l’anticonformisme va alors mettre en valeur les
          complotistes
        </p>
        <p className="sectionParagraph">
          - Procurer un sentiment de gratification personnelle : penser faire
          partie d’une minorité de pensants et de personnes ayant une
          compréhension avancée du monde procure un grand sentiment de
          supériorité
        </p>
        <p className="sectionParagraph">
          - Se rassurer face à une situation de sidération : Les théories du
          complots répondent au besoin de rationalité lorsqu’on est confronté à
          un évènement exceptionnel (comme le fait d’aller sur la lune), il est
          réconfortant de se dire qu’on nous ment et que cela n’est jamais
          arrivé ou alors faire porter le chapeau à une instance “maléfique”.**
        </p>
        <p className="sectionParagraph">
          - Produire du sens dans une situation « d’anomie » : En désignant un
          coupable, les théories conspirationnistes permettent d’expliquer et
          d’incarner des phénomènes qui dépassent et déstabilisent l’individu,
          comme la conquête spatiale.**
        </p>
      </section>
      <section className="section scroll-snap">
        <h2 className="sectionTitle">Conclusion</h2>
        <p className="sectionParagraph">
          Vous l’aurez compris, les outils pour faire marcher une théorie du
          complot sont nombreux. Notre corps est naturellement enclin à y
          croire, notre société nous pousse à y croire et notre nature humaine
          nous donne envie d’y adhérer. Le complot lunaire ne fait pas
          exception.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Manipulation;
