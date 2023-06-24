import { FC } from "react"
import Navbar from "./Navbar"

type Props = {
    children: React.ReactNode
}

const PageWrapper: FC<Props> = (props) => {
    return (
        <div className={`min-h-screen font-poppins w-full relative overflow-hidden flex flex-col`}>
            <div className="absolute -bottom-[300px] -left-60 h-[900px] w-[900px] -z-10 [background:radial-gradient(circle_at_center,#004A914f_0,white,#ffffff4f_100%)] blur-[100px] rounded-full">
            </div>
            <div className="absolute -bottom-[300px] -right-20 h-[900px] w-[900px] -z-10 [background:radial-gradient(circle_at_center,#004A914f_0,white,#ffffff4f_100%)] blur-[100px] rounded-full">
            </div>
            <div className="absolute -top-[300px] self-center h-[900px] w-[900px] -z-10 [background:radial-gradient(circle_at_center,#DCAC004f_0,white,#ffffff4f_100%)] blur-[100px] rounded-full">
            </div>
            <Navbar />
            {props.children}
        </div>
    )
}

export default PageWrapper