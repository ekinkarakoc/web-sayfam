import git from "../Assets/github.svg";
import link from "../Assets/LinkedIn.svg";
import foto from "../Assets/11zon_cropped.png";
import ok from "../Assets/arrow-right.svg";
import okb from "../Assets/arrow-right-beyaz.svg";
import gitb from "../Assets/githubbeyaz.svg";
import linkb from "../Assets/LinkedInbeyaz.svg";
import { t } from "i18next";
import { useEffect, useState } from "react";

const Greeting = ({ theme }) => {
  console.log(theme);
  return (
    <>
      <div className="w-full space-y-12 flex mt-[210px]   justify-center ">
        <div className="space-y-10 w-1110 h-493 ml-10">
          <div className="space-y-8 w-[649px]">
            <p className="text-[30px] dark:text-white">{t("hi")} 👋</p>
            <p className="text-[42px] font-medium dark:text-white">
              {t("about")}
            </p>
          </div>
          <div className="flex gap-8">
            {theme == "light" ? <img src={linkb} /> : <img src={link} />}
            {theme == "light" ? <img src={gitb} /> : <img src={git} />}
          </div>
          <div className="w-[580px] h-[64px] flex flex-wrap text-[18px] gap-2 font-normal text-[#000000] dark:text-white">
            <p>{t("current")}</p>
            <p className="text-[#AF0C48]">{t("free")}</p>
            <p>{t("for")}</p>
            <p className="text-[#AF0C48]">{t("ui")}</p>
            <p>{t("project")}</p>
            <p>{t("invite")}</p>
            {theme == "light" ? <img src={okb} /> : <img src={ok} />}
            <a className="text-[#AF0C48] underline">ekinkarakoc1@gmail.com</a>
          </div>
        </div>
        <div className="flex ml-[120px] items-center static">
          <div className="bg-[#E92577] rounded-full h-[320px] w-[320px] absolute mt-5 ml-5"></div>
          <img src={foto} className="h-[300px] z-10" />
          
        </div>
      </div>
    </>
  );
};

export default Greeting;
