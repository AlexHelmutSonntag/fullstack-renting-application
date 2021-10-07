import Image from "next/image";

export default function ImagesLandlordDetails() {
  return (
    <div className="ImagesLandlordDetails">
      <div className="offer-images"/>
      <div className="landlord-details">
        <div className="image-name">
          <div className="img">
            <Image
              src="/DSC_2778.jpg"
              alt="Landlord Image"
              className="ld-img"
              objectFit="cover"
              layout="fill"
            />
          </div>

          <div className="name">
            <h1>Abdulla Alkhulaqui</h1>
          </div>
        </div>
        <div className="contact-title">
          <h1>Contact</h1>
        </div>
        <div className="contacts">
          <div className="phone">
            <h3>Phone</h3>
            <p>+36 34 345 2343</p>
          </div>
          <div className="email">
            <h3>Email</h3>
            <p>abdulla@gmail.com</p>
          </div>
          <div className="social-media">
            <h3>Social Media</h3>
            <p>F G H</p>
          </div>
        </div>
        <div className="message-title">
          <h2>Send a message to Abdulla</h2>
        </div>
        <div className="message">
          <textarea
            name=""
            id="msg"
            placeholder="Write your message here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}
