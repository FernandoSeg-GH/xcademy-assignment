import React from 'react'

type Props = {
    text: string;
    onClick?: () => void;
}

export default function BrandedButton({text, onClick}: Props) {
    return (
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-600 to-orange-400 group-hover:from-pink-600 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={onClick}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-gray-100">
                {text}
            </span>
        </button>
    )
}