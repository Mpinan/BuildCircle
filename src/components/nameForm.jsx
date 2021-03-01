import "./styles/nameForm.css"


const NameForm = (props) => {
  const { name, setName } = props

  return (
    <div className="nameForm">
      <form>
        <h4
          className="inputTitle"
        >
          Introduce a name
          </h4>
        <input
          className="inputField"
          type="text"
          value={name}
          onChange={e => {
            e.preventDefault();
            setName(e.target.value)
          }}
        />
        <div className="paddingButton">

          <button
            className="inputButton"
            type="submit">
            Submit name
          </button>
        </div>
      </form>
    </div>
  );
}


export default NameForm;