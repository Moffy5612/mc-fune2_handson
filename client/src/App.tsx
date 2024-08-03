import Menu from "./pages/Menu"
import "./css/App.css"
import { createContext, useEffect, useState } from "react";
import { AppPage } from "./types/AppPage";
import { AppEffect } from "./types/AppEffect";
import SamplePage from "./pages/SamplePage";

const PageContext = createContext<AppPage | undefined>(undefined);

const AppEffects: AppEffect[] = []

/**
 * webSocketにメッセージが届いた時の処理を登録する関数。
 * @param effect idと処理する関数のセット。
 * @returns なし
 */
const addAppEffect = (effect:AppEffect) => {
  for(let e of AppEffects){
    if(e.id === effect.id) return
  }
  AppEffects.push(effect)
}

const App = () => {

  const [isMobile, setIsMobile] = useState(false)
  const [isDark, setIsDark] = useState(true);
  const [page, setPage] = useState(0)
  const [connection,setConnection]=useState(false)

  useEffect(()=>{
    let s =new WebSocket("ws://"+location.hostname+":56122")
    s.onopen=()=>{
        setConnection(true)
    }
    s.onclose=()=>{
        setConnection(false)
    }
    s.onmessage=(ev)=>{
      let data = JSON.parse(ev.data)  
      for(let effect of AppEffects){
          if(effect.id === data.id){
            effect.applyEffect(s, data.data)
          }
      }
    }
  },[])

  useEffect(()=>{
    setIsMobile(window.innerWidth < window.innerHeight)
    setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  useEffect(()=>{
    if(isDark) {
      document.documentElement.setAttribute("theme", "dark");
    } else {
      document.documentElement.setAttribute("theme", "light")
    }
  },[isDark])

  return (
    <>
      <PageContext.Provider value={{page, setPageFn:setPage, isMobile}}>
        <Menu id={0} connection={connection}></Menu>
        
        {/*
        サンプル
        <Fune id={1}></Fune>
        <Fission id={2}></Fission>
        <Inventory id={3}></Inventory> 
         */}

         {/** @TODO ページの作成 */}


         <SamplePage id={1}></SamplePage>
      </PageContext.Provider>
    </>
  )
}

export {PageContext, addAppEffect}
export default App
