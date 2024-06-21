import Input from "./inputComponent.jsx";
import "../styles/generalInfoStyle.css";
function SubmitGeneralInfoSegment({ values, someFunc }) {
  return (
    <>
      <div className="generalInfo">
        <h1>General Information</h1>
        <div className="boxBody">
          <form action="submit">
            <Input
              inputName="First Name"
              inputType={"text"}
              value={values["firstName"]}
            />
            <Input
              inputName="Last Name"
              inputType={"text"}
              value={values["lastName"]}
            />
            <Input
              inputName="Email"
              inputType={"email"}
              value={values["email"]}
            />
            <Input
              inputName="Phone"
              inputType={"phone"}
              value={values["phone"]}
            />
            <button type="button" className="generalInfo" onClick={someFunc}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
function DisplayGeneralInfoSegment({ values, someFunc }) {
  return (
    <>
      <div className="displayedInfo">
        <h1>General Information</h1>
        <div className="boxBody">
          <div>
            <h2>Full Name</h2>
            <p>{values["firstName"] + " " + values["lastName"]}</p>
          </div>
          <div>
            <h2>Email</h2>
            <p>{values["email"]}</p>
          </div>
          <div>
            <h2>Phone</h2>
            <p>{values["phone"]}</p>
          </div>
          <button type="button" className="displayedInfo" onClick={someFunc}>
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
export default function GeneralInfoComponent({
  values,
  state,
  function1,
  function2,
}) {
  let child;
  if (state) {
    child = <DisplayGeneralInfoSegment values={values} someFunc={function1} />;
  } else {
    child = <SubmitGeneralInfoSegment values={values} someFunc={function2} />;
  }
  return <>{child}</>;
}
