const Mode = ({ clickHandle, changeTheme, theme, language }) => {
  return (
    <>
      <div className="md:h-[38px]  md:mt-[65px] md:ml-[1064px] md:flex md:justify-center md:gap-2 md:z-10 flex ml-20">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value="checked"
            onClick={changeTheme}
            className="sr-only peer flex"
          />
          <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#E92577] dark:peer-focus:ring-[#E92577] rounded-full peer dark:bg-[#E92577] peer-checked:after:translate-x-full peer-checked:after:border-[#FFE86E] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#FFE86E] after:border-[#FFE86E] after:border after:mt-[7px] after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#E92577]"></div>
          <span className="ml-3 text-[15px] text-[#777777] dark:text-white font-bold flex flex-row w-28 ">
            {theme === "light" ? "LIGHT" : "DARK"} MODE
          </span>
        </label>
        <div className="flex items-center text-[#777777] m-2 font-bold">|</div>
        <div className="flex items-center gap-1 w-52">
          {language === "tr" ? (
            <button
              className="text-[15px] text-[#E92577] font-bold flex"
              onClick={() => clickHandle("en")}
            >
              SWİTCH TO{" "}
              <p className="text-[15px] md:text-[#777777] font-bold dark:text-white pl-2">
                ENGLISH
              </p>
            </button>
          ) : (
            <button
              className="text-[15px] text-[#E92577] font-bold flex"
              onClick={() => clickHandle("tr")}
            >
              TÜRKÇE{" "}
              <p className="text-[15px] text-[#777777] font-bold dark:text-white">
                ' YE GEÇ
              </p>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Mode;
