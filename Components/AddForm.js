import Button from 'react-bootstrap/Button';
import Manufacturer from "./Manufacturer";
import SauceName from "./SauceName";
import ManufacturerLocation from "./ManufacturerLocation";
import HeatSources from "./HeatSources";

function AddForm() {
  return (
    <div className="white-section" id="addASauce">
        <div className="container-fluid">
          <h2>Add a Sauce</h2><br />
          Trying a new sauce that isn't in our database? Add it for us!        
        <br />
        <Manufacturer />
        <SauceName />
        <ManufacturerLocation />
        <HeatSources />
        <Button variant="dark" type="submit">
          Submit
        </Button>
        </div>
    </div>
  );
}

export default AddForm;