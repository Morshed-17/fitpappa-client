import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({
        searchQuery,
        categoryIds,
        sort,
        page,
        limit,
        minPrice,
        maxPrice,
      }) => {
        //*Build the query string dynamically

        const params = new URLSearchParams();

        if (searchQuery) params.append("search", searchQuery);
        if (categoryIds && categoryIds.length > 0) {
          params.append("categories", categoryIds);
        }

        if (sort) params.append("sort", sort);
        if (minPrice) params.append("minPrice", minPrice.toString());
        if (maxPrice) params.append("maxPrice", maxPrice.toString());
        if (page) params.append("page", String(page));
        if (limit) params.append("limit", String(limit));

        return {
          url: `/products?${params.toString()}`,
          method: "GET",
        };
      },
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        //*Build the query string dynamically
        

        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi;
