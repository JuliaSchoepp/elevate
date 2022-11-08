import { UserContext } from "../../App";

function Content() {
	return (
	  <UserContext.Consumer>
		{value => <h1>{value}</h1>} 
	  </UserContext.Consumer>
	)
  }

export default Content;