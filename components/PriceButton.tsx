import React from 'react'

type Props = {
    text?: string;
    content?: any;
    onClick?: () => void;
}

export default function PriceButton({text, content, onClick}: Props) {
    return (
        <button 
            className="cursor-default relative w-40 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group backdrop-blur-sm border border-gray-600" 
            onClick={onClick}
        >
            <span className="relative px-5 w-full py-2.5 transition-all ease-in duration-75 bg-black/10  rounded-md  text-gray-100">
                {text && text}
                {content}
            </span>
        </button>
    )
}