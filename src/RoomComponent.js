import React from "react";
import contacts from "./Contacts";
import './style1.css';



function Amenities(props) {
  return (

    <div class="card" style={{ width: "18rem" }}>
      <a target="_blank" href="c1.jpg">
        <img src={contacts[0].imgURL} alt="kangarooms-Agartala" class="card-img-top" />
      </a>
      <div class="card-body">

        <h5 class="card-title">Single Bed @900/-</h5>
        <p class="card-text">
          <a target="_blank" href="swimmingpool.png"><img src={contacts[0].imgURL} alt="kangarooms-Agartala" style={{ width: "20px", height: "20px" }} class="class5" /></a> Swimming pool<br />
          <a target="_blank" href="wifi.jpg"><img src={contacts[0].imgURL} alt="kangarooms-Agartala" style={{ width: "20px", height: "20px" }} class="class5" /></a>Wifi <br />
          <a target="_blank" href="nobreakfast.jpg"><img src={contacts[0].imgURL} alt="kangarooms-Agartala" style={{ width: "20px", height: "20px" }} class="class5" /></a>No Breakfast <br />
          <a target="_blank" href="lovethemes.webp"><img src={contacts[0].imgURL} alt="kangarooms-Agartala" style={{ width: "20px", height: "20px" }} class="class5" /></a>Love Theme <br />
          <a target="_blank" href="location1.html"><img src={contacts[0].imgURL} alt="kangarooms-Agartala" style={{ width: "20px", height: "20px" }} class="class5" /></a> Harithanagar,Tirupati <br />
          <a target="_blank" href="love_symbol.jpg"><img src={contacts[0].imgURL} alt="kangarooms-Agartala" style={{ width: "20px", height: "20px" }} class="class5" /></a>Couples <br />
          <a target="_blank" href="vacancies.jpg"><img src={contacts[0].imgURL} alt="kangarooms-Agartala" style={{ width: "15px", height: "15px" }} /></a><span id="idhen">Available:8</span> <br />
          <a target="_blank" href="booked.jpg"><img src={contacts[0].imgURL} alt="kangarooms-Agartala" style={{ width: "15px", height: "15px" }} /></a><span id="idhat">Booked:0</span>
        </p>
        <pre>
          <a href="kangarooms-Book.html" class="btn btn-primary">Book</a> <button class="btn btn-primary" onclick="abc20()">Check-in</button> <button class="btn btn-primary" onclick="def20() ">Check-out</button>
        </pre>
      </div>
    </div>
  )
}
export default Amenities;