import { Typography } from "@mui/material"
import { addAppEffect, PageContext } from "../App"
import AppBox from "../containers/AppBox"
import AppTab from "../containers/AppTab"
import { useContext } from "react"

/*
    コンポーネント一覧はこちら: https://mui.com/material-ui/all-components/
*/

const SamplePage = ({id}:{id:number}) => {

    const context = useContext(PageContext) //page: ページ番号, setPageFn: ページ番号を設定する関数, isMobile: スマホから見ているかどうか

    addAppEffect({
        id: id,
        applyEffect(ws, data) {
            //ここにwebsocketからのメッセージを解析する処理を記述
        },
    })

    return(
        <AppBox id={id} title="Sample Page">
            <AppTab id={id} delay={0} title="Sample Message">
                <Typography variant="h2">MC-Fune2 system hands-on</Typography>
            </AppTab>
        </AppBox>
    )
}

export default SamplePage