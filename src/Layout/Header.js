import sayfasus from "../Assets/sayfa süsleri.svg";
import Greeting from "../Components/Greeting";
import Mode from "../Components/Mode";
import morcizik from "../Assets/Rectangle 2.png";
import Profile from "../Components/Profile";

const Header = ({ clickHandle, changeTheme, theme, setTheme, language }) => {
  return (
    <>
      <div className="inline-block justify-center relative  w-full bg-[#F4F4F4] dark:bg-[#2A262B] h-[780px]">
        <div className="absolute flex justify-center">
          <Mode
            clickHandle={clickHandle}
            changeTheme={changeTheme}
            theme={theme}
            setTheme={setTheme}
            language={language}
          />
        </div>
        <div className="absolute mt-[330px] ml-[300px]">
          <img src={morcizik} />
        </div>
        <div className="absolute w-full">
          <Greeting
            changeTheme={changeTheme}
            theme={theme}
            setTheme={setTheme}
          />
        </div>
        <img src={sayfasus} alt="" className="w-full" />
      </div>
    </>
  );
};

export default Header;
