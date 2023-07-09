import { FaBible, FaHome, FaMusic, FaRegAddressCard } from "react-icons/fa";
import { RiContactsBookLine, RiCustomerService2Line } from "react-icons/ri";
import { BiBook } from "react-icons/bi";


export const NavBarModules = [
    {
        label: 'Home',
        pathName: '/home',
        Icon: FaHome
    },
    {
        label: 'About',
        pathName: '/about',
        Icon: RiContactsBookLine
    },
    {
        label: 'Services',
        pathName: '/services',
        Icon: RiCustomerService2Line
    },
    {
        label: 'Songs',
        pathName: '/songs',
        Icon: FaMusic
    },
    {
        label: 'Daily Verse',
        pathName: 'verse',
        Icon: BiBook
    },
    {
        label: 'Bible',
        pathName: 'bible',
        Icon: FaBible
    },
    {
        label: 'Contact Us',
        pathName: 'contact',
        Icon: FaRegAddressCard
    }
]