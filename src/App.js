import './App.css';
import UseCopyToClipboardExample from "./hooks/useCopyToClipboard/UseCopyToClipboardExample";
import UseFetchExample from "./hooks/UseFetch/UseFetchExample";
import UseToggleExample from "./hooks/useToggle/UseToggleExample";

const App = () => {

    return (
        <div className="App">
            <div className="hooks">
                <UseFetchExample/>
                <UseCopyToClipboardExample/>
                <UseToggleExample/>
            </div>
        </div>
    );
};

export default App;
