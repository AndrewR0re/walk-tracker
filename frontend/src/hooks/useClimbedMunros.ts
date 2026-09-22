import { useEffect, useState } from 'react';

export function useClimbedMunros() {
    const [climbedMunros, setClimbedMunros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api/climbedMunro")
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch climbed munros!');
                return response.json();
            })
            .then(data => {
                setClimbedMunros(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return { climbedMunros, loading, error };
}