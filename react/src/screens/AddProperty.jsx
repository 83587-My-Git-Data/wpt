import { useState } from "react";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addProperty } from "../services/property";
import Amenity from "../components/aminities";
import { computeHeadingLevel } from "@testing-library/react";

function AddProperty() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [isLakeView, setIsLakeView] = useState(0);
  const [isTV, setIsTV] = useState(false);
  const [isAC, setIsAC] = useState(false);
  const [isWifi, setIsWifi] = useState(false);
  const [isMiniBar, setIsMiniBar] = useState(false);
  const [isBreakfast, setIsBreakfast] = useState(false);
  const [isParking, setIsParking] = useState(false);
  const [guests, setGuestRooms] = useState("");
  const [bedrooms, setBedRooms] = useState("");
  const [beds, setBed] = useState("");
  const [bathrooms, setBathRooms] = useState("");
  const [rent, setRent] = useState("");
  const [image, setImage] = useState(undefined);

  const navigate = useNavigate();

  const onSave = async () => {
    if (title.length == 0) {
      toast.error("Please add the Title");
    } else if (description.length == 0) {
      toast.error("Please add the Description");
    } else if (address.length == 0) {
      toast.error("Please add the Address");
    } else if (guests.length == 0) {
      toast.error("Please add the Guest Rooms");
    } else if (bedrooms.length == 0) {
      toast.error("Please add the Bed Rooms");
    } else if (beds.length == 0) {
      toast.error("Please add the Bath Rooms");
    } else if (bathrooms.length == 0) {
      toast.error("Please add the Bath Rooms");
    } else {
      console.log("hi");
      const result = await addProperty(
        title,
        description,
        address,
        contactNo,
        ownerName,
        isLakeView,
        isTV,
        isAC,
        isWifi,
        isMiniBar,
        isBreakfast,
        isParking,
        guests,
        bedrooms,
        beds,
        bathrooms,
        rent,
        image
      );
      const body = {
        title,
        description,
        address,
        contactNo,
        ownerName,
        isLakeView,
        isTV,
        isAC,
        isWifi,
        isMiniBar,
        isBreakfast,
        isParking,
        guests,
        bedrooms,
        beds,
        bathrooms,
        rent,
        image,
      };

      console.log(body  );
      if (result["status"] == "success") {
        toast.success("Property added Successfully");
        navigate("/properties");
      } else {
        toast.error(result["error"]);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <h2 className="page-header">AddProperty</h2>
      <div className=" container form">
        <div className="row">
          <div className="col mb-3">
            <label htmlFor="">Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="">Contact Name</label>
            <input
              onChange={(e) => setOwnerName(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="">Contact Number</label>
            <input
              onChange={(e) => setContactNo(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <label htmlFor="">#Guest Rooms</label>
            <input
              onChange={(e) => setGuestRooms(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="">#Bed Rooms</label>
            <input
              onChange={(e) => setBedRooms(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="">#Beds</label>
            <input
              onChange={(e) => setBed(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <label htmlFor="">Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="">Address</label>
            <textarea
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <label htmlFor="">#Bath Rooms</label>
            <input
              onChange={(e) => setBathRooms(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="">#Rent</label>
            <input
              onChange={(e) => setRent(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <h3>Amenities</h3>
        <Amenity
          onChange={(e) => setIsLakeView(e)}
          title="Lake view"
          icon="bi-water"
        />
        <Amenity onChange={(e) => setIsTV(e)} title="TV" icon="bi-tv" />
        <Amenity onChange={(e) => setIsAC(e)} title="AC" icon="bi-fan" />
        <Amenity onChange={(e) => setIsWifi(e)} title="Wifi" icon="bi-wifi" />
        <Amenity
          onChange={(e) => setIsMiniBar(e)}
          title="Minibar"
          icon="bi-cup-straw"
        />
        <Amenity
          onChange={(e) => setIsBreakfast(e)}
          title="Breakfast"
          icon="bi-egg-fried"
        />
        <Amenity
          onChange={(e) => setIsParking(e)}
          title="Parking"
          icon="bi-p-circle"
        />
        <div className="mb-3">
          <label htmlFor="">Image</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>

        <div className="mb-3">
          <button onClick={onSave} className="btn btn-success me-2">
            Save
          </button>
          <Link to="/properties" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
