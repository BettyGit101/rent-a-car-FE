import { useState, useCallback } from 'react';
import { RequestDetails, ApplyData } from '../assets/types';

const useFetch = (storageKey: string) => {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const sendRequest = useCallback(async (requestDetails: RequestDetails, applyData?: ApplyData) => {
        setError(null);
        setIsLoading(true);

        try {
            const response = await fetch(requestDetails.url, {
                method: requestDetails.method,
                headers: requestDetails.headers ? requestDetails.headers : {},
                body: requestDetails.body ? JSON.stringify(requestDetails.body) : null
            })

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            if (requestDetails.method === 'GET' && applyData !== undefined) {
                const data = await response.json();
                applyData(data);   
            } 
            else if (requestDetails.method === 'POST' && applyData !== undefined) {
                applyData();
            }
            else if (requestDetails.method === 'DELETE') {
                window.location.reload();
            }
           

        }
        catch (err: any) {
            if (requestDetails.method === 'GET') {
                const cachedData = localStorage.getItem(storageKey);
                if (cachedData && applyData !== undefined) {
                    applyData(JSON.parse(cachedData));
                } else {
                    setError(err.message);
                }
            }
            else {
                setError(err.message);
            }
           
        }
        finally {
            setIsLoading(false);
        }
    }, [storageKey]);

    return {
        error,
        isLoading,
        sendRequest
    };
}

export default useFetch;