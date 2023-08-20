import { hyphenToCamel, camelToNormalCase } from "../utils";

function FormContainer({ configs, value, handleChange, handleSave }) {
  return (
    <form>
      {configs.map((config) => (
        <LabelledInput
          key={config.id}
          id={config.id}
          type={config.type}
          value={value}
          handleChange={handleChange}
        />
      ))}
      {handleSave && (
        <button className="add-info" onClick={handleSave}>
          Save
        </button>
      )}
    </form>
  );
}

function LabelledInput({ id, type, value, handleChange }) {
  return (
    <label htmlFor={id}>
      {camelToNormalCase(hyphenToCamel(id))}
      <input
        type={type}
        id={id}
        name={id}
        value={value[hyphenToCamel(id)]}
        onChange={handleChange}
        required
      ></input>
    </label>
  );
}

export { FormContainer, LabelledInput };
