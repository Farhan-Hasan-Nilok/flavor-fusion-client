/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Toast from "./Toast";
const Recipes = ({recipes}) => {
    const [favourite, setFavourite] = useState(false);
    return (
        <div>
            <div className="card w-96 bg-neutral text-neutral-content mx-3 mb-5">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{recipes.name}</h2>
                    <p>Rating : {recipes.rating}</p>
                    <p className="font-bold text-[#d51b28]">Ingredient: </p>
                    <ul>
                        {
                            recipes.ingredients.map((element, idx) => <li key={idx}>{element}</li>)
                        }
                    </ul>
                    <p>Cooking method : {recipes.cookingMethod}</p>

                    <div className="w-full flex justify-between items-center">
                        <p>Favourite</p>
                        {
                            favourite ?
                                <FaHeart onClick={() => setFavourite(!favourite)} className="w-7 h-7 text-[#e2646c]" />
                                :
                                <FaRegHeart onClick={() => setFavourite(!favourite)} className="w-7 h-7" />
                        }
                    </div>
                </div>
            </div>
            {
                favourite && <Toast/>
            }
        </div>
    );
};

export default Recipes;