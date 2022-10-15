import React from "react";

interface Props {
    title: string;
    onHover: (string) => void;
    onSelect: (string) => void;
    onLeave: () => void;
}

function NavTitle(props: Props) {
    return (
        <div
            className="pageItem"
            onMouseEnter={() => props.onHover(props.title)}
    )
}