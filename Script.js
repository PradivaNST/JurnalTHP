// Simulasi data jurnal
const journals = [
  {
    title: "Pengaruh Suhu Pengeringan terhadap Kualitas Kopi",
    author: "Dr. Siti Aminah",
    year: 2023,
    link: "#"
  },
  {
    title: "Inovasi Teknologi Pascapanen pada Buah Tropis",
    author: "Dr. Budi Santoso",
    year: 2022,
    link: "#"
  },
  {
    title: "Karakteristik Pati dari Umbi Lokal",
    author: "Dr. Rina Wulandari",
    year: 2023,
    link: "#"
  }
];

const listContainer = document.getElementById("journal-list");

journals.forEach(journal => {
  const item = document.createElement("div");
  item.className = "journal-item";
  item.innerHTML = `
    <h3>${journal.title}</h3>
    <p><strong>Penulis:</strong> ${journal.author}</p>
    <p><strong>Tahun:</strong> ${journal.year}</p>
    <a href="${journal.link}" target="_blank">Lihat Jurnal</a>
  `;
  listContainer.appendChild(item);
});
