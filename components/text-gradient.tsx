import type React from "react";

type TextGradientProps = {
    children: string | React.ReactNode;
    from?: string;
    via?: string;
    to?: string;
};

const TextGradient = (props: TextGradientProps) => {
    const from = props.from || "from-blue-500";
    const via = props.via || "via-sky-500";
    const to = props.to || "to-sky-400";
    return (
        <span
            className={`bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-300% animate-gradient`}
        >
            {props.children}
        </span>
    );
};

export default TextGradient;
