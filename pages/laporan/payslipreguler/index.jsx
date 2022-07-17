import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

function Payslipreguler() {
  const router = useRouter();
  return (
    <div>
      <div className="p-5 flex w-full justify-between items-center bg-gray">
        <div className="flex items-center gap-5">
          <Image width={25} height={25} onClick={() => router.back()} className="cursor-pointer" src="/images/back.svg" alt="" />
          <div>
            <div className="text-dark-blue font-bold">Pinjaman</div>
            <div className="text-[#00162A]">Lorem Ipsum Dolor</div>
          </div>
        </div>
        <div>
          <Image width={25} height={25} src="/images/question.svg" alt="" />
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
              <Image width={25} height={25} src="/images/dropdown.svg" alt="" />
            </div>
          </div>
          <div className="p-1 w-[4rem] flex items-center justify-center rounded-md bg-dark-blue">
            <Image width={25} height={25} src="/images/searchIcon.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col mt-4 pb-24">
          <Link href="/laporan/payslipreguler/januari">
            <div className="py-4 border-b-[1px] border-light-gray cursor-pointer">Januari - 2022</div>
          </Link>
          <div className="py-4 border-b-[1px] border-light-gray cursor-pointer">Februari - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray cursor-pointer">Maret - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray cursor-pointer">April - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray cursor-pointer">Mei - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray cursor-pointer">Juni - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray cursor-pointer">Juli - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray cursor-pointer">Agustus - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray cursor-pointer">September - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray cursor-pointer">Oktober - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray cursor-pointer">November - 2022</div>
          <div className="py-4 border-b-[1px] border-light-gray cursor-pointer">Desember - 2022</div>
        </div>
      </div>
    </div>
  );
}

export default Payslipreguler;
