import * as React from 'react';

export function useEscapeKey(functionToCall) {
    React.useEffect(() => {
        const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            functionToCall();
        }
        };
        
        window.addEventListener('keydown', handleKeyDown);

        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        };
    }, [functionToCall]);
}