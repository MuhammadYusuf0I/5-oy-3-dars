class Musiqa {
  constructor(name, author, type, YearOfManufacture, SungByKim, time, id) {
    this.name = name;
    this.author = author;
    this.type = type;
    this.YearOfManufacture = YearOfManufacture;
    this.SungByKim = SungByKim;
    this.time = time;
    this.id = id;
  }
}

const musics = [
  new Musiqa(
    "Yor-yor",
    "Dildora Niyozova",
    "Pop",
    2018,
    ["Nilufar Usmonova", "Sevara Nazarhonova"],
    200,
    1
  ),
  new Musiqa(
    "Maktabimda",
    "Hamdam Sobirov",
    "Jazz",
    2023,
    ["Doston", "Jaloliddin Ahmadaliyev"],
    180,
    2
  ),
];

const deletionNames = (musics) => {
  const nemaSet = new Set();
  const MusicNew = musics.filter((music) => {
    if (nemaSet.has(music.nomi)) {
      return false;
    }
    nemaSet.add(music.nomi);
    return true;
  });
  return MusicNew;
};

const Musics = deletionNames(musics);
console.log(Musics);
