import { useEffect, useState } from 'react'


const UseFetch = (initialurl = '') => {
    const [url, setUrl] = useState(initialurl);
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()

                setData(json)
                setLoading(false)

            } catch (error) {
                setError(error)
                setLoading(false)
            }
        };
        if (url) {
            fetchData();
        }

    }, [url]);

    const doFetch = (url) => {
        setUrl(url);
    }

    return { loading, error, data, doFetch }
}



export default UseFetch
