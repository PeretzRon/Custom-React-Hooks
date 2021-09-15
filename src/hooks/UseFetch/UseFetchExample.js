import React from 'react';
import '../../App.css';
import useFetch from "./UseFetch";

const UseFetchExample = () => {
    const fetchedData = useFetch({url: 'https://restcountries.eu/rest/v2/name/israel', options: {}});

    return (
        <div className="hook">
            <h2>
                useFetch
            </h2>
            {`from useFetch: ${fetchedData.data?.[0].name}`}
        </div>
    );
};

export default UseFetchExample;
