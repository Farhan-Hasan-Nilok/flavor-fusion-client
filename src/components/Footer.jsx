import social from '../assets/social.png';
const Footer = () => {
    return (
        <div>
            {/* all footer content */}
            <div className="bg-slate-900 grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-4 p-12">
                {/* careerhub div */}
                <div>
                    <h2 className='text-white text-2xl font-semibold mb-5'>CareerHub</h2>
                    <p className="text-sm text-gray-500 mb-4">There are many variations of passages <br />
                        of Lorem Ipsum , but the majority have <br />
                        suffered alteration in some form.
                    </p>
                    <img src={social} alt="social-media" />
                </div>
                {/* comapany div */}
                <div>
                    <p className='text-lg text-white font-semibold'>Company</p>
                    <ul className='cursor-pointer text-gray-500'>
                        <li className='mb-2'>About us</li>
                        <li className='mb-1'>Work</li>
                        <li className='mb-1'>Latest News</li>
                        <li className='mb-1'>Careers</li>
                    </ul>
                </div>
                {/* product div */}
                <div>
                    <p className='text-lg text-white font-semibold'>Product</p>
                    <ul className='cursor-pointer text-gray-500'>
                        <li className='mb-2'>Prototypes</li>
                        <li className='mb-1'>Plans & Pricing</li>
                        <li className='mb-1'>Customers</li>
                        <li className='mb-1'>Integrations</li>
                    </ul>
                </div>
                {/* support div */}
                <div>
                    <p className='text-lg text-white font-semibold'>Support</p>
                    <ul className='cursor-pointer text-gray-500'>
                        <li className='mb-2'>Help Desk</li>
                        <li className='mb-1'>Sales</li>
                        <li className='mb-1'>Become a Partner</li>
                        <li className='mb-1'>Developers</li>
                    </ul>
                </div>
                {/* contact div */}
                <div>
                    <p className='text-lg text-white font-semibold'>Contact</p>
                    <ul className='cursor-pointer text-gray-500'>
                        <li className='mb-2'>524 Broadway, NYC</li>
                        <li className='mb-1'>+1777-978-5570</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;