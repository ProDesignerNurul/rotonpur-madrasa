import React from "react";
import heroImg from "../../assets/images/hero/2.jpg";
import { NavLink } from "react-router";

const Hero = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="md:flex">
        <img src={heroImg} className="rounded-lg md:w-1/2 p-4" />
        <div className="md:w-1/2 p-4 flex justify-center items-center">
          <div>
            <h1 className="text-4xl font-bold">
              আমাদের মাদ্রাসা সম্পর্কে কিছু কথা
            </h1>
            <p className="py-2">
              মাদ্রাসা শিক্ষায় প্রথম প্রতিষ্ঠান ছিল সাফা পর্বতের পাদদেশে
              যায়েদ-বিন-আরকামের বাড়িতে - যেখানে স্বয়ং মুহাম্মাদ ছিলেন শিক্ষক
              এবং শিক্ষার্থী ছিলেন তার কয়েকজন অনুসারী নওমুসলিম। হিজরতের পর
              মদিনায় মসজিদে নববি-র পূর্বপাশে স্থাপিত হয় মাদ্রাসা আহলে সুফ্‌ফা।
              শিক্ষক ছিলেন উবাদা-ইবন সামিত আর শিক্ষার্থীদের মধ্যে ছিলেন আবু
              হুরাইরা , মুয়াজ-ইবন জবল, গিফারি প্রমুখ। সেকালের মাদ্রাসার
              পাঠ্যসূচিতে ছিল, কোরআন, হাদিস, ফারায়েজ, প্রাথমিক চিকিৎসা, বংশ
              শাস্ত্র, তাজবিদ ইত্যাদি। এছাড়া অশ্ব চালনা, যুদ্ধবিদ্যা, হস্তলিপি
              বিদ্যা, শরীর চর্চা ইত্যাদিও পাঠ্যসূচির অন্তর্ভুক্ত ছিল। নবুয়তের
              প্রথম দিন থেকে উমাইয়া বংশের শাসনামলের প্রথম ভাগ পর্যন্ত প্রায়
              একশ বছর সময়কালকে মাদ্রাসা শিক্ষার প্রথম পর্যায় ধরা হয়।
            </p>
            <p className="py-2">
              মাদ্রাসা শিক্ষায় প্রথম প্রতিষ্ঠান ছিল সাফা পর্বতের পাদদেশে
              যায়েদ-বিন-আরকামের বাড়িতে - যেখানে স্বয়ং মুহাম্মাদ ছিলেন শিক্ষক
              এবং শিক্ষার্থী ছিলেন তার কয়েকজন অনুসারী নওমুসলিম। হিজরতের পর
              মদিনায় মসজিদে নববি-র পূর্বপাশে স্থাপিত হয় মাদ্রাসা আহলে সুফ্‌ফা।
              শিক্ষক ছিলেন উবাদা-ইবন সামিত আর শিক্ষার্থীদের মধ্যে ছিলেন আবু
              হুরাইরা , মুয়াজ-ইবন জবল, গিফারি প্রমুখ। সেকালের মাদ্রাসার
              পাঠ্যসূচিতে ছিল, কোরআন, হাদিস, ফারায়েজ, প্রাথমিক চিকিৎসা, বংশ
              শাস্ত্র, তাজবিদ ইত্যাদি। এছাড়া অশ্ব চালনা, যুদ্ধবিদ্যা, হস্তলিপি
              বিদ্যা, শরীর চর্চা ইত্যাদিও পাঠ্যসূচির অন্তর্ভুক্ত ছিল। নবুয়তের
              প্রথম দিন থেকে উমাইয়া বংশের শাসনামলের প্রথম ভাগ পর্যন্ত প্রায়
              একশ বছর সময়কালকে মাদ্রাসা শিক্ষার প্রথম পর্যায় ধরা হয়।
            </p>
            <button className="btn btn-error text-white">
              <NavLink to="/about">বিস্তারিত জানতে</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
