import logo from './logo.svg';
import './App.css';
import Image from "./component_profil/profil-photos";
import Name from "./component_profil/name";
import ADRESS from "./component_profil/adress";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <div className="card" style={{ width: "20rem" }}>
<Image/>
        <div className="card-body">
          <h1 className="card-title">
            <Name />
          </h1>
          <p className="card-text" />
          <ADRESS/>
          <p />
        </div>
      </div>
    </div>
  );
}

export default App;
