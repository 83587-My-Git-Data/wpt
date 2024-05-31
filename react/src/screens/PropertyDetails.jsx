import { Link, useLocation, useNavigate } from "react-router-dom";
import Amenity from "../components/aminities";
import Navbar from "../components/navbar";
import { useState } from "react";

function PropertyDetails() {
  const location = useLocation();
  const result = location.state;
  console.log(result.data);
  const [address, setAddress] = useState(result.data.address);
  const [bathrooms, setBathrooms] = useState(result.data.bathrooms);
  const [bedrooms, setBedrooms] = useState(result.data.bedrooms);
  const [beds, setBeds] = useState(result.data.beds);
  const [contactNo, setContactNo] = useState(result.data.contactNo);
  const [details, setDetails] = useState(result.data.details);
  const [guests, setGuests] = useState(result.data.guests);
  const [isAC, setIsAc] = useState(result.data.isAC);
  const [isBreakfast, setIsBreakfast] = useState(result.data.isBreakfast);
  const [isLakeView, setIsLakeView] = useState(result.data.isLakeView);
  const [isMiniBar, setIsMiniBar] = useState(result.data.isMiniBar);
  const [isParking, setIsParking] = useState(result.data.isParking);
  const [isTV, setIsTV] = useState(result.data.isTV);
  const [isWifi, setIsWifi] = useState(result.data.isWifi);
  const [ownerName, setOwnerName] = useState(result.data.ownerName);
  // const [address, setAddress] = useState(data.address);
  const [rent, setRent] = useState(result.data.rent);
  const [title, setTitle] = useState(result.data.title);

  return (
    <div>
      <Navbar />
      <h2 className="page-header">PropertyDetails</h2>
      <div className=" container form">
        <div className="row">
          <div className="col mb-3">
            <label htmlFor="">Title</label>
            <input value={title} type="text" className="form-control" />
          </div>
          <div className="col mb-3">
            <label htmlFor="">Contact Name</label>
            <input value={ownerName} type="text" className="form-control" />
          </div>
          <div className="col mb-3">
            <label htmlFor="">Contact Number</label>
            <input
              value={contactNo}
              id=""
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <label htmlFor="">#Guest Rooms</label>
            <input value={guests} type="text" className="form-control" />
          </div>
          <div className="col mb-3">
            <label htmlFor="">#Bed Rooms</label>
            <input value={bedrooms} type="text" className="form-control" />
          </div>
          <div className="col mb-3">
            <label htmlFor="">#Beds</label>
            <input value={beds} type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <label htmlFor="">Description</label>
            <textarea value={details} type="text" className="form-control" />
          </div>
          <div className="col mb-3">
            <label htmlFor="">Address</label>
            <textarea value={address} type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <label htmlFor="">#Bath Rooms</label>
            <input value={bathrooms} type="text" className="form-control" />
          </div>
          <div className="col mb-3">
            <label htmlFor="">#Rent</label>
            <input value={rent} type="text" className="form-control" />
          </div>
        </div>
        <h3>Amenities</h3>
        <Amenity title="Lake view" icon="bi-water" condition={isLakeView} />
        <Amenity title="TV" icon="bi-tv" condition={isTV} />
        <Amenity title="AC" icon="bi-fan" condition={isAC} />
        <Amenity title="Wifi" icon="bi-wifi" condition={isWifi} />
        <Amenity title="Minibar" icon="bi-cup-straw" condition={isMiniBar} />
        <Amenity
          title="Breakfast"
          icon="bi-egg-fried"
          condition={isBreakfast}
        />
        <Amenity title="Parking" icon="bi-p-circle" condition={isParking} />
        <div className="mb-3">
          <label htmlFor="">Image</label>
          <input type="file" accept="image/*" className="form-control" />
        </div>

        <div className="mb-3">
          <button className="btn btn-success me-2">Save</button>
          <Link to="/properties" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
