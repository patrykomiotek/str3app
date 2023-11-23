import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "../../ui";
import { FieldValues, createProductSchema } from "../types/dtos";

type Props = {
  onSubmit: (data: FieldValues) => void;
};

export const ProductForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(createProductSchema),
  });

  const handleProductForm: SubmitHandler<FieldValues> = (data) => {
    // console.log(data);
    onSubmit(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleProductForm)}>
        <Input label="Name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
        <Input
          label="Price"
          type="number"
          {...register("price", { valueAsNumber: true })}
        />
        {errors.price && <p>{errors.price.message}</p>}
        <Button label="Send" />
      </form>
    </div>
  );
};
