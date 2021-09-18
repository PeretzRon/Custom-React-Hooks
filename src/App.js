import './App.css';
import UseCopyToClipboardExample from "./hooks/useCopyToClipboard/UseCopyToClipboardExample";
import UseFetchExample from "./hooks/UseFetch/UseFetchExample";
import UseToggleExample from "./hooks/useToggle/UseToggleExample";
import UseTimeoutExample from "./hooks/useTimeout/UseTimeoutExample";

const App = () => {

    return (
        <div className="App">
            <div className="hooks">
                <UseFetchExample/>
                <UseCopyToClipboardExample/>
                <UseToggleExample/>
                <UseTimeoutExample/>
            </div>
        </div>
    );
};

export default App;
