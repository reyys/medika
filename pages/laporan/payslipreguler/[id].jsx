import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function Id() {
  const router = useRouter();
  const [height, setHeight] = React.useState(false);
  console.log(router.query);
  return (
    <div className="pb-24">
      <div className="p-5 flex w-full justify-between items-center bg-gray">
        <div className="flex items-center gap-5">
          <Image width={25} height={25} onClick={() => router.back()} className="cursor-pointer" src="/images/back.svg" alt="" />
          <div>
            <div className="text-dark-blue font-bold">Payslip Reguler</div>
            <div className="text-[#808080]">Lorem Ipsum Dolor</div>
          </div>
        </div>
        <div>
          <Image width={25} height={25} src="/images/question.svg" alt="" />
        </div>
      </div>
      <div className="p-5">
        <div className="text-center">
          <div className="text-[1.25rem] font-bold">PT. KRAKATAU MEDIKA</div>
          <div>SLIP GAJI {`(${router.query.id} 2022)`}</div>
        </div>
        <div className="mt-5 p-5 bg-gray">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between w-full">
              <div>Nama</div>
              <div>Veronica Yulian, Amd.Kep</div>
            </div>
            <div className="flex justify-between w-full">
              <div>Jabatan</div>
              <div>Staff Nurse Radiodiagnostic</div>
            </div>
            <div className="flex justify-between w-full">
              <div>NIK</div>
              <div>1000221</div>
            </div>
            <div className="flex justify-between w-full">
              <div>TMB</div>
              <div>01 - 01 - 2005</div>
            </div>
            <div className="flex justify-between w-full">
              <div>St. Karyawan</div>
              <div>Karywan Organik</div>
            </div>
            <div className="flex justify-between w-full">
              <div>St. Kel</div>
              <div>K/2</div>
            </div>
            <div className="flex justify-between w-full">
              <div>Dep/CCC</div>
              <div>/9420</div>
            </div>
          </div>
        </div>
        <div className="mt-2 bg-gray rounded-md p-5">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between w-full">
              <div>Klasifikasi Golongan</div>
              <div>C</div>
            </div>
            <div className="flex justify-between w-full">
              <div>Grade</div>
              <div>9</div>
            </div>
          </div>
        </div>
        <div className="mt-2 bg-gray rounded-md p-5">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between w-full">
              <div>A. Gaji Dibayar</div>
              <div>Rp 5.168.396</div>
            </div>
          </div>
        </div>
        <div className="mt-2 bg-gray rounded-md p-5">
          <div onClick={() => setHeight(!height)} className="cursor-pointer flex items-center justify-between w-full">
            <div>B. Tunjangan</div>
            <div className="flex gap-5 items-center">
              <div>Rp 3.983.663</div>
              <Image width={25} height={25} src="/images/dropdown.svg" alt="" />
            </div>
          </div>
          <div className="" id={`${height ? "grow-height" : "hide-height"}`}>
            <div className="my-4 w-full h-[1px] bg-dark-blue"></div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <div>Medical Married</div>
                <div>Rp 830.000</div>
              </div>
              <div className="flex justify-between">
                <div>Profesi Perawat Klinik</div>
                <div>Rp 3.983.663</div>
              </div>
              <div className="flex justify-between">
                <div>Perumahan</div>
                <div>Rp 3.983.663</div>
              </div>
              <div className="flex justify-between">
                <div>Transport</div>
                <div>Rp 3.983.663</div>
              </div>
              <div className="flex justify-between">
                <div>Insentif</div>
                <div>Rp 3.983.663</div>
              </div>
              <div className="flex justify-between">
                <div>Lembur Otomatis</div>
                <div>Rp 3.983.663</div>
              </div>
              <div className="flex justify-between">
                <div>UPMK</div>
                <div>Rp 3.983.663</div>
              </div>
              <div className="flex justify-between">
                <div>Insentif Premium</div>
                <div>Rp 3.983.663</div>
              </div>
            </div>
            <div className="my-4 w-full h-[1px] bg-dark-blue"></div>
            <div className="w-full font-semibold flex justify-between items-center">
              <div>Total Tunjangan</div>
              <div>Rp 3.983.663</div>
            </div>
          </div>
        </div>
        {/* Potongan  */}
        <div className="mt-2 p-5 bg-gray">
          <div className="w-full flex justify-between">
            <div>C. Potongan</div>
            <div className="flex items-center gap-5">
              <div>Rp 3.983.663</div>
              <Image width={25} height={25} src="/images/dropdown.svg" alt="" />
            </div>
          </div>
        </div>
        {/* Iuran  */}
        <div className="mt-2 p-5 bg-gray">
          <div className="w-full flex justify-between">
            <div>D. Iuran</div>
            <div className="flex items-center gap-5">
              <div>Rp 3.983.663</div>
              <Image width={25} height={25} src="/images/dropdown.svg" alt="" />
            </div>
          </div>
        </div>
        {/* Natura  */}
        <div className="mt-2 p-5 bg-gray">
          <div className="w-full flex justify-between">
            <div>E. Natura</div>
            <div className="flex items-center gap-5">
              <div>Rp 3.983.663</div>
              <Image width={25} height={25} src="/images/dropdown.svg" alt="" />
            </div>
          </div>
        </div>
        {/* Diterima  */}
        <div className="mt-2 p-5 bg-gray">
          <div className="w-full flex justify-between">
            <div>F. Diterima</div>
            <div className="flex items-center gap-5">
              <div>Rp 3.983.663</div>
              <Image width={25} height={25} src="/images/dropdown.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Id;
