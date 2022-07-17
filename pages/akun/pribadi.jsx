import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

function Pribadi({ oncam, setOncam, hide, setHide }) {
  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("token")) : "";
  const router = useRouter();
  const [profileData, setProfileData] = React.useState("");

  const videoRef = React.useRef(null);
  const photoRef = React.useRef(null);

  React.useEffect(() => {
    const getProfileData = async () => {
      if (token !== "") {
        const res = await axios.get("http://api.waktukerja.com/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileData(res.data.data);
      }
    };
    getProfileData();
  }, [token]);

  const getUserCamera = async () => {
    await navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getUserCamera();
  }, [videoRef]);

  const takePicture = () => {
    let photo = photoRef.current;
    let video = videoRef.current;
    photo.width = 120;
    photo.height = 150;
    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, photo.width, photo.height);
    setOncam(false);
    setHide(true);
  };

  const editHandler = () => {
    setOncam(true);
  };

  return (
    <div className="relative">
      <div className={`${oncam ? "flex" : "hidden"} absolute z-50 left-0 top-0 right-0 bottom-0 w-full h-full`} style={{ background: "rgba(0,0,0,0.3)" }}></div>

      <div className={`${oncam ? "flex flex-col" : "hidden"} absolute z-[100] h-full w-full flex flex-col items-center justify-center p-12`}>
        <video className="" ref={videoRef}></video>
        <button onClick={() => takePicture()} className="w-full bg-dark-blue text-white p-5 rounded-md mt-4">
          Ganti
        </button>
      </div>
      <div className="p-5 bg-gray">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-5">
            <img onClick={() => router.back()} className="cursor-pointer" src="/images/back.svg" alt="" />
            <div>
              <div className="text-[1.25rem] font-bold">Profil Karyawan</div>
              <div>Pribadi</div>
            </div>
          </div>
          <Link href="/akun/edit">
            <img className="cursor-pointer" src="/images/edit.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className="p-5">
        <div className="flex gap-5 items-center">
          <div className="relative">
            <canvas className={`${hide ? "flex" : "hidden"} rounded-md`} ref={photoRef}></canvas>
            {!hide && <img className="w-[10rem]" src={"/images/photo.png"} alt="" />}
            <svg
              onClick={() => editHandler()}
              className="cursor-pointer absolute right-[2%] bottom-[2%] text-[2rem]"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585l1.594-1.58zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006v-1.589z"
              />
              <path fill="white" d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" />
            </svg>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div>
              <div>NIK</div>
              <div className="w-full bg-gray p-3 rounded-md">{profileData.id_nomor}</div>
            </div>
            <div>
              <div>TMB</div>
              <div className="w-full bg-gray p-3 rounded-md">{profileData.tmb}</div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div>Nama</div>
          <div className="mt-3 p-5 bg-gray w-full rounded-md">{profileData.nama}</div>
        </div>
        <div className="mt-3">
          <div>Tanggal Lahir</div>
          <div className="mt-3 p-5 bg-gray w-full rounded-md">{profileData.talahir}</div>
        </div>
        <div className="mt-3">
          <div>No. Telepon</div>
          <div className="mt-3 p-5 bg-gray w-full rounded-md">{profileData.nomor_telepon}</div>
        </div>
        <div className="mt-3">
          <div>Email</div>
          <div className="mt-3 p-5 bg-gray w-full rounded-md">{profileData.email}</div>
        </div>
        <div className="mt-3">
          <div>NPWP</div>
          <div className="mt-3 p-5 bg-gray w-full rounded-md">1.1.1.1.1.1.1.1</div>
        </div>
        {/* <div className="mt-3">
          <div>PTKP</div>
          <div className="mt-3 p-5 bg-gray w-full rounded-md">K.2</div>
        </div>
        <div className="mt-3">
          <div>Jamsostek</div>
          <div className="mt-3 p-5 bg-gray w-full rounded-md">00K12345678</div>
        </div> */}
        <div className="mt-3 pb-24">
          <div>Jabatan</div>
          <div className="mt-3 p-5 bg-gray w-full rounded-md">{profileData.jabatan}</div>
        </div>
      </div>
    </div>
  );
}

export default Pribadi;
