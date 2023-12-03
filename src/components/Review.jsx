/* eslint-disable react/prop-types */

const Review = ({review}) => {
    return (
        <div>
            <div className="card w-96 bg-neutral text-neutral-content mx-3">
                <div className="card-body items-center text-center">
                    <img src={review.image} alt="" className="w-14 rounded-full"/>
                    <h2 className="card-title">{review.name}</h2>
                    <p>{review.review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;