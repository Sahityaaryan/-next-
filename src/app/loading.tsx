'use client'
import { useState, CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

export default function ClipLoading(){

    const override: CSSProperties = {
            display: 'block',
            margin:'0 auto',
            borderColor:'green',
    }

    return (
        <>
            <ClipLoader
                color={'cyan'}
                loading={true}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </>
    );
};