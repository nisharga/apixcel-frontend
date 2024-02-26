import { createApi } from "@reduxjs/toolkit/query";
import { axiosBaseQuery } from "../axiosBaseQuery/axiosBaseQuery";
import { tagTypesList } from "../tagTypes";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
      //end points..
    }),
    tagTypes: tagTypesList,
  });