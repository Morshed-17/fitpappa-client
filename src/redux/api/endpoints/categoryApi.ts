import { baseApi } from "../baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => {
        return {
          url: "/categories",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoryApi;
