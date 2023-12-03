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
        fetch('http://localhost:3000/reviews')
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
        </div>
    );
};

export default Home;