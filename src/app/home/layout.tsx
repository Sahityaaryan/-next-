import React from "react";



export default function HomeLayout({children,}:{children: React.ReactNode})
{
    return (
        <>
            <div className="w-3/4 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            {children}
        </div>
        </>
    )
}

