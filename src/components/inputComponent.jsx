import { useState } from "react";

export default function Input({ inputName, inputType, value = "" }) {
    const [newValue, setValue] = useState(value);
    return (
      <>
        <label htmlFor={inputName}>{inputName}</label>
        <input
          type={inputType}
          id={inputName.replace(" ", "_")}
          value={newValue}
          onChange={(event) => setValue(event.target.value)}
        />
      </>
    );
  }