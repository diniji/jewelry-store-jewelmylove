import dataJewels from "../../data/dataJewels";
import Jewel from "./Jewel";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/jewelsSlice";


const Jewels = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return(
        <div className="completeContainer">
            {dataJewels
                .filter(jewel => {
                    if (selectedCategory === 'ALL') return true;
                    return jewel.category.includes(selectedCategory);
                })
                .map(jewel => {
                    return(
                        <div key={jewel.id}>
                            <Jewel jewel={jewel} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Jewels;