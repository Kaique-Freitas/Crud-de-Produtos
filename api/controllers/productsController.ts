interface ProductsController {
  list: (request: Request, response: Response) => Promise<JSON>;
  register: (request: Request, response: Response) => Promise<JSON>;
  update: (request: Request, response: Response) => Promise<JSON>;
  deletes: (request: Request, response: Response) => Promise<JSON>;
}

export const productsController: ProductsController = {
  list: async (request, response) => {
    return response.json();
  },
  register: (request, response) => {
    return response.json();
  },
  update: (request, response) => {
    return response.json();
  },
  deletes: (request, response) => {
    return response.json();
  },
};
