let aktivitetet = [
  { emri: "Ligjerate", lokacioni: "Salla 1", pjesemarres: 25 },
  { emri: "Workshop", lokacioni: "Salla 2", pjesemarres: 15 },
  { emri: "Konference", lokacioni: "Salla 3", pjesemarres: 40 },
  { emri: "Trajnim", lokacioni: "Salla 4", pjesemarres: 18 },
];

console.log("Numri i aktiviteteve: " + aktivitetet.length);

console.log(aktivitetet[0].emri);
console.log(aktivitetet[1].emri);

aktivitetet.push({
  emri: "Seminar",
  lokacioni: "Salla 5",
  pjesemarres: 30,
});

for (let i = 0; i < aktivitetet.length; i++) {
  console.log(aktivitetet[i].emri);
  console.log(aktivitetet[i].lokacioni);
}

let emrat = [];

for (let i = 0; i < aktivitetet.length; i++) {
  emrat.push(aktivitetet[i].emri);
}

console.log(emrat.includes("Workshop"));

let emratAktiviteteve = aktivitetet.map(function (a) {
  return a.emri;
});

console.log(emratAktiviteteve);

let mbi20 = aktivitetet.filter(function (a) {
  return a.pjesemarres > 20;
});

console.log(mbi20);

let gjetur = aktivitetet.find(function (a) {
  return a.emri == "Konference";
});

console.log(gjetur);
