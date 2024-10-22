import React from 'react';

export default function Parallax({ classString, title, content }) {
    return (
        <>
            <section
                className={`container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover ${classString}`}
            >
                <div className="p-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-white bg-purple-400 bg-opacity-50 rounded-xl">
                    {title}
                </div>
            </section>
            <div className="w-full px-3 max-w-lg m-auto mb-14">
                <p className="mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                    {content}
                </p>
            </div>
        </>
    );
}