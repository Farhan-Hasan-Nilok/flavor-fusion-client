import { useLoaderData } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { TbSoup } from "react-icons/tb";
import Recipes from "../components/Recipes";
import useTitle from "../hooks/useTitle";
const ChefDetails = () => {
    const chefData = useLoaderData();
    useTitle('Chef')
    return (
        <div>
            {/* chef image */}
            <img className="h-[256px] w-[384px] rounded-md mx-auto mb-4" src={chefData.picture} alt="" />

            {/* chef info */}
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

            {/* chef recipes */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center mb-10">
                {
                    chefData.recipes.map(recipes => <Recipes key={recipes.name} recipes={recipes}/>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;