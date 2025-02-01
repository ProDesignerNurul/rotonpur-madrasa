import React from "react";
import foundingMemberImg from "../../assets/images/founding-member/3.jpg";
import abdulMukit from "../../assets/images/founding-member/abdul-mukit.png";
import suhelBari from "../../assets/images/founding-member/suhel-bari.png";
import aminurRahman from "../../assets/images/founding-member/aminur-rahman.png";
import imranAhmed from "../../assets/images/founding-member/imran-ahmed.png";
import sabbirAhmed from "../../assets/images/founding-member/sabbir-ahmed.png";
import iqbalMahmud from "../../assets/images/founding-member/iqbal-mahmud.png";
import nurulAmin from "../../assets/images/founding-member/nurul-amin.png";
import shafiulIslam from "../../assets/images/founding-member/shafiul-islam.png";

const FoundingMembers = () => {
  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl font-semibold text-center my-4">
        প্রতিষ্ঠাতা সদস্যদের তালিকা
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ক্র:</th>
              <th>ছবি</th>
              <th>নাম</th>
              <th>ঠিকানা</th>
              {/* <th>মোবাইল</th> */}
              {/* <th>প্রতিষ্ঠা সন</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>০১</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="transform hover:scale-200 transition duration-300"
                        src={abdulMukit}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold">মাও. আব্দুল মুকিত</td>
              <td>রতনপুর, গহরপুর, বালাগঞ্জ, সিলেট।</td>
              {/* <td>০১৭৭৯ ৯৫৯৬৬৫</td> */}
              {/* <td>২০১৯ ইংরেজি</td> */}
            </tr>
            <tr>
              <td>০২</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="transform hover:scale-200 transition duration-300"
                        src={suhelBari}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold">সুহেল বারী</td>
              <td>রতনপুর, গহরপুর, বালাগঞ্জ, সিলেট।</td>
              {/* <td>০১৭৭৯ ৯৫৯৬৬৫</td> */}
              {/* <td>২০১৯ ইংরেজি</td> */}
            </tr>
            <tr>
              <td>০৩</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="transform hover:scale-200 transition duration-300"
                        src={aminurRahman}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold">মাও. আমিনুর রহমান</td>
              <td>কুরুগাঁও, গহরপুর, বালাগঞ্জ, সিলেট।</td>
              {/* <td>০১৭৭৯ ৯৫৯৬৬৫</td> */}
              {/* <td>২০১৯ ইংরেজি</td> */}
            </tr>
            <tr>
              <td>০৪</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="transform hover:scale-200 transition duration-300"
                        src={imranAhmed}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold">মাও. ইমরান আহমদ</td>
              <td>রতনপুর, গহরপুর, বালাগঞ্জ, সিলেট।</td>
              {/* <td>০১৭৭৯ ৯৫৯৬৬৫</td> */}
              {/* <td>২০১৯ ইংরেজি</td> */}
            </tr>
            <tr>
              <td>০৫</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="transform hover:scale-200 transition duration-300"
                        src={sabbirAhmed}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold">হাফিজ সাব্বির আহমদ</td>
              <td>কুরুগাঁও, গহরপুর, বালাগঞ্জ, সিলেট।</td>
              {/* <td>০১৭৭৯ ৯৫৯৬৬৫</td> */}
              {/* <td>২০১৯ ইংরেজি</td> */}
            </tr>
            <tr>
              <td>০৬</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="transform hover:scale-200 transition duration-300"
                        src={iqbalMahmud}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold">মাও. ইকবাল মাহমুদ</td>
              <td>রতনপুর (কান্দিগাঁও), গহরপুর, বালাগঞ্জ, সিলেট।</td>
              {/* <td>০১৭৭৯ ৯৫৯৬৬৫</td> */}
              {/* <td>২০১৯ ইংরেজি</td> */}
            </tr>
            <tr>
              <td>০৭</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="transform hover:scale-200 transition duration-300"
                        src={nurulAmin}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold">মাও. নুরুল আমিন</td>
              <td>রতনপুর (কান্দিগাঁও), গহরপুর, বালাগঞ্জ, সিলেট।</td>
              {/* <td>০১৭৭৯ ৯৫৯৬৬৫</td> */}
              {/* <td>২০১৯ ইংরেজি</td> */}
            </tr>
            <tr>
              <td>০৮</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="transform hover:scale-200 transition duration-300"
                        src={shafiulIslam}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold">হাফিজ মাও. শাফিউল ইসলাম মিঠু</td>
              <td>রতনপুর, গহরপুর, বালাগঞ্জ, সিলেট।</td>
              {/* <td>০১৭৭৯ ৯৫৯৬৬৫</td> */}
              {/* <td>২০১৯ ইংরেজি</td> */}
            </tr>
            <tr>
              <td>০৯</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="transform hover:scale-200 transition duration-300"
                        src={foundingMemberImg}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold">হাজী আব্দুল হান্নান</td>
              <td>রতনপুর, গহরপুর, বালাগঞ্জ, সিলেট।</td>
              {/* <td>০১৭৭৯ ৯৫৯৬৬৫</td> */}
              {/* <td>২০১৯ ইংরেজি</td> */}
            </tr>
            <tr>
              <td>১০</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="transform hover:scale-200 transition duration-300"
                        src={foundingMemberImg}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold">হাজী আব্দুল হান্নান</td>
              <td>রতনপুর, গহরপুর, বালাগঞ্জ, সিলেট।</td>
              {/* <td>০১৭৭৯ ৯৫৯৬৬৫</td> */}
              {/* <td>২০১৯ ইংরেজি</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoundingMembers;
