import Profile from "../Components/Profile";
import Projects from "../Components/Projects";
import Header from "./Header";
import Skills from "../Components/Skills";

const Main = ({ clickHandle, changeTheme, theme, setTheme, language }) => {
  return (
    <>
      <Header
        clickHandle={clickHandle}
        changeTheme={changeTheme}
        theme={theme}
        setTheme={setTheme}
        language={language}
      />
      <Skills />
      <Profile />
      <Projects theme={theme} />
    </>
  );
};

export default Main;
