import React from "react";
import "./Home.css";
import image from "./images/amzon.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_backImage" src={image} alt="" />
        <div className="home_row">
          <Product
          id={90}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, September 13, 2011"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
          id={91}
          title="Amazfit Bip U Smart Watch Fitness Tracker for Men Women with 60+ Sports Modes, 9-Day Battery Life, Blood Oxygen Breathing Heart Rate Sleep Monitor, 5 ATM Waterproof, for iPhone Android Phone (Black)"
          price={59.99}
          image='https://m.media-amazon.com/images/I/61tu-CpDLxL._AC_UL320_.jpg' 
          rating={4}/>
        </div>
        <div className="home_row">
          <Product 
          id={92}
          title="NutriBullet NBR-0601 Nutrient Extractor, 600W, Gray"
          price={59.99}
          image='https://m.media-amazon.com/images/I/71D3Qd2CGbL._AC_UY218_.jpg' 
          rating={4}/>
          <Product 
          id={93}
          title="Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal"
          price={59.99}
          image='https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_UY218_.jpg' 
          rating={4}/>
          <Product 
          id={94}
          title="2020 Apple iPad Pro (11-inch, Wi-Fi, 256GB) - Space Gray (2nd Generation)"
          price={59.99}
          image='https://m.media-amazon.com/images/I/815ztYEEwYL._AC_UY218_.jpg' 
          rating={4}/>
        </div>
        <div className="home_row">
          <Product 
          id={95}
          title="SAMSUNG M5 Series 27-Inch FHD 1080p Smart Monitor & Streaming TV (Tuner-Free), Netflix, HBO, Prime Video,"
          price={59.99}
          image='https://m.media-amazon.com/images/I/81dUzXzVIPS._AC_UY218_.jpg' 
          rating={4}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
