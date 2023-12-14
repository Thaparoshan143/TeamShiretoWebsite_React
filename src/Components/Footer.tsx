import React, { useState } from 'react';
import { IoIosFlash, IoLogoFacebook, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { _QuickLinks, _SocialLinks, _AddressInfo } from '../assets/data/Links';
import { Link } from 'react-router-dom';

interface IFooterQuickLink
{
    item : string,
    url : string
};

interface IFooterSocialLink
{
    media : string,
    url : string
}

const Footer : React.FC = () =>
{
    return (
        <footer className="flex flex-col w-[100vw] justify-evenly items-center bg-[#333] text-white p-2">
            <SocialLinks />
            <hr className="w-[80%] bg-theme border-theme border-2 rounded-xl m-4" />
            <div className="flex flex-row w-[100vw] justify-evenly items-center p-6">
                <AddressInfo />
                {/* <FeatureOn /> */}
                <QuickLinks />
            </div>
            <Copyright />
        </footer>
    )
}

const SocialLinks : React.FC = () =>
{
    return (
        <div className="w-[100vw] flex flex-row justify-end pr-[5vw] items-center min-h-[4rem] bg-[#333]  text-white">
        <span className="mx-[5vw]">Follow us on : </span>
        {
            _SocialLinks.map(({media, url})=>
            {
                return <Social media={media} url={url} />
            })
        }
        </div>
    )
}

export const Social : React.FC<IFooterSocialLink> = ({media, url}) =>
{
    return (
		<Link to={url} target="_blank" className="mx-4 hover:scale-[125%] transition-all duration-200">{media==="Facebook"?<IoLogoFacebook className="text-3xl hover:text-[#1877F2]"/>:media==="Linkedin"?<IoLogoLinkedin className="text-3xl hover:text-[#0077b5]"/>:<IoLogoYoutube className="text-3xl hover:text-[#ff0000]"/>}</Link>
    )
}

const AddressInfo : React.FC = ()=>
{
	return (
		<div className="flex flex-col">
			<h2 className="capitalize text-2xl font-bold my-2">{_AddressInfo.title}</h2>
			<span className="">{_AddressInfo.college}</span>
			<span className="">{_AddressInfo.location}</span>
		</div>
	)
}

const QuickLinks : React.FC = () =>
{
    return (
        <div className="flex flex-col items-center text-left">
        {
            _QuickLinks.map(({item, url} : IFooterQuickLink)=>
                {
                    return <LinkItem item={item} url={url}/>
                })
        }
        </div>
    )
}

const LinkItem : React.FC<IFooterQuickLink> = ({item, url} : IFooterQuickLink) =>
{
    const [isHover, setIsHover] = useState<boolean>(false);

    function MouseState(isActive : boolean)
    {
        setIsHover(isActive);
    }

    return (
        <Link to={url} className="hover:text-theme p-2 block" onMouseEnter={()=>MouseState(true)} onMouseLeave={()=>MouseState(false)}><IoIosFlash className={"text-2xl inline-block mx-2 transition-all duration-200 " + (isHover?"rotate-90 text-theme" :"rotate-0 text-white")} />{item}</Link>
    )
}

const Copyright : React.FC = () =>
{
	return (
		<span className="p-4 w-[100%] text-center font-extralight">Copyright © 2023 <span className="text-theme font-semibold">TEAM SHIRETO</span> All Rights Reserved</span>
	)
}

export default Footer;