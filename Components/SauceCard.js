import Card from 'react-bootstrap/Card';

const SauceCard = ({ sauceData }) => {
    return (
        <div className="card">
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{sauceData.fields.Name}</Card.Title>
                    <Card.Text>
                    Average Rating: {Math.round(sauceData.fields['Average Rating'])}
                    </Card.Text>
                    <Card.Text>
                    Spiciness Rating: {Math.round(sauceData.fields['Average Spiciness'])}
                    </Card.Text>
                    <Card.Text>
                    Tastings: {sauceData.fields.Tastings}
                    </Card.Text>
                    <Card.Text>
                    Percent Loved: {Math.round(sauceData.fields['Percent Loved']*100)}%
                    </Card.Text>
                    <Card.Text>
                    Heat Sources: {sauceData.fields['Heat Sources String']}
                    </Card.Text>
                    <Card.Text>
                    Flavor Notes: {sauceData.fields['Flavor Notes String']}
                    </Card.Text>
                </Card.Body>
        </div>
    )
};

export default SauceCard;