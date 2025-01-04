import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => {
        return {
          url: "/products",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
