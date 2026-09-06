export default function Stats({ daftarBarang }) {
  const hitungBarang = daftarBarang.length;
  const hitungPacked = daftarBarang.filter((barang) => barang.packed).length;
  const persentase =
    hitungBarang === 0 ? 0 : Math.round((hitungPacked / hitungBarang) * 100);

  if (!daftarBarang.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list!</em>
      </footer>
    );
  }

  return (
    <footer className="stats">
      <em>
        {persentase === 100
          ? "You got everything! Ready to go ✈️"
          : `you have ${hitungBarang} items in your list, and you already packed ${hitungPacked} of them (${persentase} %)`}
      </em>
    </footer>
  );
}
