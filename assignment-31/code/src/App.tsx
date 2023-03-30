import "./App.css";
import Footer from "./Compoenents/Footer";
import Header from "./Compoenents/Header";
import { Outlet } from "react-router-dom";
import { DarkTheme, LightTheme } from "./Themes/Theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import useLocalStorageState from "./Hooks/useLocalStorageState";

function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState("isDarkMode", true);

  return (
    <div className="App">
      <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        <CssBaseline>
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Outlet />
          <Footer />
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
