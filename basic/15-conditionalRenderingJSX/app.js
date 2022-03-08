const root = document.querySelector("#root");
// conditional rendering di dalam syntax JSX
function App() {
  const [login, setLogin] = React.useState(false);
  
  // menggunakan ternary operator
  return (
    <>
    <h1>App</h1>
    <p>{ login ? "Kamu sudah login" : "Kamu belum login" }</p>
    <button onClick={
      function() {
        setLogin(true);
      }
    }>Login</button>
    </>
  )
}


ReactDOM.render(<App/>, root);