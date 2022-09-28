import axios from "axios";

export const getWorks = async (search) => {
  if (search === "") {
    return [];
  }

  const response = await axios.get(
    "https://reststop.randomhouse.com/resources/works" +
      `?start=0&max=5&expandLevel=1&search=${search}`
  );

  return response.data?.work || [];
};
