//import styles
import "./Form.css";
export default function Form({ onSubmit, onChange, formData }) {
  return (
    <>
      <form>
        <h2> My Profile</h2>
        <p>
          {" "}
          <input
            name="fullName"
            id="fullName"
            value={formData.fullName}
            type="text"
            placeholder="Full Name"
            onChange={onChange}
          />{" "}
        </p>
        <p>
          {" "}
          <input
            name="email"
            id="email"
            value={formData.email}
            type="email"
            placeholder="Email"
            onChange={onChange}
          />{" "}
        </p>
        <p>
          {" "}
          <input
            name="country"
            id="country"
            value={formData.country}
            type="text"
            placeholder="Country"
            onChange={onChange}
          />{" "}
        </p>
        <textarea
          placeholder="Bio"
          id="bio"
          name="bio"
          value={formData.bio}
          rows="4"
          onChange={onChange}
        />
        <button type="submit" onClick={onSubmit}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
}
