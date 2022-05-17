import CloseButton from "../components/CloseButton";
import { FaTimes } from "react-icons/fa";

export default function Error() {
    return (
        <div className="parent container p-4 rounded">
            <div className="child">
                <CloseButton className="right" />
            </div>
            <div className="center py-4">
                <div className="back-colored times">
                    <FaTimes style={{ color: 'red', fontSize: '50px' }} />
                </div>
                <div className="titles">
                    <h1>Upss</h1>
                    <h6>Algo ha pasado</h6>
                </div>
            </div>
            <div className="child left ">
            </div>
        </div>
    )
}
