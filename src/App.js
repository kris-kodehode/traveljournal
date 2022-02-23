import './App.css'
import Header from "./components/header"
import Card from "./components/card"
import data from "./data"

export default function App() {

  const cards = data.map(item=> {
    return (
        <Card
          item={item}
        />
    )
  })

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <Header/>
        </header>
        <main>
            {cards}
        </main>
      </div>
    </div>
  )
}

/* {
  title: "Mount Fuji",
  location: "Japan",
  googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
  startDate: "12 Jan, 2021",
  endDate: "24 Jan, 2021",
  description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
  imageUrl: "https://unsplash.com/photos/WLxQvbMyfas"
} */