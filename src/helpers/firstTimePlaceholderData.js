import { stringify } from "@/helpers";

const firstTimePlaceholderPlaces = {
  l6lg: {
    id: "l6lg",
    title: "Stare Babice",
    position: { lat: 52.27942364202732, lng: 20.746890268441188 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Poland",
      regionName: "Mazowieckie",
      cityName: "Stare Babice"
    }
  },
  n320: {
    id: "n320",
    title: "Murowana Goślina",
    position: { lat: 52.54728749655735, lng: 17.142521486334587 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Poland",
      regionName: "Wielkopolskie",
      cityName: "Murowana Goślina"
    }
  },
  k7ni: {
    id: "k7ni",
    title: "Byczyna",
    position: { lat: 51.081419529978845, lng: 18.285370124563524 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Poland",
      regionName: "Opolskie",
      cityName: "Byczyna"
    }
  },
  h1ao: {
    id: "h1ao",
    title: "Оршанский район",
    position: { lat: 56.90405879094862, lng: 48.26316901964512 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Russia",
      regionName: "Республика Марий-Эл",
      cityName: "Оршанский район"
    }
  },
  l02n: {
    id: "l02n",
    title: "Сургутский район",
    position: { lat: 61.776120673821985, lng: 70.85640748309369 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Russia",
      regionName: "Ханты-Мансийский АО",
      cityName: "Сургутский район"
    }
  },
  g21c: {
    id: "g21c",
    title: "Удорский район",
    position: { lat: 63.822725784540566, lng: 49.757663392713674 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Russia",
      regionName: "Республика Коми",
      cityName: "Удорский район"
    }
  },
  b13m: {
    id: "b13m",
    title: "Павлоградский район",
    position: { lat: 54.22332057183491, lng: 73.49375049439122 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Russia",
      regionName: "Омская область",
      cityName: "Павлоградский район"
    }
  },
  "29l3": {
    id: "29l3",
    title: "Нет Города",
    position: { lat: 49.45352952111695, lng: 66.28501293017801 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Kazakhstan",
      regionName: "Нет Области",
      cityName: "Нет Города"
    }
  },
  ganf: {
    id: "ganf",
    title: "Режевской",
    position: { lat: 57.333201521871345, lng: 61.27406120871277 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Russia",
      regionName: "Свердловская область",
      cityName: "Режевской"
    }
  },
  dg95: {
    id: "dg95",
    title: "Советский район",
    position: { lat: 61.52588982372355, lng: 61.71361837726234 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Russia",
      regionName: "Ханты-Мансийский АО",
      cityName: "Советский район"
    }
  },
  "8ne0": {
    id: "8ne0",
    title: "Великоустюгский район",
    position: { lat: 60.76296332238186, lng: 45.27418027350792 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Russia",
      regionName: "Вологодская область",
      cityName: "Великоустюгский район"
    }
  },
  ehah: {
    id: "ehah",
    title: "Ростовский район",
    position: { lat: 56.90405879094862, lng: 39.12037991381378 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Russia",
      regionName: "Ярославская область",
      cityName: "Ростовский район"
    }
  },
  iacn: {
    id: "iacn",
    title: "Докшицы",
    position: { lat: 55.03674075328966, lng: 27.603982097814693 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Belarus",
      regionName: "Vitebsk",
      cityName: "Докшицы"
    }
  },
  "6c65": {
    id: "6c65",
    title: "Нет Города",
    position: { lat: 52.49384484745144, lng: 72.79045902471186 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Kazakhstan",
      regionName: "Нет Области",
      cityName: "Нет Города"
    }
  },
  "0f7g": {
    id: "0f7g",
    title: "Нет Города",
    position: { lat: 42.18465461914306, lng: 67.7795073032466 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Kazakhstan",
      regionName: "Нет Области",
      cityName: "Нет Города"
    }
  },
  bb31: {
    id: "bb31",
    title: "Нет Города",
    position: { lat: 50.5821641817533, lng: 58.812541064835095 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Kazakhstan",
      regionName: "Нет Области",
      cityName: "Нет Города"
    }
  },
  fb3a: {
    id: "fb3a",
    title: "Чекмагушевский район",
    position: { lat: 55.03674075328966, lng: 54.59279224675909 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Russia",
      regionName: "Республика Башкирия",
      cityName: "Чекмагушевский район"
    }
  },
  "7l4a": {
    id: "7l4a",
    title: "Чердынский район",
    position: { lat: 60.891400507523166, lng: 56.175198053537606 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Russia",
      regionName: "Пермский край",
      cityName: "Чердынский район"
    }
  },
  "28gd": {
    id: "28gd",
    title: "Тобольский район",
    position: { lat: 58.955301120406325, lng: 67.60368443582678 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Russia",
      regionName: "Тюменская область",
      cityName: "Тобольский район"
    }
  },
  dg07: {
    id: "dg07",
    title: "Нет Города",
    position: { lat: 54.06898907929346, lng: 66.10919006275817 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Kazakhstan",
      regionName: "Нет Области",
      cityName: "Нет Города"
    }
  },
  ie60: {
    id: "ie60",
    title: "Нет Города",
    position: { lat: 48.70566297350473, lng: 36.39512546880633 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Ukraine",
      regionName: "Нет Области",
      cityName: "Нет Города"
    }
  },
  fcab: {
    id: "fcab",
    title: "Костюковичи",
    position: { lat: 53.341146400991605, lng: 31.911642349600577 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Belarus",
      regionName: "Mogilev",
      cityName: "Костюковичи"
    }
  },
  "60e5": {
    id: "60e5",
    title: "Гавриловский район",
    position: { lat: 52.81352646037865, lng: 42.548925828500515 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Russia",
      regionName: "Тамбовская область",
      cityName: "Гавриловский район"
    }
  },
  "4b5e": {
    id: "4b5e",
    title: "Камышинский район",
    position: { lat: 49.96469662626377, lng: 45.27418027350792 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Russia",
      regionName: "Волгоградская область",
      cityName: "Камышинский район"
    }
  },
  "7ced": {
    id: "7ced",
    title: "Нет Города",
    position: { lat: 48.23983256373431, lng: 23.384233279738687 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Ukraine",
      regionName: "Нет Области",
      cityName: "Нет Города"
    }
  },
  "4ig4": {
    id: "4ig4",
    title: "Нет Города",
    position: { lat: 44.85882246449399, lng: 19.340307329082506 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Bosnia and Herzegovina",
      regionName: "Bijeljina",
      cityName: "Нет Города"
    }
  },
  alf1: {
    id: "alf1",
    title: "Boissy-lès-Perche",
    position: { lat: 48.70566297350473, lng: 0.8789062500000001 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "France",
      regionName: "Eure-et-Loir",
      cityName: "Boissy-lès-Perche"
    }
  },
  "4c89": {
    id: "4c89",
    title: "Briaucourt",
    position: { lat: 47.82871963704683, lng: 6.241503706304907 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "France",
      regionName: "Haute-Saône",
      cityName: "Briaucourt"
    }
  },
  m3m4: {
    id: "m3m4",
    title: "Bertignat",
    position: { lat: 45.60107416271177, lng: 3.692072128717326 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "France",
      regionName: "Puy-de-Dôme",
      cityName: "Bertignat"
    }
  },
  efio: {
    id: "efio",
    title: "Lubomia",
    position: { lat: 50.02116112149353, lng: 18.285370124563524 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Poland",
      regionName: "Śląskie",
      cityName: "Lubomia"
    }
  },
  "4df5": {
    id: "4df5",
    title: "Möckern",
    position: { lat: 52.22565552781916, lng: 12.043658331159426 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Germany",
      regionName: "Sachsen-Anhalt",
      cityName: "Möckern"
    }
  },
  "5olg": {
    id: "5olg",
    title: "Fieberbrunn",
    position: { lat: 47.47372470269752, lng: 12.571126933418917 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Austria",
      regionName: "Tirol",
      cityName: "Fieberbrunn"
    }
  },
  "82dn": {
    id: "82dn",
    title: "Rákoš",
    position: { lat: 48.64766799835585, lng: 21.450181738120513 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Slovakia",
      regionName: "Košický kraj",
      cityName: "Rákoš"
    }
  },
  "953d": {
    id: "953d",
    title: "Kuchyňa",
    position: { lat: 48.41502019002829, lng: 17.142521486334587 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Slovakia",
      regionName: "Bratislavský kraj",
      cityName: "Kuchyňa"
    }
  },
  e5gg: {
    id: "e5gg",
    title: "Петриков",
    position: { lat: 52.17182222489304, lng: 28.658919302333675 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Belarus",
      regionName: "Gomel",
      cityName: "Петриков"
    }
  },
  "2i6m": {
    id: "2i6m",
    title: "Нет Города",
    position: { lat: 49.224615893759854, lng: 31.208350879921255 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Ukraine",
      regionName: "Черкаська",
      cityName: "Нет Города"
    }
  },
  "1c6l": {
    id: "1c6l",
    title: "Усманский район",
    position: { lat: 52.009930870230704, lng: 39.82367138349311 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Russia",
      regionName: "Липецкая область",
      cityName: "Усманский район"
    }
  },
  k1ig: {
    id: "k1ig",
    title: "Нет Города",
    position: { lat: 41.72744816573121, lng: 44.57088880382861 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Georgia",
      regionName: "Нет Области",
      cityName: "Нет Города"
    }
  },
  "4b30": {
    id: "4b30",
    title: "Нет Города",
    position: { lat: 38.84727862643556, lng: 45.7137374420575 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Iran",
      regionName: "East Azarbaijan",
      cityName: "Нет Города"
    }
  },
  kkik: {
    id: "kkik",
    title: "Нет Города",
    position: { lat: 36.27163055293128, lng: 36.834682637355904 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Syria",
      regionName: "Нет Области",
      cityName: "Нет Города"
    }
  },
  "2d0m": {
    id: "2d0m",
    title: "Нет Города",
    position: { lat: 36.48377322274468, lng: 30.59297084395185 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Turkey",
      regionName: "Нет Области",
      cityName: "Нет Города"
    }
  },
  eakg: {
    id: "eakg",
    title: "Нет Города",
    position: { lat: 43.790707173501595, lng: 23.56005614715852 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Bulgaria",
      regionName: "Монтана",
      cityName: "Нет Города"
    }
  },
  "8hbb": {
    id: "8hbb",
    title: "Нет Города",
    position: { lat: 41.20091416448631, lng: 20.57106740102132 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "North Macedonia",
      regionName: "Нет Области",
      cityName: "Нет Города"
    }
  },
  "2c81": {
    id: "2c81",
    title: "Bacoli",
    position: { lat: 40.80321059688951, lng: 14.065621306487515 },
    isSaved: false,
    isShowOnMap: false,
    context: { countryName: "Italy", regionName: "Napoli", cityName: "Bacoli" }
  },
  lo22: {
    id: "lo22",
    title: "San Rufo",
    position: { lat: 40.40310955608585, lng: 15.47220424584616 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Italy",
      regionName: "Salerno",
      cityName: "San Rufo"
    }
  },
  eogo: {
    id: "eogo",
    title: "Bagno di Romagna",
    position: { lat: 43.790707173501595, lng: 11.95574689744951 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Italy",
      regionName: "Forli'-Cesena",
      cityName: "Bagno di Romagna"
    }
  },
  "9ecn": {
    id: "9ecn",
    title: "Нет Города",
    position: { lat: 40.13504613427656, lng: 11.692012596319765 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Нет Страны",
      regionName: "Нет Области",
      cityName: "Нет Города"
    }
  },
  ib9h: {
    id: "ib9h",
    title: "Нет Города",
    position: { lat: 38.36684108799575, lng: 6.329415140014821 },
    isSaved: false,
    isShowOnMap: false,
    context: {
      countryName: "Нет Страны",
      regionName: "Нет Области",
      cityName: "Нет Города"
    }
  }
};

export const setFirstTimePlaceholderData = () => {
  if (!window.localStorage.getItem("wasFirstTimeInited")) {
    window.localStorage.setItem(
      "places",
      stringify(firstTimePlaceholderPlaces)
    );
    window.localStorage.setItem("wasFirstTimeInited", "true");
  }
};
