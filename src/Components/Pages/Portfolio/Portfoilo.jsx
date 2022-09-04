import { Layout } from "../../Tools/Layout/Layout"

import pwa from "../../../assets/Images/pwa.mp4"
import { FaReact, FaSass, FaHtml5 } from "react-icons/fa";
import Bageriet from "../../../assets/Images/filter-katelog/bageriet.png"
import CMS from "../../../assets/Images/filter-katelog/cms.png"
import Hund from "../../../assets/Images/filter-katelog/hund.png"
import Teaparty from "../../../assets/Images/filter-katelog/teaparty.JPG"
import { SiJavascript } from "react-icons/si";

import resume from "../../../assets/Images/Resume.jpg"
import style from "../../../assets/Style/Portfolio.module.scss"

export const Portfolio = () => {
    return (
        <section className={style.portfolio}>
            <Layout title="www.emilieoestergaard/Portfolio" description="Portfolio side, med mine gamle opgaver. Her kan man se forskellie projekter jeg har lavet gemmen tiden. Hvilke skills jeg har.">
                <section className={style.projekt}>
                    <h2>Erfaring - Uddannelse opgaver</h2>
                    <h2>Projekter</h2>
                    <div className={style.gridGallery}>

                        <figure>
                            <a href="https://github.com/Gawmane/bageriet" target="_blank"> <img src={Bageriet} alt="Skole" /></a>
                            <figcaption>
                                <h3>Teaparty</h3>
                                <p>En skole opgave fra april 2022 - Første react projekt</p>
                                <span><FaReact /><FaSass /></span>
                            </figcaption>
                        </figure>
                        <figure>
                            <a href="https://github.com/Gawmane/Cms-strapi" target="_blank">  <img src={CMS} alt="School" /></a>
                            <figcaption>
                                <h3>Presentation</h3>
                                <p>Headless skole opgave - lavet i Strapi april 2022</p>

                                <span><FaReact /><FaSass /></span>

                            </figcaption>
                        </figure>
                        <figure>
                            <a href="https://gawmane.github.io/Hent-en-hund---PWA/" target="_blank">   <img src={Hund} alt="School" /></a>
                            <figcaption>
                                <h3>Beiges</h3>
                                <p>En skole opgave fra febuar 2022</p>
                                <span><FaHtml5 /><FaSass /><SiJavascript /></span>

                            </figcaption>
                        </figure>
                        <figure>
                            <img src={Teaparty} alt="School" />
                            <figcaption>
                                <h3>Teaparty</h3>
                                <p>En skole opgave fra start 2021</p>
                                <span><FaHtml5 /><FaSass /></span>
                            </figcaption>
                        </figure>

                    </div>
                </section>

                <section className={style.uddinfo}>
                    <article className={style.fullwidth}>
                        <div>
                            <h2>Webudvikler Uddannelse</h2>
                            <p>Jeg startede min uddannelse som webudvikler i december 2020 på Tech college i Aalborg.</p>
                            <p>Jeg havde et lille års tid før optagelsen på min uddannelse leget med forskellige former for webudvikling. Jeg har siden jeg var lille elsket at lave små hjemmesider, inde på andre hjemmesider som 123hjemmesider og Wix. </p>     <p></p>
                            <p>Jeg begyndte i 2020 at starte små HTML projekter op og fik interessen for det her.</p>
                            <p>På min uddannelse har jeg lært at lave brugervenlige webløsninger i HTML, SCSS, JavaScript og React.js. </p>
                            <p>Jeg er færdig med min uddannelse den 28. september 2022.</p>
                        </div>
                    </article>
                    <article>
                        <h3>Fag:</h3>
                        <p>Herunder kommer der en kort beskrive af hvilke fag jeg har haft på min udannelse.</p>
                        <p>Flip kortet og se en beskrivelse af hvad jeg har lavet</p>
                        <article className={style.cardwrapper}>
                            <div className={style.flip}>
                                <div className={style.front} >
                                    <h4>Apps</h4>
                                </div>
                                <div class={style.back}>
                                    <p>I dette fag lærte vi at lave PWA. Dette fag havde vi i 2 uger, hvor den første blev brugt på at lave en Progressiv Web App. </p>
                                    <video loop muted autoPlay controls=''  >
                                        <source src={pwa} ></source>
                                    </video>
                                </div>
                            </div>

                            <div className={style.flip}>
                                <div className={style.front} >
                                    <h4>CMS</h4>
                                </div>
                                <div class={style.back}>
                                    <p>I CMS har vi haft projekter i WordPress og herefter prøvet kræfter med headless CMS i Strapi.</p>
                                </div></div>

                            {/* ny */}
                            <div className={style.flip}>
                                <div className={style.front} >
                                    <h4>Avanceret CSS</h4>
                                </div>
                                <div class={style.back}>
                                    <p>I dette fag har vi haft fokus på precompiled css. Vi har brugt sass og har her lavet forskellige animationer og lært nesting, mixin og sass functions.</p>
                                </div></div>

                            {/* ny */}
                            <div className={style.flip}>
                                <div className={style.front} >
                                    <h4>Dataservices</h4>
                                </div>
                                <div class={style.back}>
                                    <p >I Dette fag har vi brugt 2 uger på at lære <b>Api kald</b> og lavet en STEM opgave hvor vi har lavet et infoboard hvor vi har kaldt data ned. De 2 uger efter det har vi rørt ved <b>backend udvikling</b>. Her har vi brugt <b>MySQL</b> og <b>node.js</b> til at lave vores egen database og bagefter hentet data via vores egne Api’er</p>
                                </div></div><div className={style.flip}>
                                <div className={style.front} >

                                    {/* ny */}
                                    <h4>Digital handel</h4>
                                </div>
                                <div class={style.back}>
                                    <p>I dette fag har vi lært om <b>SEO optimering</b> og regler og retningslinjer for webshops. Her har jeg igen arbejdet med <b>Wordpress</b> og denne gang også <b>Shopify</b>.</p>
                                </div></div>

                            {/* ny */}
                            <div className={style.flip}>
                                <div className={style.front} >
                                    <h4>Faglig fornyelse</h4>
                                </div>
                                <div class={style.back}>
                                    <p>I dette fag har vi skulle vælge forskellige emner indenfor <b>React.js</b> og fordybe os indenfor</p>
                                </div></div>

                            {/* ny */}
                            <div className={style.flip}>
                                <div className={style.front} >
                                    <h4>Praktisk web</h4>
                                </div>
                                <div class={style.back}>
                                    <p> Undervisning i <b>frontend udvikling </b> indenfor <b>JavaScript</b> og <b>React.js</b></p></div></div>

                            {/* ny */}
                            <div className={style.flip}>
                                <div className={style.front} >
                                    <h4>Programmering</h4>
                                </div>
                                <div class={style.back}>
                                    <p>Undervisning i <b>frontend udvikling </b> indenfor <b>JavaScript</b> og <b>React.js</b></p>
                                </div></div>

                            {/* ny */}
                            <div className={style.flip}>
                                <div className={style.front} >
                                    <h4>Projektorganise</h4>
                                </div>
                                <div class={style.back}>
                                    <p>Arbejdet med agile arbejdsmetoder. Lært omkring <b> SCRUM</b> og hvordan man bruger <b>Github </b> både sammen med andre og alene.</p>

                                </div></div>
                        </article>
                    </article>
                </section>
                <section className={style.cv}>
                    <h2>CV</h2>
                    <img src={resume} alt="Resmue" />
                    <h4>Download eksamens bevis: </h4>
                    <a href="../../../assets/Files/HF Eksamensbevis.PDF" download>HF og VUC enkelt fag</a>
                    <a href="../../../assets/Files/Kopi af GF2 bevis fra Tradium (1).PDF" download>EUD business GF2</a>
                    <a href="../../../assets/Files/10 klasse bevis.pdf" download>10. Klasse</a>
                </section>
            </Layout>
        </section>
    )
}