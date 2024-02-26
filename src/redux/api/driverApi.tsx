import { baseApi } from "../baseApi/baseApi";
 
const driverApi = baseApi.injectEndpoints({
  endpoints: (build) => ({ 
    getSingleTodo: build.query({
      query: () => ({
        url: `/todos`,
        method: "GET", 
      }),  
    }) 
  }),
});

export const {
   useGetSingleTotoQuery
} = driverApi;
