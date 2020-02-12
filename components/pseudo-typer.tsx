import React, { FC, useState, useLayoutEffect, useEffect } from "react";

interface PseudoTyperProps {
    words: string[];
}

// TODO Considerations regarding serverside rendering
// TODO Considerations regarding a11y
export const PseudoTyper: FC<PseudoTyperProps> = ({ words }) => {
    const [displayedWord, setDisplayedWord] = useState("");
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    useLayoutEffect(() => {
        setDisplayedWord(words[currentWordIndex].slice(0, currentLetterIndex));
    }, [currentLetterIndex, currentWordIndex]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (currentLetterIndex >= words[currentWordIndex].length) {
                setTimeout(() => {
                    setCurrentLetterIndex(0);
                    setCurrentWordIndex((currentWordIndex + 1) % words.length);
                }, 2000);
            } else {
                setCurrentLetterIndex(currentLetterIndex + 1);
            }
        }, 50 + Math.random() * 100);
        return () => clearTimeout(timeoutId);
    }, [currentLetterIndex, currentWordIndex]);

    return <span>
        {displayedWord}
    </span>;
}