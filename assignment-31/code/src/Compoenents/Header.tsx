import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import { Button, Toolbar } from "@mui/material";
import { orange } from "@mui/material/colors";
import DarkLightSwitch from "./DarkLightSwitch";

interface Props {
  setIsDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  isDarkMode: boolean;
}

const navLinks = [
  { title: "About Us", path: "aboutUs" },
  { title: "Pricing ", path: "pricing" },
  { title: "Contact Us", path: "contactUs" },
];
const Header: React.FC<Props> = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <AppBar position="static" sx={{ justifyContent: "space-between" }}>
      <Toolbar>
        <SportsBasketballIcon sx={{ fontSize: 60 }} />
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
          BasketBall
        </Typography>
        <DarkLightSwitch
          setIsDarkMode={setIsDarkMode}
          isDarkMode={isDarkMode}
        />
        {navLinks.map((item) => (
          <Button
            variant="text"
            href={item.path}
            sx={{ color: "white", mx: 1 }}
          >
            {item.title}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
