import HomePageBanner from "../components/HomePageBanner.jsx";
import NavBar from "../components/NavBar.jsx";

const Home = () => {
    return (
        <div>
            <NavBar />

            <div>
                <HomePageBanner />
            </div>
        </div>
    );
};

export default Home;