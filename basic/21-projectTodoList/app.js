const root = document.querySelector("#root");
// Simple todo list
function App() {
  // input data nya
  const [tudu, setTudu] = React.useState('');
  // kumpulan dari inputan data nya
  const [tudus, setTudus] = React.useState([]);
  
  // state ketika user mau edit tudu nya
  const [edit, setEdit] = React.useState({}); // karena tudu kan object { id sama tudu nya kan }
  
  // validasi ketika user ngetikin tudu string kosong
  const [valid, setValid] = React.useState('valid');
  
  // generate unik ID biar bisa jalanin fungsi hapus walaupun ada tudu yg nama nya sama
  function generateUID() {
    return Date.now();
  }
  
  // edit tudu
  function setEditTudu(itemTudu) {
    // edit lewat input yg udh ada aja biar g ribet
    // set value input nya dengan cara setTudu (karena kan di input juga udh kita set value nya supaya dinamis ngikutin state tudu)
    setTudu(itemTudu.tudu); // supaya di inputan nya muncul tudu yang mau kita edit
    
    // set state edit tudu sesuai dengan yang mau user edit yaitu si itemTudu
    setEdit(itemTudu);
    
    /**
     * Note!
     * entah lah Wkwkwkwk
     * kan udah di set nih yekan tudu sama edit nya
     * tapi pas di console.log tudu dan edit nya, malah muncul value state yang awal
     * STRESSSS
     * gpp lah yg penting udh ke set
    **/
    
  }
  
  function deleteTudu(uniqueID) {
    // untuk setiap element dalam array tudus
    tudus.forEach(e => {
      // jika element e.id itu sama dengan ID yang dikirim di parameter
      if(e.id == uniqueID) {
        if(uniqueID == edit.id) {
          // biar kalo lagi ngapus sesuatu pas ngedit jadi g bisa wkwkwk
          exitEdit();
        }
        
        // cari tau index element array tersebut lalu di splice 1 kali / hapus 1 kali sama aja yah wkwkwk
        tudus.splice(tudus.indexOf(e), 1);
        // console.log(tudus);
        
        // set ulang array tudus nya dengan yang sudah di splice
        setTudus([...tudus]);
      }
    });
    
  }
  
  function submitTudu(event) {
    
    // cegah refresh
    event.preventDefault();
    
    // validasi
    if(!tudu) {
      setValid('Isi dulu banh');
      // biar g ngeksekusi kode selanjutnya klo emang g valid
      return;
    }
    
    // setTudus([tudu]); // salah! karena value tudu lama nya ilang, padahal kan ekspetasi kita tuh si tudus harus nya ngumpulin data lama + data baru nya
    // console.log(tudus); // 1 elemen doang wkwkwk yg lama kehapus
    
    // setTudus([...tudus, tudu]); // benar! karena value lama dari tudus di spread (pake ...) terus dimasukin ke array nya + data tudu baru
    // console.log(tudus); // ada banyak elemen sesuai ekspetasi
    
    // set tudus nya pake object (biar bisa nambahin unique ID)
    setTudus([...tudus, {
      id: generateUID(),
      // tudu: tudu 
      // atau kalo di ES6 bisa ↓
      tudu, // sama aja kayak tudu: tudu
      isDone: false
    }]);
    
    // reset value dari tudu nya setelah di masukin ke tudus
    setTudu('');
    setValid('valid');
  }
  
  function saveTudu(event) {
    event.preventDefault();
    
    // validasi
    if(!tudu) {
      setValid('Isi dulu banh');
      // biar g ngeksekusi kode selanjutnya klo emang g valid
      return;
    }
    
    const tmpTudus = [...tudus];
    tmpTudus[tudus.indexOf(edit)].tudu = tudu; // update sesuai yg diketik user tanpa merubah ID
    // console.log(edit.id, edit.tudu , tudu); // tuh kan ada value nya wkwkwk, tadi mah g ada padahal
    // console.log(tmpTudus[tudus.indexOf(edit)]); // pastikan sudah ter edit
    
    /**
     * Kenapa g langsung tudus[tudus.indexOf(edit)].tudu = tudu aja ?
     * Iya juga yah btw
     * mau coba ?
     * entahlah yg penting kalo emang udh jalan mah yaudh biarin g usah di sentuh²
    **/
    
    /**
     * Karena kan sejatinya kalo mau nge set state yah dari function setter nya lah
     * jangan melawan Hukum React!
    **/
    
    // gas Push
    setTudus(tmpTudus);
    // exit mode edit
    exitEdit();
    setValid('valid')
  }
  
  function exitEdit() {
    setEdit({});
    setTudu('');
  }
  
  function doneTudu(itemTudu) {
    
    const tmpTudus = [...tudus];
    tmpTudus[tudus.indexOf(itemTudu)].isDone = itemTudu.isDone ? false : true;
    
    setTudus(tmpTudus);
    
  }
  
  return (
    <>
      <h1>Simpel Tudulis</h1>
      { valid !== 'valid' &&
        <p>{valid}</p>
      }
      <form onSubmit={ edit.id ? saveTudu : submitTudu }>
        <input value={tudu} placeholder="tudu.." onChange={ event => setTudu(event.target.value) } type="text" name="tudu" />
        <button type="submit">{ edit.id ? "Save" : "Noted!"}</button>
        { edit.id && <button onClick={exitEdit}>Exit Edit</button> }
      </form>
      <ul>
        { tudus.map(item =>
          <li key={item.id}> 
            <input checked={item.isDone} type="checkbox" onChange={() => doneTudu(item)}/>
            {item.tudu} ( {item.isDone ? "Selesai" : "Belum Selesai"} )
            <button onClick={ () => deleteTudu(item.id) }>Hapus Tudu</button>
            <button onClick={ () => setEditTudu(item) }>Edit Tudu</button>
          </li>
        )}
      </ul>
    </>
  )
}

ReactDOM.render(<App />, root);