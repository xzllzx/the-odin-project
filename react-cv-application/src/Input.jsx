import { General } from "./GeneralInfo";
import { EducationInput } from "./Education";
import { ExperienceInput } from "./Experience";

function InputContainer() {
  return (
    <>
      <General />
      <EducationInput />
      <ExperienceInput />
    </>
  );
}

export { InputContainer };
