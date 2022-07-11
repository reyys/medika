import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Index() {
  const router = useRouter();
  return (
    <div className="w-full h-screen sm:h-auto">
      <div className="p-5">
        <div className="font-bold">Pengajuan</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
      <div className="p-5 bg-gray">
        <div className="flex w-full justify-between">
          <div className="font-bold text-dark-blue">Formulir Pengajuan</div>
          <img className="cursor-pointer" src="/images/question.svg" alt="" />
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <Link href="/pengajuan/izin">
            <div style={{ background: "transparent" }} className="cursor-pointer p-5 border-[1px] border-[#4D81AF] rounded-md drop-shadow-lg">
              Formulir Izin
            </div>
          </Link>
          <Link href="/pengajuan/cuti">
            <div className="cursor-pointer p-5 border-[1px] border-[#4D81AF] rounded-md drop-shadow-lg">Formulir Cuti</div>
          </Link>
          <Link href="/pengajuan/lembur">
            <div className="cursor-pointer p-5 border-[1px] border-[#4D81AF] rounded-md drop-shadow-lg">Formulir Lembur</div>
          </Link>
          <Link href="/pengajuan/tukardinas">
            <div className="cursor-pointer p-5 border-[1px] border-[#4D81AF] rounded-md drop-shadow-lg">Formulir Tukar Dinas</div>
          </Link>
        </div>
      </div>
      <div className="mt-2 p-5 bg-gray pb-24">
        <div className="font-bold text-dark-blue">Riwayat Pengajuan</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className="border-b-[1px] py-5 border-light-gray w-full relative mt-5 rounded-md">
          <select placeholder="Pilih jenis cuti" className="outline-none w-full" style={{ background: "transparent" }}>
            <option>Izin</option>
            <option>Izin 2</option>
            <option>Izin 3</option>
          </select>
          <img className="absolute right-[3%] top-[50%] translate-y-[-50%]" src="/images/dropdown.svg" alt="" />
        </div>
        <div className="border-b-[1px] py-5 border-light-gray w-full relative mt-5 rounded-md">
          <select placeholder="Pilih jenis cuti" className="outline-none w-full" style={{ background: "transparent" }}>
            <option>Cuti</option>
            <option>Cuti 2</option>
            <option>Cuti 3</option>
          </select>
          <img className="absolute right-[3%] top-[50%] translate-y-[-50%]" src="/images/dropdown.svg" alt="" />
        </div>
        <div className="border-b-[1px] py-5 border-light-gray w-full relative mt-5 rounded-md">
          <select placeholder="Pilih jenis cuti" className="outline-none w-full" style={{ background: "transparent" }}>
            <option>Lembur</option>
            <option>Lembur 2</option>
            <option>Lembur 3</option>
          </select>
          <img className="absolute right-[3%] top-[50%] translate-y-[-50%]" src="/images/dropdown.svg" alt="" />
        </div>
        <div className="border-b-[1px] py-5 border-light-gray w-full relative mt-5 rounded-md">
          <select placeholder="Pilih jenis cuti" className="outline-none w-full" style={{ background: "transparent" }}>
            <option>Tukar Dinas</option>
            <option>Tukar Dinas 2</option>
            <option>Tukar Dinas 3</option>
          </select>
          <img className="absolute right-[3%] top-[50%] translate-y-[-50%]" src="/images/dropdown.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Index;
