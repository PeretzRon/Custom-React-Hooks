import './App.css';
import useFetch from './hooks/UseFetch/UseFetch';
import UseCopyToClipboardExample from "./hooks/useCopyToClipboard/UseCopyToClipboardExample";

function App() {
    const fetchedData = useFetch({url: 'https://restcountries.eu/rest/v2/name/israel', options: {}});

    return (
        <div className="App">
            <div className="hooks">
                <div className="hook">
                    <h2>
                        useFetch
                    </h2>
                    {`from useFetch: ${fetchedData.data?.[0].name}`}
                </div>

                <UseCopyToClipboardExample/>
            </div>
        </div>
    );
}

export default App;
