[%bs.raw {|require('./HotelGrid.css')|}];

[@react.component]
let make = (~className, ~hotels) => {
  <div className={"HotelGrid " ++ className}>
    {hotels
     ->Belt.Array.map(h =>
         <HotelCard
           hotelName=h##name
           address=h##address
           description=h##info
           imageUrl=h##imageUrl
           bookingLink=h##bookingLink
         />
       )
     ->ReasonReact.array}
  </div>;
};
