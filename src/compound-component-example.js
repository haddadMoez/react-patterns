import React from "react";

const Parent = ({ children }) => {

    const enhancedChildren = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            onClick: (val) => { console.log(val) }
        })
    })
    return <div>{enhancedChildren}</div>
}

const Child = ({ children, onClick, value }) => {
    return (
        <button onClick={() => onClick(value)}>{children}</button>
    )
}

const CompoundComponentExample = () => {
    return (
        <Parent>
            <Child value={1}>Child 1</Child>
            <Child value={2}>Child 2</Child>
        </Parent>
    );
}

export default CompoundComponentExample;