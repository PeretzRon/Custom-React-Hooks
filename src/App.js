import './App.css';
import UseCopyToClipboardExample from "./hooks/useCopyToClipboard/UseCopyToClipboardExample";
import UseFetchExample from "./hooks/UseFetch/UseFetchExample";

const App = () => {

    return (
        <div className="App">
            <div className="hooks">
                <UseFetchExample/>
                <UseCopyToClipboardExample/>
            </div>
        </div>
    );
};

export default App;
