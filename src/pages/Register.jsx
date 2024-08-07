import { useForm } from "react-hook-form";
import "../assets/styles/Register.css";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="register-container">
      <div className="register">
        {/* <div className="register-group"> */}
        <div className="register-heading">
          <h1>REGISTER</h1>
          <h5>Please fill in the information below:</h5>
        </div>
        <div className="register-form">
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <input
              placeholder="Firstname"
              type="text"
              {...register("firstName", { required: true })}
              className="firstname"
            />
            {errors.firstName && <p>First name is required.</p>}
            <input
              placeholder="Lastname"
              type="text"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && <p>Last name is required.</p>}
            <input
              placeholder="Your email"
              type="email"
              {...register("email", { required: true }, { pattern: /\d+/ })}
            />
            {errors.email && <p>Last name is required.</p>}
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true }, { pattern: /\d+/ })}
            />
            {errors.password && <p>Please enter password.</p>}
            <button type="submit">Create my account</button>
          </form>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Register;
