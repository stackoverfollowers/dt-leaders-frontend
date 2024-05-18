// import { createMutation } from '@farfetched/core';

// const createEntityMutation = createMutation({
//   handler: async ({ name, id }) => {
//     const response = await fetch(`https://api.salo.com/api/`, {
//       method: 'POST',
//       body: JSON.stringify({ name, id }),
//     });

//     return response.json();
//   },
// });

// import { createQuery } from '@farfetched/core';
// import { createCommonRequestFx } from '@shared/api';

// type SearchParams = {
//   query: string;
//   page: number;
// };

// type SearchMovies = {
//   results: {
//     id: string;
//     name: string;
//   }[];
// };

// export const searchByNameQuery = createQuery({
//   effect: createCommonRequestFx<SearchParams, SearchMovies>(
//     ({ query, page }) => ({
//       url: '/v1.2/movie/search',
//       params: {
//         query,
//         page,
//         limit: 30,
//       },
//     })
//   ),
// });
