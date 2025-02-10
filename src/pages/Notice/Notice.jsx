import React from "react";
import MainHeading from "../../components/MainHeading";
import noticeImage1 from "../../assets/images/notice/notice1.png";
import noticeImage2 from "../../assets/images/notice/notice2.png";
import noticeImage3 from "../../assets/images/notice/notice3.png";
import noticeImage4 from "../../assets/images/notice/notice4.png";
import noticeImage5 from "../../assets/images/notice/notice5.png";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Notice = () => {
  return (
    <div className="py-4 md:py-8">
      <MainHeading heading="মাদ্রাসার নোটিশ" />
      <div className="flex justify-center items-center border m-4 rounded-r-md p-4">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <Zoom>
              <img className="w-11/12 mx-auto" src={noticeImage1} alt="" />
            </Zoom>
          </SwiperSlide>
          <SwiperSlide>
            <Zoom>
              <img className="w-11/12 mx-auto" src={noticeImage2} alt="" />
            </Zoom>
          </SwiperSlide>
          <SwiperSlide>
            <Zoom>
              <img className="w-11/12 mx-auto" src={noticeImage3} alt="" />
            </Zoom>
          </SwiperSlide>
          <SwiperSlide>
            <Zoom>
              <img className="w-11/12 mx-auto" src={noticeImage4} alt="" />
            </Zoom>
          </SwiperSlide>
          <SwiperSlide>
            <Zoom>
              <img className="w-11/12 mx-auto" src={noticeImage5} alt="" />
            </Zoom>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Notice;
