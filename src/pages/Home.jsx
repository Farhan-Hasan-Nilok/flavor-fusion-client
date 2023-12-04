/* eslint-disable react/no-unknown-property */
import { useLoaderData } from "react-router-dom";
import HomePageBanner from "../components/HomePageBanner.jsx";
import ChefCard from "../components/ChefCard.jsx";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Review from "../components/Review.jsx";
const Home = () => {
    const [reviews, setReviews] = useState([]);
    const chefs = useLoaderData();

    useEffect(() => {
        fetch('https://flavor-fusion-server-alpha.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
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

            {/* review section */}
            <div className="mb-8">
                <p className="text-center text-2xl mb-8 mt-2">Reviews</p>
                <Marquee speed={70} pauseOnHover="true">
                    {
                        reviews.map(review => <Review key={review.id} review={review}/>)
                    }
                </Marquee>
            </div>

            <div>
                <p className="text-center text-2xl mb-8 mt-2">Menu</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center mb-10">
                    <ol type="1">
                        <li>Risotto</li>
                        <li>Pizza</li>
                        <li>Pasta</li>
                        <li>Gnotti</li>
                    </ol>
                    <ol type="1">
                        <li>Spagetti</li>
                        <li>Steak</li>
                        <li>Polenta</li>
                        <li>Lasagne</li>
                    </ol>
                    <ol type="1">
                        <li>Gelato</li>
                        <li>Pizza</li>
                        <li>Pasta</li>
                        <li>Gnotti</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Home;