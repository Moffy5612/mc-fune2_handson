import { Dispatch, SetStateAction } from "react"

export type AppPage = {
    page: number,
    setPageFn: Dispatch<SetStateActioneAction<number>>,
    isMobile: boolean
}