export default function Item({ barang, onHapusBarang1, onToggleBarang }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={barang.packed}
        onChange={() => onToggleBarang(barang.id)}
      />
      <span style={barang.packed ? { textDecoration: "line-through" } : {}}>
        {barang.quantity}
        {barang.description}
      </span>
      <button onClick={() => onHapusBarang1(barang.id)}>X</button>
      {/* <button onClick={() => onHapusBarang2(barang.description)}>XX</button> */}
    </li>
  );
}
