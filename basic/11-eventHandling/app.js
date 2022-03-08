const root = document.querySelector("#root");
// Event Handling
// event handling / props nya ditulis dengan camelCase
const element = (
  <button onClick={
  function() {
  alert("Hello World");
  }
  }>Click Me</button>
);


// atau

function pesan(pesan) {
alert(`Halo ${pesan}`);
}

const element = (
  // Cara ini salah, karena function nya langsung ter eksekusi sebelum di klik
  // <button onClick={pesan("Adi")}>Click Me</button>
  
  // cara benar
  <button onClick={
  function() {
  pesan("Adi");
  }
  }>Click Me</button>
  
  // Atau kita bind aja function nya
  // bind itu untuk ngebungkus sesuatu
  // param1 = sesuatu nya mau apa
  // param2 = argumen nya mau apa
  
  <button onClick={pesan.bind(this, "Adi")}>Click Me</button>
);

ReactDOM.render(element, root);