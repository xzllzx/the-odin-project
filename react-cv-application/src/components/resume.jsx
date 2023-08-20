function ResumeList({ infoList, ResumeComponent }) {
  return (
    <>
      {infoList.map((info, index) => (
        <ResumeComponent key={index} id={index + 1} info={info} />
      ))}
    </>
  );
}

function ResumeEducation({ id, info }) {
  return (
    <div className="details" id={`education-${id}`}>
      <div className="date-range">
        {info.startDate} — {info.endDate}
      </div>
      <div className="school">{info.school}</div>
      <div className="degree">{info.degree}</div>
    </div>
  );
}

function ResumeExperience({ id, info }) {
  return (
    <div className="details" id={`experience-${id}`}>
      <div className="date-range">
        {info.startDate} — {info.endDate}
      </div>
      <div className="company">{info.company}</div>
      <div className="position">{info.position}</div>
      <div className="description">{info.description}</div>
    </div>
  );
}

export { ResumeEducation, ResumeExperience, ResumeList };
