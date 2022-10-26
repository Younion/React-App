import { useState, useEffect } from "react";
import "./App.css";
import SauceCard from "./Components/SauceCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewForm from "./Components/ReviewForm";
import CallToAction from "./Components/CallToAction";
import SauceCarousel from "./Components/SauceCarousel";
import TitleSection from "./Components/TitleSection";
import NavBar from "./Components/NavBar";
import AddForm from "./Components/AddForm";
import Footer from "./Components/Footer";

function App() {
  const [sauces, setData] = useState([]);
  const [allSauces, setAllUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let sauceData;
      try {
        const url = "https://api.airtable.com/v0/app4Kq78nyR93DHLC/hot%20sauces?filterByFormula=NOT({Average+Rating}+%3D+%27%27)&api_key=";
        const APP_KEY = "keyjRGeqc5QA99Q5v";
        const response = await fetch(url + APP_KEY);        
        // const url = "https://randomuser.me/api/?results=10";
        // const response = await fetch(url);
        sauceData = await response.json();
      } catch (error) {
        console.log(error);
        sauceData = [];
      }
      setData(sauceData.records);
      setAllUsers(sauceData.records);
      console.log(sauceData.records);
    })();
  }, []);
 
  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredData = allSauces.filter(
      sauces => (`${sauces.fields.Name} 
      ${sauces.fields['Heat Sources String']} 
      ${"Average Rating: " + Math.round(sauces.fields['Average Rating'])} 
      ${"Spiciness Rating: " + Math.round(sauces.fields['Spiciness Dots'])} 
      ${"Percent Loved: " + Math.round(sauces.fields['Percent Loved'])*100 + "%"}`
      .toLowerCase().includes(value)));
      setData(filteredData);
  }

  return (
    <div className="App">
      <NavBar />
      <TitleSection />
      <SauceCarousel />
      <CallToAction />
      <div className="container-fluid" id="cta">
        <h1>Hot Sauce Reviews</h1>
      </div>
      <div className="searchBar">
      <input className="search" placeholder="Search..." onInput={filterCards}/>
      </div>
      {/* <SauceCarousel sauceData={sauces} /> */}
      <div className="cards-container">
      {sauces.map((sauce, index) => (
        <SauceCard key={sauce.id} sauceData={sauce} />
        ))}
      </div>
      <ReviewForm />
      <AddForm />
      <Footer />
    </div>
  );
}
  
export default App;