import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/Packing";
import Stats from "./components/Stats";

export default function App() {
  // daftarBarang = SEMUA barang
  const [daftarBarang, setDaftarBarang] = useState([]);

  // const hitungBarang = daftarBarang.length;

  function handleTambahBarang(barangBaru) {
    console.log(barangBaru);
    setDaftarBarang((daftarLama) => [...daftarLama, barangBaru]);
  }

  function handleHapusBarangID(idBarang) {
    console.log("delete", idBarang);
    setDaftarBarang((daftarLama) =>
      daftarLama.filter((barang) => barang.id !== idBarang),
    );
  }

  function handleHapusSemualist() {
    if (!daftarBarang.length) {
      alert("List memang kosong dek");
      return;
    }

    const konfirmasi = window.confirm("yakin dek?");
    if (konfirmasi) {
      setDaftarBarang([]);
    }
  }

  // function handleHapusBarangDesc(namaBarang) {
  //   console.log("delete", namaBarang);
  //   setDaftarBarang((daftarLama) =>
  //     daftarLama.filter((barang) => barang.description !== namaBarang),
  //   );
  // }

  function onToggleBarang(idBarang) {
    console.log(onToggleBarang);
    setDaftarBarang(
      daftarBarang.map((barang) =>
        barang.id === idBarang ? { ...barang, packed: !barang.packed } : barang,
      ),
    );
  }

  return (
    <div>
      <Logo />

      <Form onTambahBarang={handleTambahBarang} />

      <PackingList
        daftarBarang={daftarBarang}
        onHapusBarang1={handleHapusBarangID}
        // onHapusBarang2={handleHapusBarangDesc}
        onToggleBarang={onToggleBarang}
        deleteSemua={handleHapusSemualist}
      />

      <Stats daftarBarang={daftarBarang} />
    </div>
  );
}
