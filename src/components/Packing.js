import { useState } from "react";
import Item from "./Items";

export default function PackingList({
  daftarBarang,
  onHapusBarang1,
  // onHapusBarang2,
  onToggleBarang,
  deleteSemua,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedBarang;

  if (sortBy === "input") sortedBarang = daftarBarang;

  if (sortBy === "description")
    sortedBarang = daftarBarang
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedBarang = daftarBarang
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedBarang.map((barang) => (
          <Item
            barang={barang}
            key={barang.id}
            onHapusBarang1={onHapusBarang1}
            // onHapusBarang2={onHapusBarang2}
            onToggleBarang={onToggleBarang}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="packed">Sort by packed status</option>
          <option value="description">Sort by description</option>
        </select>
        <button onClick={deleteSemua}>Clear List</button>
      </div>
    </div>
  );
}
