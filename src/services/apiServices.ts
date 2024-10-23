// src/services/apiService.ts
import axios from 'axios';

const API_BASE_URL = 'https://localhost:7110/api';

export const getDiaryEntries = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/DiaryEntries`);
    return response.data;
  } catch (error) {
    console.error("Error fetching diary entries", error);
    throw error;
  }
};
