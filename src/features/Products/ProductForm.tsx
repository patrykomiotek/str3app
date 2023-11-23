import { useForm, type SubmitHandler } from "react-hook-form";
import { Button, Input } from "../../ui";

type FieldValues = {
  name: string;
  price: number;
};

export const ProductForm = () => {
  const { register, handleSubmit } = useForm<FieldValues>();

  const handleProductForm: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleProductForm)}>
        <Input label="Name" {...register("name", { required: true })} />
        <Input
          label="Price"
          type="number"
          {...register("price", { valueAsNumber: true, required: true })}
        />
        <Button label="Send" />
      </form>
    </div>
  );
};
