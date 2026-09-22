import { useEffect, useState } from 'react';

export function useWalks() {
    const [walks, setWalks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api/walk")
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch walks!');
                return response.json();
            })
            .then(data => {
                setWalks(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return { walks, loading, error };
}