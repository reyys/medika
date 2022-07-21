import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"
import axios from 'axios'
import Image from "next/image"

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)
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
    setLoading(true)
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
          setLoading(false)
        } else {
          setToken(res.data.token)
          setData({ email: "", password: "" })
          setFile("")
          router.push('/presensi')
          setLoading(false)
        }


      } else {
        setError(true)
        setLoading(false)
      }
    } catch (error) {
      setError(true)
      setLoading(false)
    }

  }

  return (
    <div className="flex flex-col gap-5 px-6 justify-center h-screen w-full items-center">
      <Image width={200} height={200} className="mb-12" src="/images/logo.svg" alt="" />
      <div className={`${error ? "flex" : "hidden"} items-center gap-5 p-3 bg-light-red w-full border-semi-red border-[1px]`}>
        <Image alt="" width={30} height={30} src="/images/warning.svg" />
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
                <svg onClick={() => setHidden(true)} className="absolute top-[50%] right-[5%] translate-y-[-50%] text-[1.5rem]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="gray"><path d="m10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" /><path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6l-12-12l.708-.708l12 12l-.708.708z" /></g></svg>
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
        <button className="bg-dark-blue flex items-center justify-center text-[#ffffff] rounded-md w-full p-3 text-white">
          <svg className={`text-[1.5rem] mr-3 ${loading ? "block" : "hidden"}`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5" /><path fill="white" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate" /></path></svg>
          <span className="text-[1.15rem]">Login</span>
        </button>
        <div className="text-center">
          <div className="text-semi-blue">This Application for employee self service HR Information System.</div>
          <Link className="text-dark-blue underline font-bold" href="/">Need Help ?</Link>
        </div>
      </form>
    </div>
  )
}
