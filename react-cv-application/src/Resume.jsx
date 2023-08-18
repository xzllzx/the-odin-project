function Header() {
  return (
    <>
      <h1>Your Name</h1>
    </>
  );
}

function EducationSection() {}

function ExperienceSection() {}

function ResumeContainer() {
  return (
    <div className="resume container">
      <Header />
      <EducationSection />
      <ExperienceSection />
    </div>
  );
}

export { ResumeContainer };
