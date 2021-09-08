import {useEffect, useState} from 'react';

const UseFetch = props => {
   const {url, options} = props
    const [state, setState] = useState({
        data: null,
        error: null,
        loading: false,
    });

    useEffect(() => {
        setState({...state, loading: true});
        fetch(url, options)
            .then(value => value.json())
            .then(data => {
                setState({...state, loading: false, data: data});
            }).catch(reason => {
            setState({...state, loading: false, error: reason});
        });
    }, [url]);

    return state;
};

export default UseFetch;
