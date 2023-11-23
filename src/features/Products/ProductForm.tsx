import { useForm, type SubmitHandler } from "react-hook-form";
import { Button, Input } from "../../ui";
import { FieldValues } from "../types/dtos";

type Props = {
  onSubmit: (data: FieldValues) => void;
};

export const ProductForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const handleProductForm: SubmitHandler<FieldValues> = (data) => {
    // console.log(data);
    onSubmit(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleProductForm)}>
        <Input label="Name" {...register("name", { required: true })} />
        {errors.name && <p>Field is required</p>}
        <Input
          label="Price"
          type="number"
          {...register("price", { valueAsNumber: true, required: true })}
        />
        {errors.price && <p>Field is required</p>}
        <Button label="Send" />
      </form>
    </div>
  );
};
