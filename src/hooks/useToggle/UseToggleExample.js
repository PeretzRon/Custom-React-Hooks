import React from 'react';
import useToggle from "./useToggle";
import '../../App.css';

const UseToggleExample = () => {
    const [value, toggleValue] = useToggle(false);

    return (
        <div className="hook">
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Make True</button>
            <button onClick={() => toggleValue(false)}>Make False</button>
        </div>
    );
};

export default UseToggleExample;
