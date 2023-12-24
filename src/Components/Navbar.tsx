import React, { useState, useEffect } from 'react';
import { _NavItems } from '../assets/data/Links';
import { Link, NavLink } from 'react-router-dom';

interface INavItem
{
    item : string,
    url : string
};

const Navbar : React.FC = () =>
{
    const [scrollActive, setScrollActive] = useState<boolean>(false);

    useEffect(()=>
    {
        const handleScroll = (event : any) => {
            if(window.scrollY < 10)
            {
                setScrollActive(false);
            }
            else if(window.scrollY > 10)
            {
                setScrollActive(true);
            }
            // console.log(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const logoPath = require("../assets/images/shiretologo.png");

    return (
        <nav className={"flex flex-row justify-between items-center max-w-[100vw] w-[100vw] fixed z-10 backdrop-blur-xl " + (scrollActive?"bg-[#3337]":"bg-[#000]")}>
			<div className="w-[10rem] mx-4"><NavLink to="/Home"><img alt="logo" src={logoPath} /></NavLink></div>
            <div className="w-[60vw] flex flex-row justify-evenly items-center">
                {
                    _NavItems.map(({item, url})=>
                    {
                        return <NavItem item={item} url={url} />
                    })
                }
            </div>
        </nav>
    )
}

const NavItem : React.FC<INavItem> = ({item , url} : INavItem)=>
{
    return (
        <Link to={url} className="p-4 mx-2 hover:text-theme font-medium hover:scale-[105%] transition-all duration-200 decoration-2 hover:underline hover:underline-offset-8">{item}</Link>
    )
}

export default Navbar;