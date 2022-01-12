import Accordian from "./Components/Accordian/Accordian";

import { item } from "./items";


const App = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h1>hello satyam</h1>
                    <div id="liveAlertPlaceholder"></div>
                    <button type="button" className="btn btn-primary" id="liveAlertBtn">Show live alert</button>
                </div>
            </div>
        </div>


    )
}

export default App;