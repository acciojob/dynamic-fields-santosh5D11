import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  const addField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  const handleChange = (index, event) => {
    const updatedFields = [...fields];

    updatedFields[index][event.target.name] = event.target.value;

    setFields(updatedFields);
  };

  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);

    setFields(updatedFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form Data:", fields);

    setFields([{ name: "", age: "" }]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleChange(index, e)}
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
            />

            <button type="button" onClick={() => removeField(index)}>
              Remove
            </button>
          </div>
        ))}

        <div className="button-container">
          <button type="button" onClick={addField}>
            Add More..
          </button>

          <button type="submit">Submit</button>
        </div>
      </form>

      <p>After clicking submit check console for data</p>
    </div>
  );
};

export default App;
