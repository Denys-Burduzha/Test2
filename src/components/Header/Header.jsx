

import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const headerItems = [
    { to: "/", title: "Home"},
    { 
        to: "/giphs",
        title: "Giphs (with open search)",
        state: { isSearchOpen: true },
    },
    {
        to: "/giphs",
        title: "Giphs (without open search)",
        state: { isSearchOpen: false },
    }
];

export const Header = () => {
    return (
        <nav className={s.nav}>
        <ul>
            {headerItems.map((headerItem) => (
            <li key={headerItem.title}>
                <NavLink 
                    className={({isActive}) => (isActive ? s.nav_active : null) }
                    state={headerItem.state}
                    to={headerItem.to}
                > 
                    {headerItem.title} 
                </NavLink>
            </li>
            ))}
        </ul>
    </nav>
    )
};