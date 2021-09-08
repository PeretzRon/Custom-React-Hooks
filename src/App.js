import './App.css';
import useFetch from './hooks/UseFetch/UseFetch';

function App() {
    const fetchedData = useFetch({url: 'https://restcountries.eu/rest/v2/name/israel', options: {}});
    return (
        <div className="App">
            {`from useFetch: ${fetchedData.data?.[0].name}`}
        </div>
    );
}

export default App;
