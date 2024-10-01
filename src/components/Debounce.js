import React, { useCallback, useMemo } from 'react';
import * as _ from 'underscore';

const withDebounce = (WrappedComponent, debounceMillis = 2000) => {
    const WithDebounce = (props) => {
        // Using useCallback to debounce the function
        const debounceFun = useCallback((fun) => {
            if (fun !== undefined) {
                console.log('Debounce...Block');
                fun();
            }
        }, []);

        // Memoizing the debounced event to avoid unnecessary re-creations
        const debounceEvent = useMemo(() => _.debounce(debounceFun, debounceMillis, true), [debounceFun, debounceMillis]);

        return <WrappedComponent {...props} debounceEvent={debounceEvent} />;
    };

    return WithDebounce;
};

export default withDebounce;
