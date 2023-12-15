import React from "react";

const Error404 : React.FC = ()=>
{
    return (
        <div className="min-h-[100vh] flex flex-col justify-evenly items-center">
            <div>
                <h1 className="text-4xl text-theme font-extrabold">Oops!</h1>
                <h1 className="text-12xl text-theme font-extrabold">404</h1>
            </div>
            <h1 className="text-4xl text-theme ">Page Not Found</h1>
            <a href={"/home"} className="px-6 p-4 font-bold bg-theme text-xl rounded-md hover:translate-y-[-5px] hover:tracking-widest transition-all duration-250">Home</a>
        </div>
    )
}

export default Error404;