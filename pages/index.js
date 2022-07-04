import Link from "next/link"
import React from "react"

export default function Home() {
  const [hidden, setHidden] = React.useState(false)
  return (
    <div className="flex flex-col gap-5 px-6 justify-center h-screen w-full items-center">
      <img className="mb-12" src="/images/logo.svg" alt="" />
      <div className="w-full">
        <div>NIK</div>
        <input className="w-full bg-light-blue p-3 px-5" type='' placeholder="Input NIK" />
      </div>
      <div className="w-full">
        <div>PIN</div>
        <div className="relative">
          <input className="w-full bg-light-blue p-3 px-5" type={hidden ? "password" : "text"} placeholder="Input PIN" />
          {
            hidden ?
              <svg onClick={() => setHidden(false)} className="absolute top-[50%] right-[5%] translate-y-[-50%]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="23" height="23" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="gray"><path d="M10.5 8a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0z" /><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7z" /></g></svg>
              :
              <img onClick={() => setHidden(true)} className="absolute top-[50%] right-[5%] translate-y-[-50%]" src="/images/hidden.svg" alt="" />
          }
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="w-fit cursor-pointer text-dark-blue">
          Lupa PIN ?
        </div>
      </div>
      <Link href="/presensi">
        <button className="bg-dark-blue text-[#ffffff] rounded-md w-full p-5 text-white">Login</button>
      </Link>
      <div className="text-center">
        <div className="text-semi-blue">This Application for employee self service HR Information System.</div>
        <Link className="text-dark-blue underline font-bold" href="/">Need Help ?</Link>
      </div>
    </div>
  )
}
