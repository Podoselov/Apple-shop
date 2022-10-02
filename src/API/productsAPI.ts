import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IGadget } from '../store/reducers/typeAppleReducers';

const productsAPI = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (build) => ({
    getAllProducts: build.query<IGadget[], number>({
      query: (limit = 10) => ({
        url: '/products',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productsAPI;
export { productsAPI };
