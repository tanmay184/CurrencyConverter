// import { useEffect, useState } from 'react'

// function useCurrencyinfo(currency) {
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//             .then((res) => res.json)
//             .then((res) => setData(res[currency]))
//     }, [currency])
//     console.log(data);
//     return data;
// }

// export default useCurrencyinfo;

import { useEffect, useState } from 'react'

function useCurrencyinfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = () => {
            try {
                const res = fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
                    .then((res) => res.json())
                    .then((res) => setData(res[currency]))

            } catch (error) {
                console.error('Error fetching currency data:', error);
                setData({});
            }
        };

        fetchData();
    }, [currency]);

    return data;
}

export default useCurrencyinfo;
