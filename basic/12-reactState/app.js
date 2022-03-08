const root = document.querySelector("#root");
// React State
// studi kasus : buat tools untuk increment / decrement suatu nilai misal nya untuk jumlah produk yang ingin dibeli (misalkan)

// pake react komponen aja
function Product(props) {

// const state = React.useState(1); // [1, function]
// console.log(state); // Array [nilaiAwalStateNya, functionBuatNgubahStatenya]
// const count = state[0]; // Nilai saat ini
// const setCount = state[1];


// pake array distructering
const [count, setCount] = React.useState(1);
const [count, setCount] = React.useState(1);

// btw kenapa g count++ / count-- aja ?
// count++ itu sama aja kayak count = count + 1 begitpun sebaliknya
// karena count itu constanta, jadi g bisa di re assign
return (
    <>
    <h1>Jumlah Product</h1>
    <button onClick={
    function() {
    setCount(count - 1);
    }
    }>-</button>
    <span> {count} </span>
    <button onClick={
    function() {
    setCount(count + 1);
    }
    }>+</button>
    </>
  )
}

const element = <Product />

ReactDOM.render(element, root);