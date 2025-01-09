import { baseApi } from "../baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (payload) => {
        return {
          url: "/orders",
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
