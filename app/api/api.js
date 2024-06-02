// src/api.js

import axios from "axios";

const API_BASE_URL = "http://localhost:5254/api";

export const createDesign = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5254/api/Design/CreateDesign",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDesignsByUserId = async (userId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/Design/GetDesignsByUserId/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching designs:", error);
    throw error;
  }
};
