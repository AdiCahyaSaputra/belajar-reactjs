const root = document.querySelector("#root");

// Buat list tapi pake array 
function App() {
  const fruits = ["Apel", "Pisang", "Mangga", "Chorus"]
  
  /**
   * Kenapa pake map() ?
   * karena kalo pake forEach() dia g bakal bisa return apapub
   * karena sejati nya, function itu klo udh return ya udh kelar gitu
   * tapi kalo pake map(), ya emang fungsi dari map itu buat nge mapper si array kan 
   * jadi ya return nya bisa berkali² sesuai jumlah array
  **/
  
  /**
   * Note
   * Jangan lupakan curly bracets {}
   * karena kita masukin javascript expression
   * ke dalam sytnax JSX
  **/
  
  return (
    <>
    <h1>List Buah Buahan</h1>
    <ul>
      { fruits.map(function(fruit) {
        // return <li>{fruit}</li>
        // mungkin kalo di real project, key nya bisa product.id mungkin
        return <li key="{fruit}">{fruit}</li>
      }) }
    </ul>
    </>
  )
  
  /**
   * Note
   * Ada error di console
   * kita harus kasih props "key" yang isinya unik 
   * ke element list nya
   * biar apa ?
   * biar si react nya bisa mantau perubahan dari si element tersebut
   * biar kalo di manipulasi dom nya, bisa lebih efisien lah yah
   * g terlalu makan banyak memo
   * klo g dikasih "key" ya nanti nya semua element yg di map tadi bakal...
  **/
  
}

ReactDOM.render(<App />, root);