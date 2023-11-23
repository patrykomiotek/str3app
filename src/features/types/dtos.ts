import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(5, { message: "Name must be at least 5 characters  " }),
  price: z.number().positive({ message: "Must be positive :)" }),
});

// CreateProductDto
export type FieldValues = z.infer<typeof createProductSchema>;

// export type FieldValues = {
//   name: string;
//   price: number;
// };
