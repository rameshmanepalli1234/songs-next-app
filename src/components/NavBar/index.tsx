import { NavBarModules } from "@/utility/navBarModulesData";
import Link from "next/link";
import classNames from "classnames";
import styles from './index.module.scss';
import { BiMenu } from "react-icons/bi";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const NavBar = () => {
    const router = useRouter();
    const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);

    const handleOnMenu = () => {
        setIsNavBarOpen(!isNavBarOpen);
    }

    return (
        <div className={isNavBarOpen ? styles.mobileNavBar : styles.navBarWrapper}>
            <div className={styles.navBarSubContainer}>
                <div className={isNavBarOpen ? styles.mobileNavBarTitleWrapper : styles.navBarTitleWrapper}>
                    <Image src='/static/image/yspmLogo.png' alt='yspm logo' width={30} height={20} style={{borderRadius:'15px'}}/>
                    <div className={classNames(styles.navBarTitle)}>YSPM Ministries</div>
                </div>
                <div className={styles.navBarModulesWrapper}>
                    {NavBarModules.map(({label, pathName, Icon, id}) => {
                        return (
                            <Link href={pathName} key={id} className={router.pathname === pathName ? styles.activeLink : styles.navBarModuleContainer}>
                                <Icon size={18}/>
                                <span className={styles.navBarItemLabel}>{label}</span>
                            </Link>
                        )
                    })}
                </div>
                <div className={styles.menuIconContainer} style={isNavBarOpen ? {marginTop: '22px'} : {}} onClick={handleOnMenu}>
                    <BiMenu size={24} color='white'/>
                </div>
            </div>
            <div className={isNavBarOpen ? styles.mobileNavBarContainer : styles.mobileNavBarContainerHide } style={{width:'100%'}}>
                {NavBarModules.map(({label, pathName, Icon, id}) => {
                    return (
                        <Link href={pathName} key={id} className={router.pathname === pathName ? styles.mobileActiveLink : styles.mobileNavBarModuleContainer}>
                            <Icon size={18}/>
                            <span className={styles.navBarItemLabel}>{label}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default NavBar;