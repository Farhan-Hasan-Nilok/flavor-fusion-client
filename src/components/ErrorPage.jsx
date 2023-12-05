import Lottie from "lottie-react";
import error from '../assets/error.json';
const ErrorPage = () => {
    return (
        <div className="w-[500px] mx-auto py-40">
            <Lottie animationData={error} loop={true}/>
        </div>
    );
};

export default ErrorPage;