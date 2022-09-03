import { Layout } from "../../Tools/Layout/Layout"
import pwa from "../../../assets/Images/pwa.mp4"
import style from "../../../assets/Style/Portfolio.module.scss"
export const Portfolio = () => {
    return (
        <>
            <Layout title="Portfolio" description="Portfolio side, med mine gamle opgaver. Her kan man se forskellie projekter jeg har lavet gemmen tiden. Hvilke skills jeg har.">
                <section>
                    <h2>Erfaring - Uddannelse opgaver</h2></section>
                <section>
                    <article><h2>Webudvikler Uddannelse</h2>
                        <p>Jeg startede min uddannelse som webudvikler i december 2020 på Tech college i Aalborg.</p>
                        <p>Jeg havde et lille års tid før optagelsen på min uddannelse leget med forskellige former for webudvikling. Jeg har siden jeg var lille elsket at lave små hjemmesider, inde på andre hjemmesider som 123hjemmesider og Wix. </p>     <p></p>
                        <p>Jeg begyndte i 2020 at starte små HTML projekter op og fik interessen for det her.</p>
                        <p>På min uddannelse har jeg lært at lave brugervenlige webløsninger i HTML, SCSS, JavaScript og React.js. </p>
                        <p>Jeg er færdig med min uddannelse den 28. september 2022.</p>
                        <h3>Fag:</h3>
                        <p>Herunder kommer der en kort beskrive af hvilke fag jeg har haft på min udannelse.</p>
                        <h4>Apps</h4>
                        <p>I dette fag lærte vi at lave PWA. Dette fag havde vi i 2 uger, hvor den første blev brugt på at lave en Progressiv Web App. </p>
                        <video loop muted autoPlay controls=''  >
                            <source src={pwa} ></source>
                        </video>
                        <h4>CMS</h4>
                        <p>I CMS har vi haft projekter i WordPress og herefter prøvet kræfter med headless CMS i Strapi.</p>
                        <h4>Avanceret CSS</h4>
                        <p>I dette fag har vi haft fokus på precompiled css. Vi har brugt sass og har her lavet forskellige animationer og lært nesting, mixin og sass functions.</p>
                        <h4>Dataservices</h4>
                        <p>I Dette fag har vi brugt 2 uger på at lære <b>Api kald</b> og lavet en STEM opgave hvor vi har lavet et infoboard hvor vi har kaldt data ned. De 2 uger efter det har vi rørt ved <b>backend udvikling</b>. Her har vi brugt <b>MySQL</b> og <b>node.js</b> til at lave vores egen database og bagefter hentet data via vores egne Api’er</p>
                        <h4>Digital handel</h4>
                        <p>I dette fag har vi lært om <b>SEO optimering</b> og regler og retningslinjer for webshops. Her har jeg igen arbejdet med <b>Wordpress</b> og denne gang også <b>Shopify</b>.</p>
                        <h4>Faglig fornyelse</h4>
                        <p>I dette fag har vi skulle vælge forskellige emner indenfor <b>React.js</b> og fordybe os indenfor</p>
                        <h4>Praktisk web</h4>
                        Undervisning i <b>frontend udvikling </b> indenfor <b>JavaScript</b> og <b>React.js</b>
                        <h4>Programering</h4>
                        <p>Undervisning i <b>frontend udvikling </b> indenfor <b>JavaScript</b> og <b>React.js</b></p>
                        <h4>Projektrganise</h4>
                        <p>Arbejdet med agile arbejdsmetoder. Lært omkring <b> SCRUM</b> og hvordan man bruger <b>Github </b> både sammen med andre og alene.</p>
                    </article>
                </section>
                <h2>CV</h2>

                <a href="../../../assets/Files/HF Eksamensbevis.PDF" download>hf</a>
                <a href="../../../assets/Files/Kopi af GF2 bevis fra Tradium (1).PDF" download>tradium</a>
                <a href="../../../assets/Files/10 klasse bevis.pdf" download>10</a>
            </Layout>
        </>
    )
}