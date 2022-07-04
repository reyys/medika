import React from "react";
import Link from "next/link";

function Index() {
  return (
    <div className="w-full">
      <div className="p-5">
        <div className="font-bold">Pengajuan</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
      <div className="p-5 bg-light-blue">
        <div className="flex w-full justify-between">
          <div className="font-bold text-dark-blue">Formulir Pengajuan</div>
          <img className="cursor-pointer" src="/images/question.svg" alt="" />
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <input style={{ background: "transparent" }} className="p-5 border-[1px] border-semi-gray drop-shadow-lg" placeholder="Formulir Izin" />
          <input className="p-5 border-[1px] border-semi-gray drop-shadow-lg" placeholder="Formulir Cuti" />
          <input className="p-5 border-[1px] border-semi-gray drop-shadow-lg" placeholder="Formulir Lembur" />
          <input className="p-5 border-[1px] border-semi-gray drop-shadow-lg" placeholder="Formulir Tukar Dinas" />
        </div>
      </div>
      <div className="mt-2 p-5 bg-light-blue pb-24">
        <div className="font-bold text-dark-blue">Riwayat Pengajuan</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className="py-5 mt-5 border-b-[1px] border-light-gray w-full">Izin</div>
        <Link href="/pengajuan/cuti">
          <div className="cursor-pointer py-5 border-b-[1px] border-light-gray w-full">Cuti</div>
        </Link>
        <div className="py-5 border-b-[1px] border-light-gray w-full">Lembur</div>
      </div>
    </div>
  );
}

export default Index;
