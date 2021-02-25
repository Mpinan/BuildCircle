const NameForm = (props) => {
	const {name, setName} = props

    return (         
    	<div>
        <form>
          <h1 style={{padding:"1rem", color:"#fff"}}>
            Introduce a name
          </h1>
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

const inputStyles = {
	flexGrow: 1,
	fontSize: '1.1rem',
	padding: '10px 15px',
};

const buttonStyles = {
  fontSize: '1.1rem',
  padding: '10px 15px',
};
 
export default NameForm;