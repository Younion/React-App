import Form from 'react-bootstrap/Form';

function LovedIt() {
    return (
        <Form>
            <div className="container-fluid">
            <h2>Loved It?</h2>
            <Form.Check 
                type="switch"
                id="custom-switch"
                label="LovedIt"
            />
            </div>
        </Form>
    );
}

export default LovedIt;