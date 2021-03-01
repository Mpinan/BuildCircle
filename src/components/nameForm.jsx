const NameForm = (props) => {
	const {name, setName} = props

    return (         
    	<div>
        <form>
          <h4>
            Introduce a name
          </h4>
          <input
            type="text"
            value={name}
            onChange={e =>  {
              e.preventDefault();
              setName(e.target.value)
            }}
            />
          <button 
            type="submit">
            Submit name
          </button>
        </form>
      </div> 
    );
}

 
export default NameForm;