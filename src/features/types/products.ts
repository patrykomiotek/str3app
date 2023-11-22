export interface ProductDto {
  id: string;
  fields: {
    name: string;
    description: string;
  };
}

export interface ProductsResponse {
  records: ProductDto[];
}
