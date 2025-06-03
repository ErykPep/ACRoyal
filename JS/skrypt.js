const obroncy = [
  "Kacper Sobania",
  "Tomasz Matychniak",
  "Paweł Siurnik",
  "Jakub Matysiak",
  "Michał Leszczyński",
  "Krzysztof Kraszewski",
  "Jarek Wójcik",
  "Janek Kuśta",
  "Julian Kacprzak"
];

const pomocnicy = [
  "Antoni Wąsik",
  "Paweł Kosiec",
  "Oskar Kwiecień",
  "Maciek Nachulewicz",
  "Kornel Środa",
  "Janek Markowski",
  "Eryk Pępczyński"
];

const napastnicy = [
  "Mikołaj Łukomski",
  "Filip Popis"
];

function generujSklad() {
  const ileObroncow = Number(document.getElementById("obroncy").value);
  const ilePomocnikow = Number(document.getElementById("pomocnicy").value);
  const ileNapastnikow = Number(document.getElementById("napastnicy").value);

  // losuje pilkarzy
  function losujUnikalnych(zawodnicy, ile) {
    const wynik = [];
    const kopia = [...zawodnicy];
    while (wynik.length < ile && kopia.length > 0) {
      const los = Math.floor(Math.random() * kopia.length);
      wynik.push(kopia[los]);
      kopia.splice(los, 1);
    }
    return wynik;
  }

  const wybraniObroncy = losujUnikalnych(obroncy, ileObroncow);
  const wybraniPomocnicy = losujUnikalnych(pomocnicy, ilePomocnikow);
  const wybraniNapastnicy = losujUnikalnych(napastnicy, ileNapastnikow);

// Generowanie HTML wyniku
let wynikHTML = "<h3>Obrońcy:</h3><ul>";
for (let i = 0; i < wybraniObroncy.length; i++) {
  wynikHTML += `<li>${wybraniObroncy[i]}</li>`;
}
wynikHTML += "</ul>";

wynikHTML += "<h3>Pomocnicy:</h3><ul>";
for (let i = 0; i < wybraniPomocnicy.length; i++) {
  wynikHTML += `<li>${wybraniPomocnicy[i]}</li>`;
}
wynikHTML += "</ul>";

wynikHTML += "<h3>Napastnicy:</h3><ul>";
for (let i = 0; i < wybraniNapastnicy.length; i++) {
  wynikHTML += `<li>${wybraniNapastnicy[i]}</li>`;
}
wynikHTML += "</ul>";


  document.getElementById("wynik-sklad").innerHTML = wynikHTML;
}
