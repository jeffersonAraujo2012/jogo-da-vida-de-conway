import "./App.css";
import { AppBar, Toolbar, Typography, Box} from "@material-ui/core";
import "fontsource-roboto";
import { useEffect } from "react";
import MatrizDeCelulas from "./components/MatrizDeCelulas";

function App() {
  useEffect(
    () => {
      const menuBar = document.getElementById("menuBar");
      console.log(menuBar.offsetHeight);
    }
  );
  return (
    <>
      <Box id="menuBar" className="menuBarSup">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h4" component="h3">
              ::Jogo da Vida de Conway::
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <MatrizDeCelulas/>
    </>
  );
}

export default App;
