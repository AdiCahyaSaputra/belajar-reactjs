const root = document.querySelector("#root");
// Manipulasi DOM menggunakan useEffect dan useRef

/**
 * Note!
 * useRef biasa nya digunakan untuk memanipulasi dom ketika
 * ada suatu perubahan, TANPA merender ulang komponen nya.
 * Bisa buat nge set value counter, value jam saat ini, dsb
 * TANPA merender ulang.
 * 
 * Itulah kira² beda nya useState dan useRef
 * useState() -> Render ulang
 * useRef() -> Tidak render Ulang
**/

function App() {
  const [login, setLogin] = React.useState(false);
  const judulRef = React.useRef(null); // nilai awal nya obj.current = null dulu karena element belum di render
  
  console.log(judulRef); // berisi obj.current = node , karena si element udh ke render
  const counterRef = React.useRef(0);
  
  // manipuladi tulisan h1 nya
  React.useEffect(function() {
    // kasih jeda biar keliatan
    setTimeout(function() {
      judulRef.current.textContent = "Web";
    }, 1000);
    
    // contoh lain
    setInterval(function() {
      counterRef.current.textContent = parseInt(counterRef.current.textContent) + 1;
    }, 1000)
    
  }, []); 
  
  return (
    <>
    <h1 ref={judulRef}>App</h1>
    <p ref={counterRef}>0</p>
    </>
  )
  
}

/**
 * Nah dari semua yg kita pelajari dari kemarin²
 * itu adalah React Hook.
 * jadi sebenernya function use use an tadi itu memudahkan kita aja.
 * sebenernya function itu di hasilkan dari kelas React.component
 * yg isi nya ada method componentDidMount(), componentWillMount, dsb
 * ada juga porperty buat nanganin state atau klo disini kita nyebut nya useState()
**/

ReactDOM.render(<App/>, root);