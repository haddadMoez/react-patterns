import React from "react";

// Deeper the example ==> Deeper the complexity 

// EXAMPLE ONE
const ExampleOneContext = React.createContext('default');

const ExampleOneParent = () => {
    return (
        <div>
            <ExampleOneChild />
        </div>
    )
}

const ExampleOneChild = () => {
    return <ExampleOneContext.Consumer>
        {
            value => <h1>{value}</h1>
        }
    </ExampleOneContext.Consumer>
}

const ContextComponentExampleOne = () => {
    return (
        <ExampleOneContext.Provider value='HelloWorld!'>
            <ExampleOneParent />
        </ExampleOneContext.Provider>
    )
}

export default ContextComponentExampleOne