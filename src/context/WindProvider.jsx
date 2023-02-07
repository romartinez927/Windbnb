import { WindContext } from "./WindContext";

export function WindProvider( {children} ) {

    return (
        <WindContext.Provider value={{
            
        }}>
            {children}
        </WindContext.Provider>
    )
}
