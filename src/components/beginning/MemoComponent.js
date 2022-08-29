import React from "react";

function MemoComponent({name}){
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComponent)