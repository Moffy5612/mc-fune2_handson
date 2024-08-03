import { Box, Grid } from "@mui/material";
import MenuComponent from "../containers/MenuComponent";
import "../css/Menu.css"
import { PageContext } from "../App";
import { useContext } from "react";

const Menu = ({id, connection}:{id:number, connection:boolean}) => {
    
    const context = useContext(PageContext)

    return(
        <Box className={"page"+(context?.page !== id ? "":" page-shown")}>
            <header>
                <h1>Web Page of Fune</h1>
            </header>
            <Grid spacing={8} container>
                {/* 
                サンプル
                <MenuComponent id={1} imgsrc="./assets/fune.png" title="Fune" connection={connection}/>
                <MenuComponent id={2} imgsrc="./assets/fission.png" title="Fission" connection={connection}/>
                <MenuComponent id={3} imgsrc="./assets/inventory.png" title="Inventory" connection={connection}/> 
                */}
                {/** @TODO メニューコンポーネントの作成 */}
            </Grid>
        </Box>
    )
}

export default Menu;