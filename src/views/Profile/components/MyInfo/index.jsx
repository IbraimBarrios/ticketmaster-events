import { useForm } from "react-hook-form";
import styles from "./MyInfo.module.css";
import { useEffect } from "react";

const USER_DATA = "userData";

const MyInfo = () => {
  const { handleSubmit, register, setValue } = useForm();

  const handleFromSubmit = (data) => {
    try {
      localStorage.setItem(USER_DATA, JSON.stringify(data));
      alert("Usuario actualizado.");
    } catch (error) {
      alert("Ha ocurrido un error.");
    }
  };

  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {};
      setValue("name", userData?.name);
      setValue("email", userData?.email);
      setValue("age", userData?.age);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(handleFromSubmit)} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          {...register("name", {
            required: true,
            minLength: 1,
            maxLength: 120,
          })}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          type="text"
          {...register("email", { required: true })}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Age
        <input
          type="number"
          {...register("age", {
            required: true,
            min: 1,
            max: 120,
            valueAsNumber: true,
          })}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.submitButton}>
        Save
      </button>
    </form>
  );
};

export default MyInfo;
