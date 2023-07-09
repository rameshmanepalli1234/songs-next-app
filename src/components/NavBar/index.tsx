import styles from './index.module.scss';
import Header from "@/components/Header";
import { NavBarModules } from "@/utility/navBarModulesData";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className={styles.navBarWrapper}>
            <Header title='YSPM Ministries' style={{color: 'white', fontSize: '24px', fontWeight: '300'}} />
            <div className={styles.navBarModulesWrapper}>
                {NavBarModules.map(({label, pathName, Icon}) => {
                    return (
                        <Link href={pathName} className={styles.navBarModuleContainer}>
                            <Icon size={20}/>
                            {label}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default NavBar;