const root = document.querySelector("#root");

// conditional rendering pake state
// studi kasus : Logic login sederhana

function App() {
  // state login
  const [login, setLogin] = React.useState(false);
  
  if(login) {
    return (
      <>
        <h1>Kamu berhasil Login</h1>
        <button onClick={
          function() {
            setLogin(false)
          }
        }>Logout</button>
      </>
    )
  }
  
  return (
    <>
      <h1>Welcome, Please login</h1>
      <button
      onClick={
        function() {
          setLogin(true);
        }
      }>Login</button>
    </>
  )
}

ReactDOM.render(<App/>, root);