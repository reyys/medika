import React from "react";
import Link from "next/link";

function Index() {
  return (
    <div className="bg-white h-screen">
      <div className="p-5">
        <div className="font-bold text-[1.25rem]">Laporan</div>
        <div>Lorem ipsum dolor sit amet, consectur adipiscing elit.</div>
      </div>
      <div className="p-5 bg-light-blue h-full pb-24">
        <div className="flex flex-col gap-3">
          <Link href="/laporan/dpmk">
            <div className="cursor-pointer p-5 border-light-gray bg-white w-full rounded-md drop-shadow-lg">DPMK</div>
          </Link>
          <div className="cursor-pointer p-5 border-light-gray bg-white w-full rounded-md drop-shadow-lg">PPIP</div>
          <div className="cursor-pointer p-5 border-light-gray bg-white w-full rounded-md drop-shadow-lg">TKIP</div>
          <Link href="/laporan/pinjaman">
            <div className="cursor-pointer p-5 border-light-gray bg-white w-full rounded-md drop-shadow-lg">Pinjaman</div>
          </Link>
          <Link href="/laporan/payslipreguler">
            <div className="cursor-pointer p-5 border-light-gray bg-white w-full rounded-md drop-shadow-lg">Payslip Reguler</div>
          </Link>
          <Link href="/laporan/payslipnonreguler">
            <div className="cursor-pointer p-5 border-light-gray bg-white w-full rounded-md drop-shadow-lg">Payslip Non-Reguler</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
