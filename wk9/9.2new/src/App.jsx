
import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  function getFormData(data) {
    console.log("form data", data);
  }
// console.log("errors", errors);
  return (
    <div>
      <h1>Alpaca Registration Form</h1>
      <form onSubmit={handleSubmit(getFormData)}>
        <fieldset>
          <legend>Personal Information</legend>
          <div className="form-group">
            <label htmlFor= 'firstName'>First Name</label>
            <input type="text" id ="firstName"  {...register("firstName", {required:true})} />
            {errors.firstName ? (<p className="error">First Name is required!</p>): <></>}
          </div>
          <div className="form-group">
            <label htmlFor= 'lastName'>Last Name</label>
            <input type="text" id ="lastName" {...register("lastName")} />
          </div>
          <div className="form-group">
            <label htmlFor= 'address'>Street Address</label>
            <input type="text" id ="address" {...register("address")} />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <select id="state" {...register("state")}>
              <option value="IN">Indiana</option>
              <option value="KY">Kentucky</option>
              <option value="OH">Ohio</option>
              <option value="FL">Florida</option>
              <option value="TX">Texas</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor= 'country'>Country</label>
            <input type="text" id ="country" {...register("country")} />
          </div>
        </fieldset>
        <fieldset>
          <legend>Alpaca Preferences</legend>
          <div className="form-group">
            <p>Favorite Alpaca Color</p>
            <label>Lilac<input type="checkbox" value="lilac" {...register("favColor")}></input></label>
            <label>Maroon<input type="checkbox" value="maroon" {...register("favColor")}></input></label>
            <label>Lime<input type="checkbox" value="lime" {...register("favColor")}></input></label>
            <label>Cyan<input type="checkbox" value="cyan" {...register("favColor")}></input></label>
          </div>
          <div className="form-group">
            <label htmlFor="">What do you like about Alpacas?</label>
            <textarea {...register("alpacaEssay")}></textarea>
          </div>
        </fieldset>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default App
