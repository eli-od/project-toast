import * as React from 'react';

export function useKeyDown(key, functionToCall) {
    React.useEffect(() => {
        const handleKeyDown = (event) => {
        if (event.key === key) {
            functionToCall();
        }
        };
        
        window.addEventListener('keydown', handleKeyDown);

        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        };
    }, [key, functionToCall]);
}