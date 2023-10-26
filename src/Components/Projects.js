import fotosol from "../Assets/sol.png";
import fotosag from "../Assets/pembe.png";
import cizgi from "../Assets/Rectangle 40.png";
import ok from "../Assets/arrow-right.svg";
import okb from "../Assets/arrow-right-beyaz.svg";
import { t } from "i18next";

const Projects = ({ theme }) => {
  return (
    <>
      <div className=" w-full flex flex-col items-center pt-20 static dark:bg-[#484148] bg-white">
        <p className="text-[36px] font-medium dark:text-white">
          {t("projects")}
        </p>
        <div className="flex gap-10 mt-16">
          <div className=" w-[500px] h-[670px] bg-[#DDEEFE] pt-[50px] pl-[30px] rounded-xl space-y-7 dark:bg-[#2D3235]">
            <p className="text-[29px] font-play font-bold dark:text-white">
              {t("joke")}
            </p>
            <p className="text-[16px] w-[368px] font-inter font-normal dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <div className="flex gap-3 w-[250px] flex-wrap">
              <div className="bg-[#FFFFFF] rounded-2xl text-[16px] w-16 h-8 flex justify-center items-center font-bold font-play dark:text-white dark:bg-[#525252]">
                react
              </div>
              <div className="bg-[#FFFFFF] rounded-2xl text-[16px] w-16 h-8 flex justify-center items-center font-bold font-play dark:text-white dark:bg-[#525252]">
                vercel
              </div>
              <div className="bg-[#FFFFFF] rounded-2xl text-[16px] w-16 h-8 flex justify-center items-center font-bold font-play dark:text-white dark:bg-[#525252]">
                axios
              </div>
              <div className="bg-[#FFFFFF] rounded-2xl text-[16px] w-20 h-8 flex justify-center items-center font-bold font-play dark:text-white dark:bg-[#525252]">
                router
              </div>
            </div>
            <div className="flex justify-between w-[440px]">
              <a className="text-[20px] font-semibold dark:text-white">
                {t("github")}
              </a>
              <a className="text-[20px] font-semibold flex items-center dark:text-white">
                {t("app")}{" "}
                {theme == "light" ? <img src={okb} /> : <img src={ok} />}
              </a>
            </div>
            <div className="static flex items-baseline">
              <img src={fotosol} className="absolute mt-[48px] -ml-8" />
            </div>
          </div>
          <div className=" w-[500px] h-[670px] bg-[#D9F6F1] pt-[50px] pl-[30px] rounded-xl space-y-7 dark:bg-[#495351]">
            <p className=" text-[29px] font-play font-bold dark:text-white">
              {t("boring")}
            </p>
            <p className="text-[16px] w-[368px] font-inter font-normal dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia minima
              accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
            <div className="flex gap-3 w-[250px] flex-wrap h-20">
              <div className="bg-[#FFFFFF] rounded-2xl text-[16px] w-16 h-8 flex justify-center items-center font-bold font-play dark:text-white dark:bg-[#525252]">
                react
              </div>
              <div className="bg-[#FFFFFF] rounded-2xl text-[16px] w-20 h-8 flex justify-center items-center font-bold font-play dark:text-white dark:bg-[#525252]">
                vercel
              </div>
              <div className="bg-[#FFFFFF] rounded-2xl text-[16px] w-16 h-8 flex justify-center items-center font-bold font-play dark:text-white dark:bg-[#525252]">
                axios
              </div>
              <div className="bg-[#FFFFFF] rounded-2xl text-[16px] w-20 h-8 flex justify-center items-center font-bold font-play dark:text-white dark:bg-[#525252]">
                router
              </div>
              <div className="bg-[#FFFFFF] rounded-2xl text-[16px] w-20 h-8 flex justify-center items-center font-bold font-play dark:text-white dark:bg-[#525252]">
                vercel
              </div>
            </div>
            <div className="flex justify-between w-[440px]">
              <a className="text-[20px] font-semibold dark:text-white">
                {t("github")}
              </a>
              <a className="text-[20px] font-semibold flex items-center dark:text-white">
                {t("app")}{" "}
                {theme == "light" ? <img src={okb} /> : <img src={ok} />}
              </a>
            </div>
            <div className="static flex h-[500px]">
              <img src={fotosag} className="absolute -mt-[5px]  -ml-8 " />
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-52 justify-center items-center gap-10 pb-[100px] dark:bg-[#484148] bg-white">
        <div className="flex justify-end w-[542px] static flex-col">
          <p className="text-[42px] text-right font-medium z-10 dark:text-white">
            {t("work")}
          </p>
          <div>
            <img src={cizgi} className="absolute    z-0 -mt-20 ml-32" />
          </div>
        </div>

        <div className="font-medium text-[24px]">
          <p className="text-[#1769FF]">Github</p>
          <p className="dark:text-white">Personal Blog</p>
          <p className="text-[#0077B5]">Linkedin</p>
          <p className="text-[#AF0C48]">Email</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
