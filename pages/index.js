import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"
import axios from 'axios'

export default function Home() {
  const router = useRouter()

  const [token, setToken] = React.useState("")

  React.useEffect(() => {
    window.localStorage.setItem('token', JSON.stringify(token))
  }, [token])


  const [hidden, setHidden] = React.useState(false)

  const [error, setError] = React.useState(false)
  const [file, setFile] = React.useState()

  const [data, setData] = React.useState(
    { email: "", password: "" }
  )

  const handleChange = (e) => {
    setData(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (data.email !== "" && data.password !== "") {
        const res = await axios({
          method: "post",
          url: "http://api.waktukerja.com/api/auth/login",
          data: {
            "company_code": "89EE21",
            "email": data.email,
            "password": data.password,
            "face_file": file
          },
          headers: { "Content-Type": "multipart/form-data" }
        })

        if (!res.data.token) {
          setError(true)
          return
        } else {
          setToken(res.data.token)
          setData({ email: "", password: "" })
          setFile("")
          router.push('/presensi')
        }


      } else {
        setError(true)
      }
    } catch (error) {
      setError(true)
    }

  }

  return (
    <div className="flex flex-col gap-5 px-6 justify-center h-screen w-full items-center">
      <img className="mb-12" src="/images/logo.svg" alt="" />
      <div className={`${error ? "flex" : "hidden"} items-center gap-5 p-3 bg-light-red w-full border-semi-red border-[1px]`}>
        <div><img src="/images/warning.svg" /></div>
        <div>Username or Password is invalid</div>
      </div>
      <form encType="multipart/form-data" method="POST" action="http://api.waktukerja.com/api" className="w-full flex flex-col gap-5" onSubmit={e => handleSubmit(e)}>
        <div className="w-full">
          <div>NIK</div>
          <input name="email" onChange={e => handleChange(e)} className="w-full bg-light-blue p-3 px-5" type='' placeholder="Input NIK" />
        </div>
        <div className="w-full">
          <div>PIN</div>
          <div className="relative">
            <input name="password" onChange={e => handleChange(e)} className="w-full bg-light-blue p-3 px-5" type={hidden ? "password" : "text"} placeholder="Input PIN" />
            {
              hidden ?
                <svg onClick={() => setHidden(false)} className="absolute top-[50%] right-[5%] translate-y-[-50%]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="23" height="23" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="gray"><path d="M10.5 8a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0z" /><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7z" /></g></svg>
                :
                <img onClick={() => setHidden(true)} className="absolute top-[50%] right-[5%] translate-y-[-50%]" src="/images/hidden.svg" alt="" />
            }
          </div>
        </div>
        <div>
          <input onChange={(e) => setFile(e.target.files[0])} type="file"></input>
        </div>
        <div className="w-full flex justify-end">
          <div className="w-fit cursor-pointer text-dark-blue">
            Lupa PIN ?
          </div>
        </div>
        <button className="bg-dark-blue text-[#ffffff] rounded-md w-full p-5 text-white">Login</button>
        <div className="text-center">
          <div className="text-semi-blue">This Application for employee self service HR Information System.</div>
          <Link className="text-dark-blue underline font-bold" href="/">Need Help ?</Link>
        </div>
      </form>
    </div>
  )
}
