import { Layout } from "../Tools/Layout/Layout"
import { AiFillLinkedin, AiFillPhone, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { GoCalendar, GoHome } from "react-icons/go";
import style from "../../assets/Style/About.module.scss"
import me from "../../assets/Images/aboutme2.jpg"

export const About = () => {
    return (
        <section>
            <Layout title="www.emilieoestergaard/om-mig" description="En side hvor jeg fortæller lidt om mig selv. Hvem er Emilie Østergaard, hvad kan hun, hvilke fritidsinteresser har hun.">
                <div className={style.divwrapper}>
                    <article>
                        <figure>
                            <img src={me} alt="Emilie Østergaard picture" />
                            <figcaption>
                                <h2>Emilie Østergaard</h2>
                                <h3>Frontend udvikler</h3>
                            </figcaption>
                        </figure>
                    </article>

                    <article>
                        <h2>Nysgerrig, humoristisk og flink frontend udvikler klar til et job</h2>
                        <p>Mit navn er Emilie Østergaard, jeg er 21 år og er bosat i Sæby. Pt. studerer jeg til webudvikler på Tech college Aalborg, som jeg er færdig med den 28. september 2022.
                        </p>
                        <p>Jeg er som person meget nede på jorden, med en let tone i dagligdagen. Jeg interesserer mig i at få et projekt til at stå skarpt og velfungerende. Jeg er klar til at komme ud i den virkelige verden og prøve kræfter med de udfordringer der nu kommer med.
                        </p>
                        <p>Som medarbejder vil I få en person, der er målrettet og kvalitetsbevidst, en person der fungerer
                            med frihed under ansvar, men som stadig kan deltage aktivt i gruppearbejde. Jeg fungerer bedst et
                            sted med højt til loftet, hvor der er plads til humør og en uformel omgangstone.
                            Min motivation kommer, når jeg kan se mit arbejde gøre en forskel og det hele spiller. Jeg er en
                            meget pligtopfyldende og ansvarsbevidst person, hvilket betyder, jeg giver mig 100% i en opgave
                            for at få det bedste resultat. Punktlig og kan overholde en deadline.

                        </p>
                        <p>Jeg er ny i mit fag og har blod på tanden til at lære nyt. I vil få en person, I kan forme efter jeres
                            firma og de programmer I bruger.
                            Hvis jeg lyder som noget for jer, og I kan bruge en ambitiøs, men humoristisk, ung kvinde, så tøv
                            endelig ikke med at kontakte mig.
                        </p>
                    </article>
                    <article className={style.icons}>
                        < p><GoCalendar /><b>Fødselsdato:</b> 03/06/2001</p>
                        <a href="emilie.asferg@hotmail.dk"><AiOutlineMail /><b>Email:</b> emilie.asferg@hotmail.dk</a>
                        <a href="tel:+4581146022"><AiFillPhone /><b>Mobil: 81 14 60 22</b></a>
                        <address><GoHome /><b>Adresse</b>Søndergade 5e, 9300 Sæby, Danmark</address>
                        <a href="http://www.linkedin.com/in/emilie-østergaard-677476220" target="_blank"><AiFillLinkedin /><b>LinkIn:</b> Emilie Østergaard</a>
                        <a href="https://github.com/Gawmane" target="_blank"><AiFillGithub /> <b>Github:</b>Gawmane</a>
                    </article>
                </div>
            </Layout>
        </section>
    )
}