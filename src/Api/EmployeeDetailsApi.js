import axios from "axios";

const fetchData = async (url, params) => {
  return axios.get(url, params).then((result) => result.data);
};

export { fetchData };
