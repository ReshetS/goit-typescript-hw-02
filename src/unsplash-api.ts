import axios from "axios";
import { SearchResults } from "./components/types";

axios.defaults.baseURL = "https://api.unsplash.com/";

const ACCESS_KEY: string = "oSEW0jMBiY3J7B3iy93whVrHiXBNkfbZRnUx5jPubvs";

export default async function getPhotos(
  searchQuery: string,
  page: number
): Promise<SearchResults> {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: encodeURIComponent(searchQuery),
      page,
      per_page: 12,
      orientation: "landscape",
    },
  });
  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
}
