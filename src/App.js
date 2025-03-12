import './App.css';

const myName = "Vika"
const srcImage = 'https://images.prom.ua/1734007967_w600_h600_1734007967.jpg'
const altImagr = 'Sponge Bob'
const favouriteSite = { name: "Netflix", url: "https://www.netflix.com/ua/" }
const a = 6
const b = 10
const arr = ["Червоний", "Синій", "Зелений"]

function App() {
  return (
    <div className="App">
      <h2>{myName}</h2>
      <p>"Ласкаво просимо до нашого сайту!"</p>
      <img src={srcImage} alt={altImagr} />
      <a href={favouriteSite.url}>{favouriteSite.name}</a>
      <p>{a + b}</p>
      <ul>
        {arr.map(color => {
          return (
            <li>
              <p>{color}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
export default App;