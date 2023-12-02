import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import noodels from '../assets/food.png';
import ossoboco from '../assets/ossobuco.png';
import pizza from '../assets/pizza.png';
const HomePageBanner = () => {
    return (
        <div className='mt-5'>
            <Swiper
                spaceBetween={50}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 place-items-center'>
                        <div className='col-span-2 px-10'>
                            <p className='text-3xl font-semibold text-start'><span className='text-[#d51b28]'>Taste</span> is what matters</p>
                            <p className='text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, corporis. Qui sequi eligendi impedit, <br /> dolores soluta aperiam. Rem ad eligendi consequatur. Earum, suscipit. Repudiandae sunt <br /> asperiores impedit inventore, quas ea.</p>
                        </div>
                        <img src={noodels} alt="food-img"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                   
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 place-items-center'>
                        <div className='col-span-2 px-10'>
                            <p className='text-3xl font-semibold text-start'><span className='text-[#d51b28]'>Taste</span> is what matters</p>
                            <p className='text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, corporis. Qui sequi eligendi impedit, <br /> dolores soluta aperiam. Rem ad eligendi consequatur. Earum, suscipit. Repudiandae sunt <br /> asperiores impedit inventore, quas ea.</p>
                        </div>
                        <img src={pizza} alt="food-img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 place-items-center'>
                        <div className='col-span-2 px-10'>
                            <p className='text-3xl font-semibold col-span-2 text-start'><span className='text-[#d51b28]'>Taste</span> is what matters</p>
                            <p className='text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, corporis. Qui sequi eligendi impedit, <br /> dolores soluta aperiam. Rem ad eligendi consequatur. Earum, suscipit. Repudiandae sunt <br /> asperiores impedit inventore, quas ea.</p>
                        </div>
                        <img src={ossoboco} alt="food-img" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomePageBanner;