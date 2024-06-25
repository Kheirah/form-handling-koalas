import { useState } from "react";

export default function ControlledInput() {
  /* controlled input */
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit event fired!");
    console.log("firstname", firstname);
    console.log("lastname", lastname);
  }
  console.log(firstname);
  return (
    <>
      <h2>Controlled Input</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First name</label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          value={firstname}
          onChange={(event) => setFirstname(event.target.value)}
        />

        <label htmlFor="lastname">Last name</label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          value={lastname}
          onChange={(event) => setLastname(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
