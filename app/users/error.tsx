'use client'; // Error components must be Client components
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <>
            <h1 className='text-2xl'>Something went wrong!</h1>
            <button
                className='my-2 place-self-start'
                onClick={() => reset()}
            >
                Try again
            </button>
        </>
    );
}
