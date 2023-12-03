/* eslint-disable react/no-unknown-property */
import { useLoaderData } from "react-router-dom";
import HomePageBanner from "../components/HomePageBanner.jsx";
import ChefCard from "../components/ChefCard.jsx";

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <HomePageBanner />
            <div>
                <p className="text-center text-2xl mb-6">All Chefs</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 place-items-center mb-8">
                    {
                        chefs.map(chef => <ChefCard key={chef.id} chef={chef} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;