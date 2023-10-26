import { t } from "i18next";
import cizgi from "../Assets/Rectangle 40.png";

const Profile = () => {
  return (
    <>
      <div className="w-full h-[550px]  bg-[#F4F4F4] dark:bg-[#2A262B] flex flex-col justify-center">
        <div className="flex justify-center h-[100px]  items-center text-[36px] font-medium dark:text-[#FFFFFF]">
          {t("profile")}
        </div>
        <div className="flex justify-center gap-10 static">
          <div className="w-[508px] h-[332px] p-10 rounded-xl bg-[#FFFFFF] z-20 space-y-3 dark:bg-[#525252]">
            <h1 className="text-[#EA2678] text-[24px] font-play font-normal mb-8">
              {t("hakkımda")}
            </h1>
            <div className="flex">
              <p className="font-semibold text-[18px] w-40 dark:text-white">
                {t("dogum")}
              </p>
              <p className="text-[18px] dark:text-white">02.09.1998</p>
            </div>
            <div className="flex">
              <p className="font-semibold text-[18px] w-40 dark:text-white">
                {t("city")}
              </p>
              <p className="text-[18px] dark:text-white">Antalya</p>
            </div>
            <div className="flex">
              <p className="font-semibold text-[18px] w-40 dark:text-white">
                {t("education")}
              </p>
              <p className="flex text-[18px] flex-wrap w-[260px] dark:text-white">
                {t("education2")}
              </p>
            </div>
            <div className="flex">
              <p className="font-semibold text-[18px] w-40 dark:text-white">
                {t("role")}
              </p>
              <p className="text-[18px] dark:text-white">Frontend, UI</p>
            </div>
          </div>
          <div className="absolute rounded-xl z-10 bg-[#525252] dark:bg-[#3e3c3e] w-[508px] h-[332px] -ml-[520px] mt-3 "></div>
          <div className="w-[508px] h-[332px] pt-10 pl-12 space-y-5 static">
            <div className="flex justify-end w-[542px] static flex-col">
              <p className="text-[24px]   z-10 dark:text-white">{t("abme")} </p>
              <div>
                <img
                  src={cizgi}
                  className="absolute  w-[90px] h-[18px]  z-0 -mt-4  -ml-2"
                />
              </div>
            </div>

            <p className="text-[18px] font-normal w-[430px] dark:text-[#FFFFFF] z-20">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p className="text-[18px] w-[400px] dark:text-[#FFFFFF]">
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
