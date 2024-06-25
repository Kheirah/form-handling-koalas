export default function UncontrolledInput() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit event fired!");
    const formData = new FormData(event.target);
    console.log(formData.get("firstname"));
    console.log(formData.get("lastname"));
  }
  return (
    <>
      <h2>Uncontrolled Input</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First name</label>
        <input id="firstname" name="firstname" type="text" />

        <label htmlFor="lastname">Last name</label>
        <input id="lastname" name="lastname" type="text" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
