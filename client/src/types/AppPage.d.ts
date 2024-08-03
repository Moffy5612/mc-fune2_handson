import { Dispatch, SetStateAction } from "react"

export type AppPage = {
    page: number,
    setPageFn: Dispatch<SetStateAction<number>>,
    isMobile: boolean
}