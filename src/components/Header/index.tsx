import React from "react";
import {headerProps} from "@/components/Header/index.types";

const Header: React.FC<headerProps> = ({title, style }) => {
    return (
       <div style={style}>
           {title}
       </div>
    )
}

export default Header;