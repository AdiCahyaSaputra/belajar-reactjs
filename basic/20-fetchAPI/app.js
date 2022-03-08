const root = document.querySelector("#root");
function App() {
  // tampilin data nya pake state biar g ribet
  const [news, setNews] = React.useState([]); // nilai default nya array kosong karena mau kita set array nanti
  
  // load data nya kek datar gitu kan yah wkwkwk
  // see this magic trick
  const [load, setLoad] = React.useState(true); // loading nya true dulu yekan
  
  // fetch api, pake useEffect dan jalanin useEffect nya 1 kali aja 
  React.useEffect(function() {
    fetch('https://api.spaceflightnewsapi.net/v3/blogs')
      .then(response => response.json())
      .then(result => { 
        setNews(result)
        setLoad(false) // loading nya kelar atau bisa dibilang false
      });
  }, []);
  
  return (
    <>
      <h1>Data Fetch</h1>
      { load ? 
        <p>Sedang meng-Loading ...</p> : 
        news.map(function(e) {
          return <p key={e.id}>{e.title}</p>
        }) 
      }
    </>
  )
}

ReactDOM.render(<App />, root);