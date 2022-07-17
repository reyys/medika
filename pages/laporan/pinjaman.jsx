import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function Pinjaman() {
  const router = useRouter();
  return (
    <div className="h-screen">
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
      <div className="p-6">
        <div className="py-5 border-b-[1px] border-[#F2F2F2]">Pinjaman BJB</div>
        <div className="py-5 border-b-[1px] border-[#F2F2F2]">POT LIMIT WAKTU Kelebihan Bayar</div>
        <div className="py-5 border-b-[1px] border-[#F2F2F2]">Pinjaman BJB</div>
        <div className="py-5 border-b-[1px] border-[#F2F2F2]">Pinjaman BJB</div>
      </div>
    </div>
  );
}

export default Pinjaman;
