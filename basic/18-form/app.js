const root = document.querySelector("#root");

// Form : mencegah reload saat submit
// Form : uncontrolled element (Semua bergantung pada dom node)
function App() {
  // ambil DOM node dari input (getElementById dengan gaya wkwkwk)
  const namaRef = React.useRef(null);
  
  function onSubmit(event) {
    // console.log("Form nya di submit!"); // gk tampil karena begitu form di submit, browser nya nge reload
    
    // event.preventDefault()
    event.preventDefault();
    console.log("Form nya disubmit!");
    
    // ambil value nya bisa pake useRef
    console.log(namaRef.current.value);
    
  }
  
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="nama">Nama : </label>
      <input ref={namaRef} type="text" name="nama" id="nama" />
      <button type="submit">Kirim</button>
    </form>
  )
}

ReactDOM.render(<App />, root);