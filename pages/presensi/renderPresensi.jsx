import React from "react";

function RenderPresensi({ bg }) {
  return (
    <tr className="border-b-[1px] border-gray">
      <td className="py-3">Senin 20 Februari 2022</td>
      <td>
        <div className={`${bg === "red" ? "bg-semi-red" : "bg-green"} w-[1rem] h-[1rem] rounded-full`}></div>
      </td>
      <td>08:00:00</td>
      <td>17:00:00</td>
    </tr>
  );
}

export default RenderPresensi;
