// import '../styles/App.css'
import React from "react";
import Image from "next/image";
export default function ForLandlords() {
  // const image = "https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
  return (
    <div className="ForLandlords">
      <div className="features">
        <div className="feature">
          <div className="feature-title">
            <h1>Instant Email</h1>
          </div>
          <div className="sub-features">
            Instant Emails | Instant Emails | Instant Emails
          </div>
        </div>
        <div className="feature">
          <div className="feature-title">
            <h1>Instant Email</h1>
          </div>
          <div className="sub-features">
            Instant Emails | Instant Emails | Instant Emails
          </div>
        </div>
        <div className="feature">
          <div className="feature-title">
            <h1>Instant Email</h1>
          </div>
          <div className="sub-features">
            Instant Emails | Instant Emails | Instant Emails
          </div>
        </div>
      </div>
      <div className="feature-view">
        <div className="right-btn">
          <button>R</button>
        </div>
        <div className="feature-view-title">
          <h1>Instant Email</h1>
        </div>
        <div className="feature-image-description">
          <div className="image-preview">
            <Image
              src="/DSC_2778.jpg"
              alt="Landlord Image"
              className="ld-img"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="feature-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum consequuntur, incidunt dolorem, ipsum sint asperiores
              itaque molestias{" "}
            </p>
          </div>
        </div>
        <div className="left-btn">
          <button>L</button>
        </div>
      </div>
    </div>
  );
}
