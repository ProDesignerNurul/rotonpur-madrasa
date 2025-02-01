import React from "react";
import chairmanImg from "../../assets/images/chairman-muhtamim/chairman.jpg";
import muhtamimImg from "../../assets/images/chairman-muhtamim/muhtamim.jpg";
import logoImg from "../../assets/images/logo/3.jpg";

const Chairman = () => {
  return (
    <div className="my-4 md:my-8 p-4 md:p-8">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="md:w-1/2 card bg-base-300 rounded-box grid h-32">
          <div className="flex justify-start gap-2 items-center px-4">
            <img className="w-24 rounded-md" src={chairmanImg} alt="" />
            <div>
              <h2 className="font-semibold">উপাধ্যক্ষ শফিক উদ্দিন</h2>
              <p>মাদ্রাসা পরিচালনা কমিটির বর্তমান সভাপতি</p>
              <p> রতনপুর, গহরপুর, বালাগঞ্জ, সিলেট।</p>
            </div>
            {/* <img className="w-24 rounded-md" src={logoImg} alt="" /> */}
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="md:w-1/2 card bg-base-300 rounded-box grid h-32">
          <div className="flex justify-start gap-2 items-center px-4">
            <img className="w-24 rounded-md" src={muhtamimImg} alt="" />
            <div>
              <h2 className="font-semibold">মাওঃ আব্দুল মুকিত রতনপুরী</h2>
              <p>বর্তমান মুহতামিম</p>
              <p> রতনপুর, গহরপুর, বালাগঞ্জ, সিলেট।</p>
            </div>
            {/* <img className="w-24 rounded-md" src={logoImg} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chairman;
