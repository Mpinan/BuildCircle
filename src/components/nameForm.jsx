const NameForm = (props) => {
	const {name, setName} = props

    return (         
    	<div style={nameForm}>
        <form>
          <h4 style={{padding:"1rem", color:"#fff"}}>
            Introduce a name
          </h4>
          <input
            style={inputStyles}
            type="text"
            value={name}
            onChange={e =>  {
              e.preventDefault();
              setName(e.target.value)
            }}
            />
          <button 
            style={buttonStyles}
            type="submit">
            Submit name
          </button>
        </form>
      </div> 
    );
}

const nameForm = {
  top: "auto",
  overflowX: "hidden",
  overflowY: "auto"
}

const inputStyles = {
	flexGrow: 1,
	fontSize: '1.1rem',
	padding: '10px 15px',
};

const buttonStyles = {
  backgroundColor: "#4f5165",
  borderRadius: "10px",
  fontSize: '1.1rem',
  padding: '10px 15px',
};
 
export default NameForm;