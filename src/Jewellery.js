import AllCategories from "./Components/Filter/AllCategories";
import Jewels from "./Components/JewelsComponents/Jewels";


function Jewellery() {
    return(
        <div>
            <AllCategories />
            <Jewels />
            <p className="bottomLogo">JewelMyLove</p>
        </div>
    )
}

export default Jewellery;