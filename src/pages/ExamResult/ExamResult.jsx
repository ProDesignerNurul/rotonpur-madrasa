import React from "react";
import { Link } from "react-router";
import MainHeading from "../../components/MainHeading";

const ExamResult = () => {
  return (
    <div className="p-4 md:p-8">
      <MainHeading heading="পরীক্ষার রেজাল্ট" />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="border p-4 rounded-md text-center">
          <h2 className="text-2xl font-semibold mb-2">২০২৫ ইংরেজি</h2>
          <p className="text-gray-500 mb-2">
            ২০২৫ ইংরেজি সালের সকল বিভাগ সমূহের পরীক্ষার রেজাল্ট দেখতে এখানে
            ক্লিক করুন।
          </p>
          <button className="btn btn-outline btn-primary w-full">
            <Link to="/exam-2025-year">ক্লিক করুন</Link>
          </button>
        </div>
        <div className="border p-4 rounded-md text-center">
          <h2 className="text-2xl font-semibold mb-2">২০২৪ ইংরেজি</h2>
          <p className="text-gray-500 mb-2">
            ২০২৪ ইংরেজি সালের সকল বিভাগ সমূহের পরীক্ষার রেজাল্ট দেখতে এখানে
            ক্লিক করুন।
          </p>
          <button className="btn btn-outline btn-primary w-full">
            <Link to="/exam-2024-year">ক্লিক করুন</Link>
          </button>
        </div>
        <div className="border p-4 rounded-md text-center">
          <h2 className="text-2xl font-semibold mb-2">২০২৩ ইংরেজি</h2>
          <p className="text-gray-500 mb-2">
            ২০২৩ ইংরেজি সালের সকল বিভাগ সমূহের পরীক্ষার রেজাল্ট দেখতে এখানে
            ক্লিক করুন।
          </p>
          <button className="btn btn-outline btn-primary w-full">
            <Link to="/exam-2023-year">ক্লিক করুন</Link>
          </button>
        </div>
        <div className="border p-4 rounded-md text-center">
          <h2 className="text-2xl font-semibold mb-2">২০২২ ইংরেজি</h2>
          <p className="text-gray-500 mb-2">
            ২০২২ ইংরেজি সালের সকল বিভাগ সমূহের পরীক্ষার রেজাল্ট দেখতে এখানে
            ক্লিক করুন।
          </p>
          <button className="btn btn-outline btn-primary w-full">
            <Link to="/exam-2022-year">ক্লিক করুন</Link>
          </button>
        </div>
        <div className="border p-4 rounded-md text-center">
          <h2 className="text-2xl font-semibold mb-2">২০২১ ইংরেজি</h2>
          <p className="text-gray-500 mb-2">
            ২০২১ ইংরেজি সালের সকল বিভাগ সমূহের পরীক্ষার রেজাল্ট দেখতে এখানে
            ক্লিক করুন।
          </p>
          <button className="btn btn-outline btn-primary w-full">
            <Link to="/exam-2021-year">ক্লিক করুন</Link>
          </button>
        </div>
        <div className="border p-4 rounded-md text-center">
          <h2 className="text-2xl font-semibold mb-2">২০২০ ইংরেজি</h2>
          <p className="text-gray-500 mb-2">
            ২০২০ ইংরেজি সালের সকল বিভাগ সমূহের পরীক্ষার রেজাল্ট দেখতে এখানে
            ক্লিক করুন।
          </p>
          <button className="btn btn-outline btn-primary w-full">
            <Link to="/exam-2020-year">ক্লিক করুন</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamResult;
