import React from "react";

const Admission = () => {
  return (
    <div className=" my-4 md:my-8">
      <h2 className="text-3xl font-semibold text-center my-4">
        ভর্তি সংক্রান্ত বিষয়
      </h2>
      <div className="md:flex">
        <div className="md:w-1/2 p-4">
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
                  <td>হেদায়াতুন নাহু</td>
                  <td>৪৫০/= টাকা</td>
                </tr>
                <tr>
                  <td>০২</td>
                  <td>নাহবেমীর</td>
                  <td>৪০০/= টাকা</td>
                </tr>
                <tr>
                  <td>০৩</td>
                  <td>মীযানুস সরফ</td>
                  <td>৩৫০/= টাকা</td>
                </tr>
                <tr>
                  <td>০৪</td>
                  <td>মক্তব পাঞ্জম</td>
                  <td>৩০০/= টাকা</td>
                </tr>
                <tr>
                  <td>০৫</td>
                  <td>মক্তব চাহারাম</td>
                  <td>২৫০/= টাকা</td>
                </tr>
                <tr>
                  <td>০৬</td>
                  <td>নূরানী তৃতীয় শ্রেণী</td>
                  <td>২০০/= টাকা</td>
                </tr>
                <tr>
                  <td>০৭</td>
                  <td>নূরানী দ্বিতীয় শ্রেণী</td>
                  <td>১৮০/= টাকা</td>
                </tr>
                <tr>
                  <td>০৮</td>
                  <td>নূরানী প্রথম শ্রেণী</td>
                  <td>১৫০/= টাকা</td>
                </tr>
                <tr>
                  <td>০৯</td>
                  <td>নূরানী শিশু শ্রেণী</td>
                  <td>১২০/= টাকা</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:w-1/2 p-4">
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
                  <td>মাওঃ আব্দুল মুকিত</td>
                  <td>মুহতামিম</td>
                  <td>০১৭৩৩ ৭৭৪৭৩০</td>
                </tr>
                <tr>
                  <td>মাওঃ ইকবাল মাহমুদ</td>
                  <td>শিক্ষা সচিব</td>
                  <td>০১৮৮০ ৫৯৩২৫২</td>
                </tr>
                <tr>
                  <td>মাওঃ আমিনুর রহমান</td>
                  <td>সাধারণ শিক্ষক</td>
                  <td>০১৭১৭ ৭৯৩৪৬৮</td>
                </tr>
                <tr>
                  <td>মাওঃ ইমরান আহমদ</td>
                  <td>হিসাব রক্ষক</td>
                  <td>০১৮২০ ৬১৮০৭৬</td>
                </tr>
                <tr>
                  <td>হাফিজ সাব্বির আহমদ</td>
                  <td>সাধারণ শিক্ষক</td>
                  <td>০১৮৭১ ৮৩৭৬১৫</td>
                </tr>
                <tr>
                  <td>. . .</td>
                  <td>. . .</td>
                  <td>. . .</td>
                </tr>
                <tr>
                  <td>. . .</td>
                  <td>. . .</td>
                  <td>. . .</td>
                </tr>
                <tr>
                  <td>. . .</td>
                  <td>. . .</td>
                  <td>. . .</td>
                </tr>
                <tr>
                  <td>. . .</td>
                  <td>. . .</td>
                  <td>. . .</td>
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
