import { search } from "fast-fuzzy";

import axiosInstance from "./axiosInstance";

class FruitsAPI {
  fetchData = async (query) => {
    try {
      const response = await axiosInstance.get("fruits", {
        params: {
          _embed: query,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Failed to fetch autocomplete data:", error);
    }
  };

  searchFruits = async (query) => {
    const data = await this.fetchData(query);
    const lowerCaseQuery = query.toLowerCase();
    const random =
      lowerCaseQuery === "b" || lowerCaseQuery === "k"
        ? 5000
        : Math.floor(Math.random() * 500) + 500;
    await this.#delay(random);

    const fruitNameList = search(query, data, {
      // @ts-ignore
      keySelector: (obj) => obj.name,
      // @ts-ignore
    });
    return fruitNameList;
  };

  #delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
}

const fruitsAPI = new FruitsAPI();

export default fruitsAPI;
