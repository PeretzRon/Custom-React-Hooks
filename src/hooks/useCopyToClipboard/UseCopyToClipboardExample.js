import React, {useRef} from 'react';
import '../../App.css'
import useCopyToClipboard from "./useCopyToClipboard";

const UseCopyToClipboardExample = () => {
    const refInput = useRef(null);
    const [isCopied, handleCopy] = useCopyToClipboard();

    return (
        <div className="hook">
            <h2>
                useCopyToClipboard
            </h2>
            <textarea ref={refInput} rows={4} cols={30} readOnly
                      value="that text will copy to clipboard when you click on the button"/>
            <button onClick={() => handleCopy(refInput.current.value)}>Copy</button>
            {isCopied && <p>{`copy to clipboard successfully`}</p>}
        </div>
    );
};

export default UseCopyToClipboardExample;
