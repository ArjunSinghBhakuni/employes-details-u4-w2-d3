import { useState } from "react";
import "./App.css";

import { Detail } from "./component/Detail";
import { ShowDetail } from "./component/ShowDetail";
function App() {
  const [page, setPage] = useState(true);
  const [details,setDetails] = useState([])

  const addDetails=(newDetail)=>{
    
    console.log(newDetail)

    //setDetails([...details,newDetail])
  }
  return (
    <div className="App">
      <button onClick={() => setPage(!page)}>
        {page ? "Show Emploayes Details" : "Fill Employee Details"}
      </button>
      {page ? (
        <div>
          <Detail addDetails={addDetails} />
        </div>
      ) : (
        <div>
          <ShowDetail details={details} />
        </div>
      )}
    </div>
  );
}

export default App;
