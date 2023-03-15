import Image from "next/image";
import Link from "next/link";
import Arrow from "../../../assets/icons/arrow.svg";



import capricornOne from "../../../public/images/capricornOne.webp"

const Theory = () => {
    return (
        <section className="section dark-blue scroll-snap">
            <div className="sectionRow alternate">
                <div className="sectionContent">
                    <h2 className="sectionTitle">On ne nous dit pas tout</h2>
                    <div className="mobileImageContainer">
                        <Image
                            className="mobileImage"
                            src={capricornOne}
                            
                            alt="Extrait du film Capricorn One"
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
                    <Link href="/theory" className="sectionLink">

                        <span>Découvrir les arguments</span>
                        <Arrow className="arrow"/>

                    </Link>
                </div>
                <div className="sectionContent image">
                    <div className="imageContainer align-flex-end">
                        <div
                            className="desktopImageContainer"
                            style={{"aspect-ratio": "651/675"}}
                        >
                            <Image
                                className="desktopImage"
                                src={capricornOne}
                                alt="Extrait du film Capricorn One"
                            />
                        </div>
                        <span>Extrait du film Capricorn One</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Theory;
