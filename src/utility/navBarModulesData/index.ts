import { FaBible, FaHome, FaMusic, FaRegAddressCard } from "react-icons/fa";
import { RiContactsBookLine, RiCustomerService2Line } from "react-icons/ri";
import { BiBook } from "react-icons/bi";


export const NavBarModules = [
    {
        label: 'Home',
        pathName: '/home',
        Icon: FaHome,
        id: 1
    },
    {
        label: 'About',
        pathName: '/about',
        Icon: RiContactsBookLine,
        id:2
    },
    {
        label: 'Services',
        pathName: '/services',
        Icon: RiCustomerService2Line,
        id:3
    },
    {
        label: 'Songs',
        pathName: '/songs',
        Icon: FaMusic,
        id:4
    },
    {
        label: 'Daily Verse',
        pathName: '/verse',
        Icon: BiBook,
        id:5
    },
    {
        label: 'Bible',
        pathName: '/bible',
        Icon: FaBible,
        id:6
    },
    {
        label: 'Contact Us',
        pathName: '/contact',
        Icon: FaRegAddressCard,
        id:7
    }
]