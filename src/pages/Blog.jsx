import { usePDF } from 'react-to-pdf';
import useTitle from '../hooks/useTitle';
const Blog = () => {
    useTitle('Blog');
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    return (
        <div className="px-10 py-5">
            <div ref={targetRef}>
                <div className="mb-5">
                    <h2 className="text-2xl font-bold">Differences between uncontrolled and controlled components:</h2>
                    <p>Uncontrolled Component is a component which maintains its own state</p>
                    <p>Controlled Component is a component which recives its current value and updater function from via props from its parent components</p>
                </div>

                <div className="mb-5">
                    <h2 className="text-2xl font-bold">How to validate React props using PropTypes:</h2>
                    <p>Prop type is a react library that allows to specify expected data type for each props</p>
                </div>

                <div className="mb-5">
                    <h2 className="text-2xl font-bold">Tell us the difference between nodejs and express js:</h2>
                    <p>Nodejs is a javascript runtime environment for running javascript program and used to build server site application.</p>
                    <p>Express js is a web framework that is designed to handle various http request.</p>
                </div>

                <div className="mb-5">
                    <h2 className="text-2xl font-bold">What is a custom hook, and why will you create a custom hook:</h2>
                    <p>It allows user developer to encapsulate and reuse complex logic within functional components.</p>
                </div>
            </div>
            <button className='btn' onClick={() => toPDF()}>Download PDF</button>
            {/* the PDF won't download because of daisyUi theme if it is turned off then it will work error is "oklch" */}
        </div>
    );
};

export default Blog;