const root = document.querySelector("#root"); // reactRender-09

/**
function tick() {
  const element = (
    <div>
      <h2>Jam Saat Ini</h2>
      <p>
        {new Date().toLocaleString()}
      </p>
    </div>
  );

  ReactDOM.render(element, root);
}

setInterval(function() {
  tick();
}, 1000);
**/
// InlineStyle-11
// style sebagai props
// isi dari style adalah obj, dan untuk meng embed obj di JSX bisa pake "{}"
// property css ditulis sebagai property dari obj nya
// value nya di isi dengan tipe str (kalo mau ada px nya misal 200px) klo g mau yaudh int aja 
// property di obj g boleh ada simbol "-" jadi nya ganti property css yang 2 kata jadi camelCase

/**
const element = (
  <div style={
    {
      width: 200,
      height: 200,
      backgroundColor: 'red'
    }
  }></div>
);

ReactDOM.render(element, root);
**/
// kalo Nulis Css external ya yaudh sama aja kek biasa
// extCss-12

const element = /*#__PURE__*/React.createElement("div", {
  className: "box"
});
ReactDOM.render(element, root);