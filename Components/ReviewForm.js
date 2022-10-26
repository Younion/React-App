import Button from 'react-bootstrap/Button';
import Viscocity from './Viscocity';
import Presentation from './Presentation';
import Spiciness from './Spiciness';
import FlavorNotes from './FlavorNotes';
import OverallRating from './OverallRating';
import LovedIt from './LovedIt';
import AdditionalNotes from './AdditionalNotes';
import SauceName from './SauceName';

function ReviewForm() {
  return (
    <div className="color-section" id="reviewASauce">
        <div className="container-fluid">
          <h2>Review a Sauce</h2><br />
            Trying a sauce that is already in our database? Review it!
        <SauceName />
        <Presentation />
        <Viscocity />
        <Spiciness />
        <FlavorNotes />
        <OverallRating />
        <LovedIt />
        <AdditionalNotes />
        <br />
        <Button variant="dark" type="submit">
          Submit
        </Button>
        </div>
    </div>
  );
}

export default ReviewForm;