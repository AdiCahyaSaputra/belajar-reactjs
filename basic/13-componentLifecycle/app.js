const root = document.querySelector("#root");

// Component Life cycle
// mengeksekusi suatu function setelah element di render
function App() {
  const [klik, setKlik] = React.useState(false);
  const [count, setCount] = React.useState(1);

  // btw function ini di eksekusi saat component ini di render
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
  React.useEffect(function() {
    // cerita nya aja ini mah, boong² an aja
    // misalnya kita mau nambahin komponen carousel saat elemen ini udh di render
    
    // mount (karena fungsi ini di exec 1 kali)
    console.log("Init Komponen carousel");
    
    // unmount 
    return function() {
      console.log("Hapus init dari komponen Carousel")
    }
    
  }); // g dikasih array kosong karena biar bisa nge detect perubahan state nya, misal si user pindah halaman atau gimana gitu
  
  // gini logic nya
  // step 1 : komponen di render lalu function jalan dan bakalan init carousel + mengembalikan nilai
  // ketika ada suatu perubahan, maka function ini (function nya udh berubah ya btw, kan tadi udh di re assign sama return an dari exec sebelum nya) bakal jalan lagi
  // terus di mount lagi ketika si user balik lagi ke halaman ini (dengan kata lain, nge render lagi komponen ini)
  // nah yaudh berarti ngulang lagi dari step 1 dan seterus nya
  
  return (
    <>
    <h1 id="el">Element Sudah Di Render</h1>
    <button onClick={
      function() {
        setKlik(true);
      }
      }>Klik Aku</button> 
    <button onClick={
      function() {
        setCount(count + 1);
      }
      }>Tambah</button> 
    Nilai Saat ini : {count}
    </>
  )
}

ReactDOM.render(element, root);