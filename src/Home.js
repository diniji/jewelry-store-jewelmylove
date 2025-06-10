import photoTwo from "./Images/woman-necklace.jpg";
import photoThree from "./Images/3Prf.gif";
import photoFive from "./Images/woman-chair.jpg";
import videoMain from "./Images/202505171539.mp4"
import AOS from 'aos';
import 'aos/dist/aos.css';

// link to jewellery page
import { Link } from 'react-router-dom';

import { useEffect } from "react";




function Home() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            {/* Video Section */}
            <div className="videoContainer">
                <video className="mainVideo" src={videoMain} autoPlay muted loop playsInline />
                {/* <button className="videoButton">VIEW ALL</button> */}
                <Link to="/jewellery" className="videoButton">
                    VIEW ALL
                </Link>
            </div>

            {/* Main Content */}
            <div className="homeWrap">
                <div className="containerHome" data-aos='fade-up'>
                    <img src={photoTwo} className="imgTwoHome" alt="woman with necklace" />
                    <h2 className="h2Home">AUTHENTIC</h2>
                </div>
                <div className="containerHome two" data-aos='fade-up'>
                    <img src={photoThree} className="imgTwoHome two" alt="green glass jewelry" />
                    <h2 className="h2Home2">UNIQUE</h2>
                </div>
                <div className="containerHome" data-aos='fade-up'>
                    <img src={photoFive} className="imgTwoHome" alt="green glass jewelry" />
                    <h2 className="h2Home">ORIGINAL</h2>
                </div>
            </div>
            <div class="footer">
                <p className="bottomLogo">JewelMyLove</p>
                <p className="parHome">The site was created for educational purposes. The images were taken from sources such as: unsplash.com, pexels.com, freepik.com, gifer.com, pixabay.com, shutterstock.com, icons8.com,...
                </p>
            </div>
        </>
    );
}

export default Home;



// function Home() {

//     useEffect(() => {
//         AOS.init({duration: 1000});
//       })

//     return(
//         <div className="homeWrap">
//             <div className="containerHome" data-aos='fade-up'>
//                 <h2 className="h2Home">UNIQUENESS</h2>
//                 <img src={photoOne} className="imgOneHome" alt="woman in hat" />
//             </div>
//             <div className="containerHome" data-aos='fade-up'>
//                 <img src={photoTwo} className="imgTwoHome" alt="woman with necklace" />
//                 <h2 className="h2Home">AUTHENTICITY</h2>
//             </div>
//             <div className="containerHome" data-aos='fade-up'>
//                 <h2 className="h2Home">STYLE</h2>
//                 <img src={photoThree} className="imgTwoHome" alt="green glass jewelry" />
//             </div>
//             <div className="containerHome" data-aos='fade-up'>
//                 <img src={photoFive} className="imgTwoHome" alt="green glass jewelry" />
//                 <h2 className="h2Home">ORIGINALITY</h2>
//             </div>
//             <div className="containerHome" data-aos='fade-up'>
//                 <h2 className="h2Home">GLAMOUR</h2>
//                 <img src={photoFour} className="imgTwoHome" alt="green glass jewelry" />
//             </div>
//             <div className="containerHome" data-aos='fade-up'>
//                 <img src={photoSix} className="imgTwoHome" alt="green glass jewelry" />
//                 <h2 className="h2Home">CHARM</h2>
//             </div>
//             <p className="parHome">The site was created for educational purposes. The images were taken from sources such as: unsplash.com, pexels.com, freepik.com, gifer.com, pixabay.com, shutterstock.com, icons8.com,...
// </p>
//         </div>
//     )
// }

// export default Home;