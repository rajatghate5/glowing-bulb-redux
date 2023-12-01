import "./style.css";
import bulbOn from "./bulb-on.png";
import bulbOff from "./bulb-off.png";
import { useSelector, useDispatch } from "react-redux";
import { BulbOff, BulbOn } from "./actions";

const App = () => {
  const myState = useSelector((state) => state);
  const dispatch = useDispatch();
  
  return (
    <div id="container">
      <div className="box">
        <div className="imgs">
          {myState ? (
            <img src={bulbOn} alt="Bulb On" />
          ) : (
            <img src={bulbOff} alt="Bulb Off" />
          )}
        </div>
        {myState ? (
          <button onClick={() => dispatch(BulbOff(false))}>Turn Off</button>
        ) : (
          <button onClick={() => dispatch(BulbOn(true))}>Turn On</button>
        )}
      </div>
    </div>
  );
};

export default App;
