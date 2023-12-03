/* eslint-disable react/prop-types */
import { BiLike } from "react-icons/bi";
import { TbSoup } from "react-icons/tb";
const ChefCard = ({chef}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={chef.picture} alt="Recipe" className="w-[384px] h-[256px]"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{chef.name}</h2>
                    <p>Years of experience: {chef.experience} years</p>
                    <div className="flex items-center">
                        <TbSoup className="w-5 h-5"/>
                        <p> : {chef.recipesCount}</p>
                    </div>
                   <div className="flex items-center">
                        <BiLike className="w-5 h-5" />
                        <p className="ml-2"> : {chef.likesCount}</p>
                   </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;