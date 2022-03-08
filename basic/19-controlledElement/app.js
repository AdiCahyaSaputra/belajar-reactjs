const root = document.querySelector("#root");

// Form : mencegah reload saat submit
// controlled element (tidak bergantung pada Dom node tapi kebalikannya)
function App() {
  // ambil DOM node dari input pake useState
  // masih inget kan btw beda nya useState sama useRef ?
  const [nama, setNama] = React.useState(''); // nilai awal = string kosong
  
  function onSubmit(event) {
    // console.log("Form nya di submit!"); // gk tampil karena begitu form di submit, browser nya nge reload
    
    // event.preventDefault()
    event.preventDefault();
    console.log("Form nya disubmit!");
    
    // ambil value nya
    console.log(nama);
    
  }
  
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="nama">Nama : </label>
      <input onChange={
        // ketika ada perubahan apapun di dalam inputan, maka :
        function(event) {
          // event.target = dom node, yaitu input ini
          setNama(event.target.value);
        }
      } type="text" name="nama" id="nama" />
      <button type="submit">Kirim</button>
    </form>
  )
}

ReactDOM.render(<App />, root);