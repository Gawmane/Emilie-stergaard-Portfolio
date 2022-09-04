import { Layout } from "../../Tools/Layout/Layout"
import profilepicture from "../../../assets/Images/mig.jpg"
import style from "../../../assets/Style/Home.module.scss"
import { FaReact, FaSass, FaHtml5 } from "react-icons/fa";
import { Portfolio } from "../Portfolio/Portfoilo";
export const Home = () => {
    return (
        <section>
            <Layout title="www.emilieoestergaard/velkommen" description="opgave">
                <section>
                    <h2>Siden er under ombygning - fejl og mangler kan forekomme</h2>
                    <p>De andre sider virker - bare scroll ned </p>
                </section>
            </Layout>
        </section>
    )
}