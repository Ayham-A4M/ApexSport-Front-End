import { useState } from "react"
const useInformationAddress = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    return { country, setCountry, city, setCity, street, setStreet }
}

export default useInformationAddress