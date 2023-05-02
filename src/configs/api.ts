import axios from "axios";

export const mhrsApi = axios.create({
  baseURL: 'https://prd.mhrs.gov.tr/api',
})