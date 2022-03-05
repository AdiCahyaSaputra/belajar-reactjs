const root = document.querySelector("#root"); // reactRender-09

/**
function tick() {
const element = (
<div>
<h2>Jam Saat Ini</h2>
<p>
{new Date().toLocaleString()}
</p>
</div>
);

ReactDOM.render(element, root);
}

setInterval(function() {
tick();
}, 1000);
**/
// InlineStyle-11
// style sebagai props
// isi dari style adalah obj, dan untuk meng embed obj di JSX bisa pake "{}"
// property css ditulis sebagai property dari obj nya
// value nya di isi dengan tipe str (kalo mau ada px nya misal 200px) klo g mau yaudh int aja
// property di obj g boleh ada simbol "-" jadi nya ganti property css yang 2 kata jadi camelCase

/**
const element = (
<div style={
{
width: 200,
height: 200,
backgroundColor: 'red'
}
}></div>
);

**/
// kalo Nulis Css external ya yaudh sama aja kek biasa
// externalCss-12

/**
const element = (
<div className="box"></div>
);
**/
// Event Handling
// event handling / props nya ditulis dengan camelCase

/**
const element = (
<button onClick={
function() {
alert("Hello World");
}
}>Click Me</button>
);
**/
// atau

/**
function pesan(pesan) {
alert(`Halo ${pesan}`);
}

const element = (
// Cara ini salah, karena function nya langsung ter eksekusi sebelum di klik
// <button onClick={pesan("Adi")}>Click Me</button>

// cara benar
/** <button onClick={
function() {
pesan("Adi");
}
}>Click Me</button> **/
// Atau kita bind aja function nya
// bind itu untuk ngebungkus sesuatu
// param1 = sesuatu nya mau apa
// param2 = argumen nya mau apa

/**
<button onClick={pesan.bind(this, "Adi")}>Click Me</button>
);
**/
// React State
// studi kasus : buat tools untuk increment / decrement suatu nilai misal nya untuk jumlah produk yang ingin dibeli (misalkan)
// pake react komponen aja

/**
function Product(props) {

// const state = React.useState(1); // [1, function]
// console.log(state); // Array [nilaiAwalStateNya, functionBuatNgubahStatenya]
// const count = state[0]; // Nilai saat ini
// const setCount = state[1];


// pake array distructering
const [count, setCount] = React.useState(1);
const [count, setCount] = React.useState(1);

// btw kenapa g count++ / count-- aja ?
// count++ itu sama aja kayak count = count + 1 begitpun sebaliknya
// karena count itu constanta, jadi g bisa di re assign
return (
<>
<h1>Jumlah Product</h1>
<button onClick={
function() {
setCount(count - 1);
}
}>-</button>
<span> {count} </span>
<button onClick={
function() {
setCount(count + 1);
}
}>+</button>
</>
)
}

const element = <Product />
**/
// Component Life cycle
// mengeksekusi suatu function setelah element di render

function App() {
  const [klik, setKlik] = React.useState(false);
  const [count, setCount] = React.useState(1); // btw function ini di eksekusi saat component ini di render
  // jadi jika ada sesuatu yg mengharuskan komponen ini di render ulang, misal nya perubahan state, dsb
  // maka fungsi ini akan dijalankan lagi

  /** React.useEffect(function() {
    console.log("Dan Aku Bisa muncul");
    console.log(document.getElementById('el'))
  }); **/
  // dan ada saat nya kita hanya mau memantau salah satu state aja kan, nah bisa pake ini

  /**
  React.useEffect(function() {
    console.log("Dan Aku Bisa muncul");
    console.log(document.getElementById('el'))
  }, [count]); 
  **/
  // pokok nya kalo state count berubah, function ini jalan. sebaliknya...
  // kalo emang mau pantau banyak state, ya tinggal tambahin elemen array nya dengan state yg mau di pantau
  // Kalo di React istilah nya "update" / "component did update ?" mendeteksi adanya perubahan di dalam suatu komponen
  // tapi kalo dikasih argumen array kosong [] berarti function ini akan di eksekusi sekali aja
  // misalnya buat fetch data product ketika komponen ini pertama kali di render
  // kalo di React tuh istilah nya "mount" / "component did mount ?" jadi si komponen nya udh di mount apa belum (kira² begitu)
  // dan bisa juga dipake buat blinding element (jadi kita melakukan sesuatu tapi ketika elemen nya udh muncul) misal nya, jalanin fungsi "close" ketika komponen notifikasi nya udh muncul
  // Ada 1 lagi "unmount" / "component did unmount" 
  // ketika suatu element / library / inisialisasi sesuatu, dan kita mau pindah halaman, sering kali sesuatu tersebut masih di simpen ke memory (karena kan browser nya tidak di refresh / "SPA")
  // maka ketika kita mau pindah halaman, ada baiknya unmount dulu yg g perlu banh

  React.useEffect(function () {
    // cerita nya aja ini mah, boong² an aja
    // misalnya kita mau nambahin komponen carousel saat elemen ini udh di render
    // mount (karena fungsi ini di exec 1 kali)
    console.log("Init Komponen carousel"); // unmount 

    return function () {
      console.log("Hapus init dari komponen Carousel");
    };
  }); // g dikasih array kosong karena biar bisa nge detect perubahan state nya, misal si user pindah halaman atau gimana gitu
  // gini logic nya
  // step 1 : komponen di render lalu function jalan dan bakalan init carousel + mengembalikan nilai
  // ketika ada suatu perubahan, maka function ini (function nya udh berubah ya btw, kan tadi udh di re assign sama return an dari exec sebelum nya) bakal jalan lagi
  // terus di mount lagi ketika si user balik lagi ke halaman ini (dengan kata lain, nge render lagi komponen ini)
  // nah yaudh berarti ngulang lagi dari step 1 dan seterus nya

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "el"
  }, "Element Sudah Di Render"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setKlik(true);
    }
  }, "Klik Aku"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "Tambah"), "Nilai Saat ini : ", count);
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);