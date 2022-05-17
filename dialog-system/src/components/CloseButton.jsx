import { Link } from 'react-router-dom';

export default function CloseButton() {
    return (
        <div className="close-button">
            <Link to="/" className="text-white"><h5>X</h5></Link>
        </div>
    )
}
