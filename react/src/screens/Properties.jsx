import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import {
  deleteProperty,
  getProperties,
  loadProperty,
} from "../services/property";
import { config } from "../services/config";
import { toast } from "react-toastify";

function Properties() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  const loadProperties = async () => {
    const result = await getProperties();
    if (result["status"] == "success") {
      setProperties(result["data"]);
    }
    console.log(properties);
  };

  useEffect(() => {
    loadProperties();
  }, []);

  const location = useLocation();

  const onDelete = async (id) => {
    const result = await deleteProperty(id);
    if (result["status"] == "success") {
      toast.success("Deleted Successfully");
      loadProperties();
    } else {
      toast.error();
    }
  };
  const onDetails = async (id) => {
    const result = await loadProperty(id);
    if (result["status"] == "success") {
      toast.success("Fetching Details");
      navigate("/propertyDetails", { state: result });
    }
  };

  return (
    <div>
      <Navbar />
      <h2 className="page-header">Properties</h2>
      <Link to="/addProperty" className="btn btn-primary ms-2 mb-3">
        Add Property
      </Link>
      <div className="row" style={{ textAlign: "center" }}>
        <div className="col">
          <label className="mb-3" htmlFor="">
            #
          </label>
        </div>
        <div className="col">
          <label className="mb-3" htmlFor="">
            Image
          </label>
        </div>
        <div className="col">
          <label className="mb-3" htmlFor="">
            Title
          </label>
        </div>
        <div className="col">
          <label htmlFor="">Address</label>
        </div>
        <div className="col">
          <label htmlFor="">Owner Name</label>
        </div>
        <div className="col">
          <label htmlFor="">Contact Number</label>
        </div>
        <div className="col">
          <label htmlFor="">Rent</label>
        </div>
        <div className="col">
          <label htmlFor="">Actions</label>
        </div>
      </div>
      {properties.length == 0 && (
        <h3 className="mt-5 " style={{ textAlign: "center" }}>
          There are no properties at the moment. Please use Add Property button
          to add one.
        </h3>
      )}

      {properties.length > 0 &&
        properties.map((property, index) => {
          return (
            <div className="row" style={{ textAlign: "center" }}>
              <div
                className="col d-flex flex-column justify-content-center "
                style={{ border: "solid black" }}
              >
                <label className="mb-3" htmlFor="">
                  {index + 1}
                </label>
              </div>
              <div
                className="col d-flex flex-column justify-content-center align-items-center"
                style={{ border: "solid black" }}
              >
                <img
                  style={{ width: 100, height: 100 }}
                  src={`${config.serverUrl}/image/${property["profileImage"]}`}
                  alt=""
                />
              </div>
              <div
                className="col d-flex flex-column justify-content-center"
                style={{ border: "solid black" }}
              >
                <label htmlFor="">{property["title"]}</label>
              </div>
              <div
                className="col d-flex flex-column justify-content-center"
                style={{ border: "solid black" }}
              >
                <label htmlFor="">{property["address"]}</label>
              </div>
              <div
                className="col d-flex flex-column justify-content-center"
                style={{ border: "solid black" }}
              >
                <label htmlFor="">{property["ownerName"]}</label>
              </div>
              <div
                className="col d-flex flex-column justify-content-center"
                style={{ border: "solid black" }}
              >
                <label htmlFor="">{property["contactNo"]}</label>
              </div>
              <div
                className="col d-flex flex-column justify-content-center"
                style={{ border: "solid black" }}
              >
                <label htmlFor="">{property["rent"]}</label>
              </div>
              <div
                className="col d-flex flex-column justify-content-center"
                style={{ textAlign: "center", border: "solid black" }}
              >
                <div>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => {
                      onDelete(property["id"]);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      onDetails(property["id"]);
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Properties;
