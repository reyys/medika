import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Payslipreguler() {
  const router = useRouter();
  return (
    <div>
      <div className="p-5 flex w-full justify-between items-center bg-gray">
        <div className="flex items-center gap-5">
          <img onClick={() => router.back()} className="cursor-pointer" src="/images/back.svg" alt="" />
          <div>
            <div className="text-dark-blue font-bold">Pinjaman</div>
            <div className="text-[#00162A]">Lorem Ipsum Dolor</div>
          </div>
        </div>
        <div>
          <img src="/images/question.svg" alt="" />
        </div>
      </div>
      <div className="p-5">
        <div>Pilih Tahun</div>
        <div className="flex gap-5 mt-6">
          <div className="w-full h-full relative rounded-md bg-[#F2F2F2]">
            <select style={{ background: "transparent" }} className="outline-none p-4 w-full">
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
            </select>
            <div className="absolute right-[3%] top-[50%] translate-y-[-50%]">
              <img src="/images/dropdown.svg" alt="" />
            </div>
          </div>
          <div className="p-1 w-[4rem] flex items-center justify-center rounded-md bg-dark-blue">
            <img src="/images/searchIcon.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col mt-4 pb-24">
          <Link href="/laporan/payslipreguler/januari">
            <div className="py-4 border-b-[1px] border-light-gray">Januari - 2022</div>
          </Link>
          <div className="py-4 border-b-[1px] border-light-gray">Februari - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray">Maret - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray">April - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray">Mei - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray">Juni - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray">Juli - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray">Agustus - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray">September - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray">Oktober - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray">November - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray">Desember - 2022</div>
        </div>
      </div>
    </div>
  );
}

export default Payslipreguler;
