import { useLoaderData } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { TbSoup } from "react-icons/tb";

const ChefDetails = () => {
    const chefData = useLoaderData();
    return (
        <div>
            <img className="h-[256px] w-[384px] rounded-md mx-auto mb-4" src={chefData.picture} alt="" />

            <div className="text-center mb-8">
                <p className="text-2xl font-bold">{chefData.name}</p>
                <div className="flex items-center justify-center">
                    <TbSoup className="w-5 h-5" />
                    <p> : {chefData.recipesCount}</p>
                </div>
                <div className="flex items-center justify-center">
                    <BiLike className="w-5 h-5" />
                    <p className="ml-2"> : {chefData.likesCount}</p>
                </div>
                <p>No of experience : {chefData.experience} years</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center mb-10">
                {
                    chefData.recipes.map(recipes => <div key={recipes.name} className="card w-96 bg-neutral text-neutral-content mx-3">
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
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;