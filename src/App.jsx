/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import GeneralInfoComponent from "./components/generalInfoComponent";
import EducationalInfoComponent from "./components/educationalInfoComponent";
import PracticalInfoComponent from "./components/practicalInfoComponent";

function App() {
  const [generalValues, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [educationalValues, seteducationalValues] = useState({
    schoolName: "",
    schoolTitle: "",
    schoolDate: "",
  });
  const [practicalValues, setpracticalValues] = useState({
    companyName: "",
    jobTitle: "",
    jobDescription: "",
    jobFromDate: "",
    jobUntilDate: "",
  });
  const [isGeneralSubmited, setisGeneralSubmited] = useState(false);
  const [isEducationalSubmited, setisEducationalSubmited] = useState(false);
  const [isPracticalSubmited, setisPracticalSubmited] = useState(false);

  function editGeneralInfo() {
    setisGeneralSubmited(false);
  }
  function updateGeneralInfo(event) {
    let inputs = document
      .querySelector("." + event.target.className)
      .querySelectorAll("input");
    setValues({
      firstName: inputs[0].value,
      lastName: inputs[1].value,
      email: inputs[2].value,
      phone: inputs[3].value,
    });
    setisGeneralSubmited(true);
  }

  function editEducationalInfo() {
    setisEducationalSubmited(false);
  }
  function updateEducationalInfo(event) {
    let inputs = document
      .querySelector("." + event.target.className)
      .querySelectorAll("input");
    seteducationalValues({
      schoolName: inputs[0].value,
      schoolTitle: inputs[1].value,
      schoolDate: inputs[2].value,
    });
    setisEducationalSubmited(true);
  }
  function editPracticalInfo() {
    setisPracticalSubmited(false);
  }

  function updatePracticalInfo(event) {
    let inputs = document
      .querySelector("." + event.target.className)
      .querySelectorAll("input");
    let jobDesc = document.querySelector("textarea").value;
    setpracticalValues({
      companyName: inputs[0].value,
      jobTitle: inputs[1].value,
      jobDescription: jobDesc,
      jobFromDate: inputs[2].value,
      jobUntilDate: inputs[3].value,
    });
    setisPracticalSubmited(true);
  }

  return (
    <>
      <GeneralInfoComponent
        values={generalValues}
        state={isGeneralSubmited}
        function1={editGeneralInfo}
        function2={updateGeneralInfo}
      />
      <EducationalInfoComponent
        values={educationalValues}
        state={isEducationalSubmited}
        function1={editEducationalInfo}
        function2={updateEducationalInfo}
      />
      <PracticalInfoComponent
        values={practicalValues}
        state={isPracticalSubmited}
        function1={editPracticalInfo}
        function2={updatePracticalInfo}
      />
    </>
  );
}

export default App;
