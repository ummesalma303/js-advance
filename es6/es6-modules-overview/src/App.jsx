import './App.css'
// import Sunglass from './components/sunglass/Sunglass'
import Watch from './components/watch/Watch'
import Watches from './components/watch/Watches';

function App() {
  // const watches = [
  //   { id: "S001", name: "Apple Watch Series 7", price: 399, color: "Midnight" },
  //   { id: "S002", name: "Samsung Galaxy Watch 4", price: 249, color: "Black" },
  //   { id: "S003", name: "Fitbit Sense", price: 299, color: "Carbon/Graphite" },
  //   { id: "S004", name: "Garmin Venu 2", price: 349, color: "Slate" },
  //   { id: "S005", name: "Amazfit GTR 3 Pro", price: 199, color: "Brown Leather" }
  // ];
  
  return (
    <>
      {/* {
        watches.map(watch=><Watch key={watch.id} watch={watch}></Watch>)
      } */}
      
      {/* <Sunglass></Sunglass> */}
     <Watches></Watches>
    </>
  )
}

export default App
