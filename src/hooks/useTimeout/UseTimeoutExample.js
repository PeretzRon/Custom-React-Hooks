import {useState} from "react";
import useTimeout from "./useTimeout";
import '../../App.css';

export default function UseTimeoutExample() {
    const [message, setMessage] = useState(`Timer is set to ${5} Sec`);
    const {clear, set} = useTimeout(onTimoutFinished, 5000);

    function onTimoutFinished() {
        setMessage('Timer Done!');
    }

    function startTimeout() {
        set();
        setMessage('Started!!')
    }

    function onClearTimeout() {
        clear();
        setMessage('Cleared Timout!!')
    }

    return (
        <div className="hook">
            <h2>
                useTimeout
            </h2>
            <div>{message}</div>
            <button onClick={startTimeout}>Start Timeout</button>
            <button onClick={onClearTimeout}>Clear Timeout</button>
        </div>
    );
}
