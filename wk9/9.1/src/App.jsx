import { useState } from 'react'
import './App.css'

function App() {
  const [formObj, setFormObj] = useState ({
    firstName: "",
    lastName: "", 
    streetAddress: "", 
    state: "", 
    country: "", 
    favColors: [],
  })
  
  const [selectResponse, setSelectResponse] = useState ("");

  function handleSelect(event) {
    setSelectResponse(event.target.value);}

  const selectOptions = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
  
  
  
  function handleCheckBox(event) {
    if (formObj.favColors.includes(event.target.id)) {
      setFormObj.favColors (favColors.filter ((favColors) => {
        return favColors !== event.target.id;
      }))
    } else {
      setFormObj.favColors ([...formObj.favColors, event.target.id])
    }
  }

  function handleChange(event) {
    const textItems = ["firstName", "lastName", "streetAddress", "country"]
    if (textItems.includes(event.target.name)) {
      setFormObj ((prevForm) => {
        return {
          ...prevForm, 
          [event.target.name] : event.target.value
        }
      })
    }
    if (event.target.name === "state") {
      setFormObj ({
        ...formObj, 
        state: event.target.value
      })
    }
    if (event.target.name === "favColors") {
      if (formObj.favColors.includes(event.target.id)) {
        setFormObj ({
          ...formObj, 
          favColors: formObj.favColors.filter ((favColors) => {
            return favColors !== event.target.id;
          })
        })
      } else {
        setFormObj ({
          ...formObj, 
          favColors: [...formObj.favColors, event.target.id]
        })
      }
    }
  }

  function handleSubmit (event) {
    event.preventDefault();
    console.log("Form", formObj)
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Alpaca Fan Club Registration Form</legend>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input 
          id="firstName"
          type="text"
          name="firstName"
          value={formObj.firstName}
          onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input 
          id="lastName"
          type="text"
          name="lastName"
          value={formObj.lastName}
          onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="streetAddress">Street Address</label>
          <input 
          id="streetAddress"
          type="text"
          name="streetAddress"
          value={formObj.streetAddress}
          onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="state">State/Province</label>
          <select 
           name="state"
            id="state"
            onChange={handleChange}
            value={formObj.selectResponse}
          >
            {selectOptions.map((option, index) => {
              return (<option
                key={index}
                value={option.toLowerCase()}
                >
                  {option}
                </option>
              )
            })}
            </select>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input 
          id="country"
          type="text"
          name="country"
          value={formObj.country}
          onChange={handleChange}/>
        </div>
        Favorite Alpaca Colors
        <div>
          <label htmlFor="favColors">Pink</label>
          <input 
          type="checkbox"
          name="favColors"
          id="pink"
          value={formObj.favColors.includes("pink")}
          onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="favColors">Orange</label>
          <input 
          type="checkbox"
          name="favColors"
          id="orange"
          value={formObj.favColors.includes("orange")}
          onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="favColors">Green</label>
          <input 
          type="checkbox"
          name="favColors"
          id="green"
          value={formObj.favColors.includes("green")}
          onChange={handleChange}/>
        </div>
      </fieldset>
      <button type="submit">
        SUBMIT
      </button>
      {/* <fieldset>
      <legend>Results</legend>
      <div>
        
      </div>
      </fieldset> */}
    </form>
  )
}

export default App
