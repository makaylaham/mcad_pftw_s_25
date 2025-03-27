import './App.css'
import { useForm } from "eslint-plugin-react-hooks"
let useForm;

function App() {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <h1>Alpaca Registration Form</h1>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" {...register("firstName")} />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}
export default App
