import Input from "./inputComponent.jsx";
import '../styles/educationalInfoStyle.css'

function SubmitEducationalInfoSegment({ values, someFunc }) {
  return (
    <>
      <div className="educationalInfo">
      <h1>Educational Information</h1>
        <div className="boxBody">
          <form action="submit">
            <Input
              inputName="School Name"
              inputType={"text"}
              value={values["schoolName"]}
            />
            <Input
              inputName="Title"
              inputType={"text"}
              value={values["schoolTitle"]}
            />
            <Input
              inputName="Date"
              inputType={"date"}
              value={values["schoolDate"]}
            />
            <button type="button" className="educationalInfo" onClick={someFunc}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function DisplayEducationalInfoSegment({ values, someFunc }) {
  return (
    <>
      <div className="displayedInfo">
      <h1>Educational Information</h1>
        <div className="boxBody">
          <div>
            <h2>School Name</h2>
            <p>{values["schoolName"]}</p>
          </div>
          <div>
            <h2>Title</h2>
            <p>{values["schoolTitle"]}</p>
          </div>
          <div>
            <h2>Date</h2>
            <p>{values["schoolDate"]}</p>
          </div>
          <button type="button" className="displayedInfo" onClick={someFunc}>
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default function EducationalInfoComponent({
  values,
  state,
  function1,
  function2,
}) {
  let child;
  if (state) {
    child = (
      <DisplayEducationalInfoSegment values={values} someFunc={function1} />
    );
  } else {
    child = (
      <SubmitEducationalInfoSegment values={values} someFunc={function2} />
    );
  }
  return <>{child}</>;
}
