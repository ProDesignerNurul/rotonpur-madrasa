import React from "react";
import MainHeading from "../../components/MainHeading";

const Admission = () => {
  return (
    <div className=" my-4 md:my-8">
      <MainHeading heading="ভর্তি সংক্রান্ত বিষয়" />
      <div className="md:flex">
        <div className="md:w-1/2 px-4">
          <h2 className=" text-center font-semibold my-2">ভর্তি ফি</h2>
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              <thead>
                <tr>
                  <th>ক্রমিক</th>
                  <th>জামাতের নাম</th>
                  <th>ভর্তি ফি</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>০১</td>
                  <td className="font-semibold">হেদায়াতুন নাহু</td>
                  <td>৪৫০/= টাকা</td>
                </tr>
                <tr>
                  <td>০২</td>
                  <td className="font-semibold">নাহবেমীর</td>
                  <td>৪০০/= টাকা</td>
                </tr>
                <tr>
                  <td>০৩</td>
                  <td className="font-semibold">মীযানুস সরফ</td>
                  <td>৩৫০/= টাকা</td>
                </tr>
                <tr>
                  <td>০৪</td>
                  <td className="font-semibold">মক্তব পাঞ্জম</td>
                  <td>৩০০/= টাকা</td>
                </tr>
                <tr>
                  <td>০৫</td>
                  <td className="font-semibold">মক্তব চাহারাম</td>
                  <td>২৫০/= টাকা</td>
                </tr>
                <tr>
                  <td>০৬</td>
                  <td className="font-semibold">নূরানী তৃতীয় শ্রেণী</td>
                  <td>২০০/= টাকা</td>
                </tr>
                <tr>
                  <td>০৭</td>
                  <td className="font-semibold">নূরানী দ্বিতীয় শ্রেণী</td>
                  <td>১৮০/= টাকা</td>
                </tr>
                <tr>
                  <td>০৮</td>
                  <td className="font-semibold">নূরানী প্রথম শ্রেণী</td>
                  <td>১৫০/= টাকা</td>
                </tr>
                <tr>
                  <td>০৯</td>
                  <td className="font-semibold">নূরানী শিশু শ্রেণী</td>
                  <td>১২০/= টাকা</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:w-1/2 px-4">
          <h2 className="text-center font-semibold my-2">
            ভর্তির জন্য যোগাযোগ
          </h2>
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              <thead>
                <tr>
                  <th>নাম</th>
                  <th>পদবী</th>
                  <th>মোবাইল</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">মাওঃ আব্দুল মুকিত</td>
                  <td>মুহতামিম</td>
                  <td>০১৭৩৩ ৭৭৪৭৩০</td>
                </tr>
                <tr>
                  <td className="font-semibold">মাওঃ ইকবাল মাহমুদ</td>
                  <td>শিক্ষা সচিব</td>
                  <td>০১৮৮০ ৫৯৩২৫২</td>
                </tr>
                <tr>
                  <td className="font-semibold">মাওঃ আমিনুর রহমান</td>
                  <td>সাধারণ শিক্ষক</td>
                  <td>০১৭১৭ ৭৯৩৪৬৮</td>
                </tr>
                <tr>
                  <td className="font-semibold">মাওঃ ইমরান আহমদ</td>
                  <td>হিসাব রক্ষক</td>
                  <td>০১৮২০ ৬১৮০৭৬</td>
                </tr>
                <tr>
                  <td className="font-semibold">হাফিজ সাব্বির আহমদ</td>
                  <td>সাধারণ শিক্ষক</td>
                  <td>০১৮৭১ ৮৩৭৬১৫</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
