import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

function Edit() {
  const router = useRouter();
  const datePicker = React.useRef(null);
  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("token")) : "";
  const [profileData, setProfileData] = React.useState("");

  React.useEffect(() => {
    datePicker.current.max = "2017-12-31";
  }, []);

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

  const [state, setState] = React.useState({});
  React.useEffect(() => {
    setState({
      tanggalLahir: profileData.talahir,
      telepon: profileData.nomor_telepon,
      email: profileData.email,
      npwp: profileData.NPWP,
      jabatan: profileData.jabatan,
    });
  }, [profileData]);

  const changeHandler = (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      <div className="p-5 bg-gray">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-5">
            <img onClick={() => router.back()} className="cursor-pointer" src="/images/back.svg" alt="" />
            <div>
              <div className="text-[1.25rem] font-bold">Profil Karyawan</div>
              <div>Edit</div>
            </div>
          </div>
          <Link href="/akun/edit">
            <img className="cursor-pointer" src="/images/edit.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className="p-5">
        <div className="flex gap-5 items-center">
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
          <div className="mt-3 p-3 bg-gray w-full rounded-md">{profileData.nama}</div>
        </div>
        <div className="mt-3">
          <div>Tanggal Lahir</div>
          <input ref={datePicker} name="tanggalLahir" onChange={(e) => changeHandler(e)} value={state.tanggalLahir} type="date" className="mt-3 p-3 bg-gray w-full rounded-md" />
        </div>
        <div className="mt-3">
          <div>No. Telepon</div>
          <input name="telepon" onChange={(e) => changeHandler(e)} value={state.telepon} type="number" placeholder="Masukkan No Telepon Baru" className="mt-3 p-3 bg-gray w-full rounded-md" />
        </div>
        <div className="mt-3">
          <div>Email</div>
          <input name="email" onChange={(e) => changeHandler(e)} value={state.email} type="email" placeholder="Masukkan Email Baru" className="mt-3 p-3 bg-gray w-full rounded-md" />
        </div>
        <div className="mt-3">
          <div>NPWP</div>
          <input name="npwp" onChange={(e) => changeHandler(e)} value={state.npwp} placeholder="12.123.123.1.123.000" className="mt-3 p-3 bg-gray w-full rounded-md" />
        </div>
        {/* <div className="mt-3">
          <div>PTKP</div>
          <input value={} placeholder="K.2" className="mt-3 p-3 bg-gray w-full rounded-md" />
        </div>
        <div className="mt-3">
          <div>Jamsostek</div>
          <input value={} placeholder="00K12345678" className="mt-3 p-3 bg-gray w-full rounded-md" />
        </div> */}
        <div className="mt-3">
          <div>Jabatan</div>
          <input name="jabatan" onChange={(e) => changeHandler(e)} value={state.jabatan} placeholder="Staff Nurse Radiodiagnostic Pratama" className="mt-3 p-3 bg-gray w-full rounded-md" />
        </div>
        <div className="w-full pb-6">
          <button className="w-full text-white bg-dark-blue py-5 rounded-md mt-12">Ubah</button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
