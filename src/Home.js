import photoOne from "./Images/woman-hat.jpg";
import photoTwo from "./Images/woman-necklace.jpg";
import photoThree from "./Images/3Prf.gif";
import photoFour from "./Images/woman-hat2.jpg";
import photoFive from "./Images/woman-chair.jpg";
import photoSix from "./Images/jewels.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function Home() {

    useEffect(() => {
        AOS.init({duration: 1000});
      })

    return(
        <div className="homeWrap">
            <div className="containerHome" data-aos='fade-up'>
                <h2 className="h2Home">UNIQUENESS</h2>
                <img src={photoOne} className="imgOneHome" alt="woman in hat" />
            </div>
            <div className="containerHome" data-aos='fade-up'>
                <img src={photoTwo} className="imgTwoHome" alt="woman with necklace" />
                <h2 className="h2Home">AUTHENTICITY</h2>
            </div>
            <div className="containerHome" data-aos='fade-up'>
                <h2 className="h2Home">STYLE</h2>
                <img src={photoThree} className="imgTwoHome" alt="green glass jewelry" />
            </div>
            <div className="containerHome" data-aos='fade-up'>
                <img src={photoFive} className="imgTwoHome" alt="green glass jewelry" />
                <h2 className="h2Home">ORIGINALITY</h2>
            </div>
            <div className="containerHome" data-aos='fade-up'>
                <h2 className="h2Home">GLAMOUR</h2>
                <img src={photoFour} className="imgTwoHome" alt="green glass jewelry" />
            </div>
            <div className="containerHome" data-aos='fade-up'>
                <img src={photoSix} className="imgTwoHome" alt="green glass jewelry" />
                <h2 className="h2Home">CHARM</h2>
            </div>
            <p className="parHome">The site was created for educational purposes. The images were taken from sources such as: unsplash.com, pexels.com, freepik.com, gifer.com, pixabay.com,...
</p>
        </div>
    )
}

export default Home;