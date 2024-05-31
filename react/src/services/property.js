import axios from "axios";
import { config } from "./config";

export async function getProperties() {
  try {
    const token = sessionStorage["token"];
    const response = await axios.get(`${config.serverUrl}/property`, {
      headers: { token },
    });
    console.log(response.data);
    return response.data;
  } catch (ex) {
    console.log(`exception`, ex);
  }

  return null;
}

export async function addProperty(
  title,
  details,
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
) {
  const body = new FormData();
  body.append("title", title);
  body.append("details", details);
  body.append("address", address);
  body.append("contactNo", contactNo);
  body.append("ownerName", ownerName);
  body.append("isLakeView", isLakeView ? 1 : 0);
  body.append("isTV", isTV ? 1 : 0);
  body.append("isAC", isAC ? 1 : 0);
  body.append("isWifi", isWifi ? 1 : 0);
  body.append("isMiniBar", isMiniBar ? 1 : 0);
  body.append("isBreakfast", isBreakfast ? 1 : 0);
  body.append("isParking", isParking ? 1 : 0);
  body.append("guests", guests);
  body.append("bedrooms", bedrooms);
  body.append("beds", beds);
  body.append("bathrooms", bathrooms);
  body.append("rent", rent);
  body.append("image", image);

  console.log(body);
  try {
    const token = sessionStorage["token"];
    const response = await axios.post(`${config.serverUrl}/property`, body, {
      headers: { token },
    });

    return response.data;
  } catch (ex) {
    console.log(`exception`, ex);
  }
  return null;
}

export async function deleteProperty(id) {
  try {
    const token = sessionStorage["token"];
    const response = await axios.delete(`${config.serverUrl}/property/${id}`, {
      headers: { token },
    });
    return response.data;
  } catch (ex) {
    console.log(`exception`, ex);
  }
}

export async function loadProperty(id) {
  try {
    const token = sessionStorage["token"];
    const response = await axios.get(
      `${config.serverUrl}/property/details/${id}`,
      {
        headers: { token },
      }
    );

    return response.data;
  } catch (ex) {
    console.log(`exception`, ex);
  }
}
