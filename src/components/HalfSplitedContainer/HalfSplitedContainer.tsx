import {ComponentType} from "react";


interface HalfSplitedContainer {
    ComponentLeft: JSX.Element;
    ComponentRight: JSX.Element;
}

const HalfSplitedContainer = ({ ComponentLeft, ComponentRight } : HalfSplitedContainer) => {

    return <div>
        <ComponentLeft />
        <ComponentRight />
    </div>
}

export default HalfSplitedContainer;
