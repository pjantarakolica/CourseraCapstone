import {useState} from "react";

/* Custom hook to store data */

const useSubmit = () => {
    const [formResponse, setFormResponse] = useState(null);

    const submit = (data) => {
        setFormResponse(data);
    }

    return{formResponse,submit};
}

export default useSubmit;