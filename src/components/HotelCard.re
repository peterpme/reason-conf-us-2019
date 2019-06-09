[%bs.raw {|require('./HotelCard.css')|}];

[@react.component]
let make = (~hotelName, ~address, ~description, ~bookingLink, ~imageUrl) => {
  <div className="HotelCard">
    <img className="HotelCard-avatar" src=imageUrl alt="Image of the Hotel" />
    <span className="HotelCard-name"> hotelName->React.string </span>
    <div className="HotelCard-infoContainer">
      <span className="HotelCard-address"> address->React.string </span>
      <p className="HotelCard-description"> description->React.string </p>
    </div>
    <a className="HotelCard-bookingLink" href=bookingLink>
      "Book Your Stay"->React.string
    </a>
  </div>;
};