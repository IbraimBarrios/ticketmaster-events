import { useForm } from "react-hook-form";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClearClick = () => {
    reset();
  };

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label>
        Name
        <input type="text" {...register("name", { required: true })} />
      </label>
      <br />
      {errors.name && <span>Name field is required</span>}
      <label>
        Age
        <input type="number" {...register("age", { required: true })} />
      </label>
      <br />
      {errors.age && <span>Age field is required</span>}
      <label>
        Address
        <input type="text" {...register("address", { required: true })} />
      </label>
      <br />
      {errors.address && <span>Address field is required</span>}
      <label>
        Zipcode
        <input type="text" {...register("zipcode", { required: true })} />
      </label>
      <br />
      {errors.zipcode && <span>Zipcode field is required</span>}
      <label>
        Phone
        <input type="text" {...register("phone")} />
      </label>
      <br />
      <div>
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignupForm;
