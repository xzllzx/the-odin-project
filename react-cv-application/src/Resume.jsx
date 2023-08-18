import { ResumeHeader } from "./GeneralInfo";
import { ResumeEducation } from "./Education";
import { ResumeExperience } from "./Experience";

function ResumeContainer() {
  return (
    <div className="resume container">
      <ResumeHeader />
      <ResumeEducation />
      <ResumeExperience />
    </div>
  );
}

export { ResumeContainer };
