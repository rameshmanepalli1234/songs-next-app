import { NavBarModules } from "@/utility/navBarModulesData";
import Link from "next/link";
import classNames from "classnames";
import styles from './index.module.scss';
import {BiMenu} from "react-icons/bi";
import Image from "next/image";

const NavBar = () => {
    return (
        <div className={styles.navBarWrapper}>
            <div className={styles.navBarTitleWrapper}>
                <Image src='/static/image/yspmLogo.png' alt='yspm logo' width={30} height={20} style={{borderRadius:'15px'}}/>
                <div className={classNames(styles.navBarTitle)}>YSPM Ministries</div>
            </div>
            <div className={styles.navBarModulesWrapper}>
                {NavBarModules.map(({label, pathName, Icon}) => {
                    return (
                        <Link href={pathName} className={styles.navBarModuleContainer}>
                            <Icon size={20}/>
                            <span className={styles.navBarItemLabel}>{label}</span>
                        </Link>
                    )
                })}
            </div>
            <div className={styles.mobileNavBarWrapper} style={{color:'white'}}>
                <BiMenu size={24}/>
            </div>
        </div>
    )
}

export default NavBar;