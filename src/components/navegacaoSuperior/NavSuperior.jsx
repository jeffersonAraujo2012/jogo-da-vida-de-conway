import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";

function NavSuperior() {

    return (
        <Box id="menuBar" className="menuBarSup">
        <AppBar position="static" color="default">
            <Toolbar>
            <Typography variant="h4" component="h3">
                ::Jogo da Vida de Conway::
            </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    );
}

export default NavSuperior;
