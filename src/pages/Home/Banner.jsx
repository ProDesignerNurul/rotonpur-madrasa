import React from "react";
import bannerImg from "../../assets/images/main-img/5.png";

const Banner = () => {
  return (
    <div className="relative flex justify-center items-center">
      <img className="w-full opacity-40" src={bannerImg} alt="" />
      <div className="absolute text-center">
        <p className="text-3xl font-semibold my-3">
          রতনপুর, কান্দিগাঁও, কুরুগাঁও এর উদ্যোগে প্রতিষ্ঠিত
        </p>
        <h2 className="text-8xl font-semibold text-red-600">
          রওজাতুল উলুম মহিলা মাদ্রাসা
        </h2>
        <p className="text-5xl text-blue-700 font-semibold my-4">
          রতনপুর, গহরপুর, বালাগঞ্জ, সিলেট।
        </p>
        <p className="text-5xl text-orange-900 font-semibold my-4">
          স্থাপিত : ২০১৯ ইংরেজি
        </p>
      </div>
    </div>
  );
};

export default Banner;
