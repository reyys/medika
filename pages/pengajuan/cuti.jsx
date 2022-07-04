import React from "react";

function Cuti() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-5 p-5">
        <img src="/images/back.svg" alt="" />
        <div>
          <div>Formulir Pengajuan</div>
          <div>Pengajuan Cuti</div>
        </div>
      </div>
      <div className="bg-light-blue p-5">
        <div>
          <div>
            <div>Jenis Cuti</div>
            <div className="relative border-light-gray mt-5 border-[1px] drop-shadow-lg rounded-md">
              <select placeholder="Pilih jenis cuti" className="outline-none w-full p-5" style={{ background: "transparent" }}>
                <option>Cuti 1</option>
                <option>Cuti 2</option>
                <option>Cuti 3</option>
              </select>
              <img className="absolute right-[3%] top-[50%] translate-y-[-50%]" src="/images/dropdown.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cuti;
