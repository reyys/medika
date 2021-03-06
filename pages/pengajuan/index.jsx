import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

function Index() {
  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("token")) : "";
  const router = useRouter();
  const [height, setHeight] = React.useState({});
  const [lemburData, setLemburData] = React.useState({});
  const [cutiData, setCutiData] = React.useState({});
  const [izinData, setIzinData] = React.useState({});

  React.useEffect(() => {
    const getDataLembur = async () => {
      if (token !== "") {
        const res = await axios.get("http://api.waktukerja.com/api/lembur/laporan", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLemburData(res.data.data);
      }
    };
    const getDataCuti = async () => {
      if (token !== "") {
        const res = await axios.get("http://api.waktukerja.com/api/cuti/laporan", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCutiData(res.data.data);
      }
    };
    const getDataIzin = async () => {
      if (token !== "") {
        const res = await axios.get("http://api.waktukerja.com/api/ijin/laporan", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIzinData(res.data.data);
      }
    };
    getDataIzin();
    getDataCuti();
    getDataLembur();
  }, [token]);

  const clickHandler = (e) => {
    console.log(e.target.id);
    setHeight((prevState) => {
      return {
        ...prevState,
        [e.target.id]: !prevState[e.target.id],
      };
    });
  };
  return (
    <div className="w-full pb-24">
      <div className="p-5">
        <div className="font-bold text-[1.25rem]">Pengajuan</div>
        <div>Silahkan gunakan formulir berikut untuk mengajukan fasilitas waktu kerja anda</div>
      </div>
      <div className="p-5 bg-gray">
        <div className="flex w-full justify-between">
          <div className="font-bold text-dark-blue text-[1.1rem]">Pengajuan Waktu Kerja</div>
          <Image width={20} height={20} className="cursor-pointer" src="/images/question.svg" alt="" />
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <Link href="/pengajuan/izin">
            <div style={{ background: "transparent" }} className="cursor-pointer p-5 border-[1px] border-[#4D81AF] rounded-md drop-shadow-lg font-semibold">
              Formulir Pengajuan Izin
            </div>
          </Link>
          <Link href="/pengajuan/cuti">
            <div className="cursor-pointer p-5 border-[1px] border-[#4D81AF] rounded-md drop-shadow-lg font-semibold">Formulir Pengajuan Cuti</div>
          </Link>
          <Link href="/pengajuan/lembur">
            <div className="cursor-pointer p-5 border-[1px] border-[#4D81AF] rounded-md drop-shadow-lg font-semibold">Formulir Pengajuan Lembur</div>
          </Link>
          <Link href="/pengajuan/tukardinas">
            <div className="cursor-pointer p-5 border-[1px] border-[#4D81AF] rounded-md drop-shadow-lg font-semibold">Formulir Pengajuan Tukar Dinas</div>
          </Link>
        </div>
      </div>
      <div className="mt-2 p-5 bg-gray pb-24">
        <div className="font-bold text-dark-blue text-[1.1rem]">Riwayat Pengajuan</div>
        <div>Berikut ini adalah beberapa daftar pengajuan fasilitas waktu kerja anda</div>
        <div onClick={(e) => clickHandler(e)} id="izin" className="cursor-pointer font-semibold border-b-[1px] py-5 border-light-gray w-full relative z-50 mt-5 rounded-md">
          Data Riwayat Izin
          <div className="absolute right-[3%] top-[50%] translate-y-[-50%]">
            <Image width={25} height={25} src="/images/dropdown.svg" alt="" />
          </div>
        </div>
        <div id={`${height.izin ? "grow-height" : "hide-height"}`}>
          {izinData.length > 0 &&
            izinData.map((x) => {
              return (
                <>
                  <div key={x.id} className="flex flex-col gap-5 mt-5 border-b-[1px] border-light-gray py-5">
                    <div className="flex justify-between items-center">
                      <div>Tanggal</div>
                      <div>{x.permit_date}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>Keterangan</div>
                      <div>{x.keterangan}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>Status</div>
                      <div>{x.approve_status}</div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div onClick={(e) => clickHandler(e)} id="cuti" className="cursor-pointer font-semibold border-b-[1px] py-5 border-light-gray w-full relative mt-5 rounded-md">
          Data Riwayat Cuti
          <div className="absolute right-[3%] top-[50%] translate-y-[-50%]">
            <Image width={25} height={25} src="/images/dropdown.svg" alt="" />
          </div>
        </div>
        <div id={`${height.cuti ? "grow-height" : "hide-height"}`}>
          {cutiData.length > 0 &&
            cutiData.map((x) => {
              return (
                <>
                  <div key={x.id} className="flex flex-col gap-5 mt-5 border-b-[1px] border-light-gray py-5">
                    <div className="flex justify-between items-center">
                      <div>Tanggal</div>
                      <div>
                        {x.start_date} to {x.end_date}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>Keterangan</div>
                      <div>{x.keterangan}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>Status</div>
                      <div>{x.approve_status}</div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div onClick={(e) => clickHandler(e)} id="lembur" className="cursor-pointer font-semibold border-b-[1px] py-5 border-light-gray w-full relative mt-5 rounded-md">
          Data Riwayat Lembur
          <div className="absolute right-[3%] top-[50%] translate-y-[-50%]">
            <Image width={25} height={25} src="/images/dropdown.svg" alt="" />
          </div>
        </div>
        <div id={`${height.lembur ? "grow-height" : "hide-height"}`}>
          {lemburData.length > 0 &&
            lemburData.map((x) => {
              return (
                <>
                  <div key={x.id} className="flex flex-col gap-5 mt-5 border-b-[1px] border-light-gray py-5">
                    <div className="flex justify-between items-center">
                      <div>Tanggal</div>
                      <div>{x.overtime_date}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>Waktu</div>
                      <div>
                        {x.start_time}-{x.end_time}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>Tugas</div>
                      <div>{x.tugas}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>Keterangan</div>
                      <div>{x.keterangan}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>Status</div>
                      <div>{x.approve_status}</div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div onClick={(e) => clickHandler(e)} id="tukardinas" className="cursor-pointer font-semibold border-b-[1px] py-5 border-light-gray w-full relative mt-5 rounded-md">
          Data Riwayat Tukar Dinas
          <div className="absolute right-[3%] top-[50%] translate-y-[-50%]">
            <Image width={25} height={25} src="/images/dropdown.svg" alt="" />
          </div>
        </div>
        <div id={`${height.tukardinas ? "grow-height" : "hide-height"}`}>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex justify-between items-center">
              <div>Tanggal</div>
              <div>2022-04-21</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Waktu</div>
              <div>20:30 - 21:45</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Tugas</div>
              <div>Mengcopy berkas lama</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Keterangan</div>
              <div>Isi Keterangan</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Status</div>
              <div>Disetujui</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
