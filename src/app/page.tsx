'use client'
import { useState } from "react"
import Link from "next/link";
// import Image from 'next/image'
import { CSSProperties, Suspense } from "react";
import { ClipLoader, RiseLoader } from "react-spinners";
import ClipLoading from "./loading";
import RiseLoading from "./home/loading";


export default function Home() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const page = "Wow";
  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'green',
  }
  return (
    <>
    <h1>This is App page</h1>

    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus sunt esse magni sed, consequatur mollitia et possimus optio deleniti! Natus provident aspernatur vitae, perspiciatis dignissimos est possimus id consequuntur vel, quia labore. Est iste temporibus reprehenderit nesciunt eveniet quidem pariatur corrupti cumque architecto cupiditate aperiam molestias adipisci dolor sit asperiores inventore, quos natus error excepturi, modi sapiente exercitationem magni eos delectus. Similique tenetur rerum facere quaerat quia nobis sunt incidunt eius mollitia quas officiis, et quo commodi omnis placeat eos adipisci fugiat minima delectus nisi architecto quasi! Molestias sit minus tenetur accusamus in mollitia ea molestiae soluta consequatur rerum.
    </div>
      
      <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <button  
      onClick={()=> setLoading(!loading)}
      className="w-auto p-2 m-2 text-white font-sans border rounded-md bg-blue-600"
      >
        Loading
      </button>

        <ClipLoader
          color={'cyan'}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

    </div>

  

      <Suspense fallback={<ClipLoading />}>
        <Link href={'/home'}>Home </Link>
      </Suspense>
    
    </>
    
    )
}
