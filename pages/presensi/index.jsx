import Link from "next/link";
import React from "react";
import RenderPresensi from "./renderPresensi";

function Index() {
  return (
    <div className="">
      <div className="w-full p-3 flex items-center justify-between px-5">
        <div className="flex gap-5">
          <img src="/images/profileImage.svg" alt="" />
          <div>
            <div className="font-bold text-darkest-blue text-[1.15rem]">VERONICA YULIAN</div>
            <div>Staff Nurse Radiognastic Pratama</div>
          </div>
        </div>
        <Link href="/notifikasi">
          <img className="cursor-pointer" src="/images/notif.svg" alt="" />
        </Link>
      </div>
      <div className="p-5 overflow-hidden bg-dark-blue text-white pb-24 relative">
        <div className="font-bold text-[1.15rem]">Selamat Pagi</div>
        <div className="text-gray">Silahkan Melakukan Presensi Masuk</div>
        <img className="absolute right-0 top-[-20%]" src="images/leaf.svg" alt="" />
      </div>
      <div className="p-5 w-[80%] bg-white rounded-md flex items-center justify-between mx-auto translate-y-[-50%] drop-shadow-lg">
        <div>
          <div className="text-darkest-blue font-bold text-[1.25rem]">Senin 20</div>
          <div className="text-darkest-blue font-bold text-[1.25rem]">Februari 2022</div>
          <div>7:30:12</div>
        </div>
        <button className="flex items-center p-3 gap-5 bg-dark-blue">
          <img src="/images/bellMasuk.svg" />
          <div className="text-[#ffffff]">Masuk</div>
        </button>
      </div>
      <div className="px-5 py-5 flex items-center justify-between bg-light-blue">
        <div>
          <div className="font-bold text-dark-blue text-[1.25rem]">Riwayat Presensi</div>
          <div>Cek Riwayat Kehadiranmu</div>
        </div>
        <div className="p-2 rounded-md bg-dark-blue">
          <img src="/images/searchIcon.svg" alt="" />
        </div>
      </div>

      <div className="p-6">
        <table className="w-full">
          <tr>
            <td>Tanggal</td>
            <td>Ket.</td>
            <td>Jam Masuk</td>
            <td>Jam Keluar</td>
          </tr>
          <tr>
            <td className="py-4 border-b-[1px] border-gray">Senin 20 Februari 2022</td>
            <td>
              <div className="w-[1rem] h-[1rem] bg-gray rounded-full"></div>
            </td>
            <td>08:00:00</td>
            <td>--:--:--</td>
          </tr>
          <RenderPresensi />
          <RenderPresensi />
          <RenderPresensi />
          <RenderPresensi />
        </table>
        <div className="w-full mt-3 text-semi-blue justify-between flex items-center">
          <div>{`<<`} Sebelumnya</div>
          <div>Setelahnya {`>>`} </div>
        </div>
      </div>

      <div className="p-5 pb-32">
        <div>Keterangan Warna</div>
        <div className="flex items-center gap-5 mt-6">
          <div className="flex items-center gap-2">
            <div className="bg-green w-[1rem] h-[1rem] rounded-full"></div>
            <div>Active</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gray w-[1rem] h-[1rem] rounded-full"></div>
            <div>Active</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-semi-red w-[1rem] h-[1rem] rounded-full"></div>
            <div>Active</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
