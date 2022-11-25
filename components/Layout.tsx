import {NextPage} from "next";
import DotPattern from "./DotPattern";
import * as React from "react";

type Props = {
    children?: React.ReactNode
}

 const Layout = ({children}: Props) => {
    return (
        <div className='relative h-full'>
            <DotPattern/>
            <div className="p-8 relative max-w-screen-xl xs:p-24">
                { children }
            </div>
        </div>
    )
}
export default Layout;
