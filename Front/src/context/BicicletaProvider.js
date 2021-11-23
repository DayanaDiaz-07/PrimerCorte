import React from 'react'

export const BicicletaContext=React.createContext()
const BicicletaProvider = (props) => {
    const bicis={
        id:"",
        color:"",
    }
    const [bici,setBici]=React.useState(bicis)

    return (
        <BicicletaContext.Provider value={{bici, setBici}}>
            {props.children}
        </BicicletaContext.Provider>
    )
}

export default BicicletaProvider
