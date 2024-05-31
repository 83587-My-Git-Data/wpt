import axios from "axios";
import { config } from "./config";

export async function register(firstName, lastName, email, password) {
  try {
    // post body
    const body = { firstName, lastName, email, password };

    // send the post request
    const response = await axios.post(
      `${config.serverUrl}/admin/register`,
      body
    );

    // return the json body from response object
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }

  return null;
}

export async function login(email, password) {
  try {
    const body = { email, password };

    const response = await axios.post(`${config.serverUrl}/admin/login`, body);

    return response.data;
  } catch (ex) {
    console.log(`exception`, ex);
  }
  return null;
}
