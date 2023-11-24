import { http, HttpResponse } from "msw";

import { BASE_URL } from "../services/config"; // env.variable

export const handlers = [
  http.get(`${BASE_URL}/products/:id`, ({ request, params, cookies }) => {
    // return HttpResponse.error();
    // return new HttpResponse(HttpResponse.json({}), {
    //   status: 404,
    // });
    return HttpResponse.json({
      id: "rec9poYzLSg6b61Nh",
      fields: {
        name: "Product 4567",
        description: "Lorem ipsum",
        price: 567,
      },
    });
    // return HttpResponse.json({});
  }),
];
