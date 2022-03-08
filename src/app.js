const root = document.querySelector("#root");
// Simple todo list
function App() {
  // input data nya
  const [tudu, setTudu] = React.useState('');
  // kumpulan dari inputan data nya
  const [tudus, setTudus] = React.useState([]);
  
  function submitTudu(event) {
    // cegah refresh
    event.preventDefault();
    // setTudus([tudu]); // salah! karena value tudu lama nya ilang, padahal kan ekspetasi kita tuh si tudus harus nya ngumpulin data lama + data baru nya
    // console.log(tudus); // 1 elemen doang wkwkwk yg lama kehapus
    
    setTudus([...tudus, tudu]); // benar! karena value lama dari tudus di spread (pake ...) terus dimasukin ke array nya + data tudu baru
    // console.log(tudus); // ada banyak elemen sesuai ekspetasi
  }
  
  return (
    <>
      <h1>Simpel Tudulis</h1>
      <form onSubmit={submitTudu}>
        <input placeholder="tudu.." onChange={(event) => setTudu(event.target.value)} type="text" name="tudu" />
        <button type="submit">Noted!</button>
      </form>
      <ul>
        { tudus.map(item => {
          return <li>{item}</li>
        }) }
      </ul>
    </>
  )
}

ReactDOM.render(<App />, root);