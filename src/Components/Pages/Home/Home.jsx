import { Layout } from "../../Tools/Layout/Layout"
import profilepicture from "../../../assets/Images/mig.jpg"
import style from "../../../assets/Style/Home.module.scss"
import { FaReact, FaSass, FaHtml5 } from "react-icons/fa";
import { Portfolio } from "../Portfolio/Portfoilo";
export const Home = () => {
    return (

        <Layout title="" description="opgave">
            <section>
                <Portfolio />
            </section>
        </Layout>

    )
}