import Input from "./inputComponent.jsx";
import { useState } from "react";
import '../styles/practicalInfoStyle.css'
function SubmitPracticalInfoSegment({ values, someFunc }) {
  const [newValue, setValue] = useState(values["jobDescription"]);

  return (
    <>
      <div className="practicalInfo">
      <h1>Work Experience</h1>
        <div className="boxBody">
          <form action="submit">
            <Input
              inputName="Company Name"
              inputType={"text"}
              value={values["companyName"]}
            />
            <Input
              inputName="Job Title"
              inputType={"text"}
              value={values["jobTitle"]}
            />
            <label htmlFor="Job_Description">Job Description</label>
            <textarea
              id="Job_Description"
              value={newValue}
              onChange={(event) => {
                setValue(event.target.value);
              }}
            ></textarea>
            <Input
              inputName="From"
              inputType={"date"}
              value={values["jobFromDate"]}
            />
            <Input
              inputName="Until"
              inputType={"date"}
              value={values["jobUntilDate"]}
            />
            <button type="button" className="practicalInfo" onClick={someFunc}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function DisplayPracticalInfoSegment({ values, someFunc }) {
  return (
    <>
      <div className="displayedInfo">
      <h1>Work Experience</h1>
        <div className="boxBody">
          <div>
            <h2>Company Name</h2>
            <p>{values["companyName"]}</p>
          </div>
          <div>
            <h2>Job Title</h2>
            <p>{values["jobTitle"]}</p>
          </div>
          <div>
            <h2>Job Description</h2>
            <p>{values["jobDescription"]}</p>
          </div>
          <div>
            <h2>From</h2>
            <p>{values["jobFromDate"]}</p>
          </div>
          <div>
            <h2>Until</h2>
            <p>{values["jobUntilDate"]}</p>
          </div>
          <button type="button" className="displayedInfo" onClick={someFunc}>
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default function PracticalInfoComponent({
  values,
  state,
  function1,
  function2,
}) {
  let child;
  if (state) {
    child = (
      <DisplayPracticalInfoSegment values={values} someFunc={function1} />
    );
  } else {
    child = <SubmitPracticalInfoSegment values={values} someFunc={function2} />;
  }
  return <>{child}</>;
}
