import js from "../Assets/js-logo 1.svg";
import react from "../Assets/Rectangle 35.svg";
import redux from "../Assets/Group 101.svg";
import node from "../Assets/node-logo 1.svg";
import vscode from "../Assets/vscode.svg";
import figma from "../Assets/figma-logo 1.svg";
import { t } from "i18next";

const Skills = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-20 h-[600px] dark:bg-[#484148] bg-white">
        <div className="space-y-10">
          <div>
            <h1 className="text-[48px] text-center dark:text-white">
              {t("skills")}
            </h1>
          </div>
          <div className="flex justify-center w-[932] h-[259] gap-8 ">
            <div className="text-center space-y-2">
              <img src={js} />
              <p className="text-[24px] text-[#777777] dark:text-[#D9D9D9]">
                JAVASCRPIT
              </p>
            </div>
            <div className="text-center space-y-2">
              <img src={react} />
              <p className="text-[24px] text-[#777777] dark:text-[#D9D9D9]">
                REACT
              </p>
            </div>
            <div className="text-center space-y-2">
              <img src={redux} />
              <p className="text-[24px] text-[#777777] dark:text-[#D9D9D9]">
                REDUX
              </p>
            </div>
            <div className="text-center space-y-2">
              <img src={node} />
              <p className="text-[24px] text-[#777777] dark:text-[#D9D9D9]">
                NODE
              </p>
            </div>
            <div className="text-center space-y-2">
              <img src={vscode} />
              <p className="text-[24px] text-[#777777] dark:text-[#D9D9D9]">
                VS CODE
              </p>
            </div>
            <div className="text-center space-y-2">
              <img src={figma} />
              <p className="text-[24px] text-[#777777] dark:text-[#D9D9D9]">
                FIGMA
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
