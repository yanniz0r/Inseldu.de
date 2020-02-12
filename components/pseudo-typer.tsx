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
    const [isWriting, setWriting] = useState(true);

    useLayoutEffect(() => {
        setDisplayedWord(words[currentWordIndex].slice(0, currentLetterIndex));
    }, [currentLetterIndex, currentWordIndex]);

    useEffect(() => {
        let timeoutId;
        if (isWriting) {
            timeoutId = setTimeout(() => {
                if (currentLetterIndex >= words[currentWordIndex].length) {
                    setTimeout(() => {
                        setWriting(false);
                    }, 2000);
                } else {
                    setCurrentLetterIndex(currentLetterIndex + 1);
                }
            }, 50 + Math.random() * 200);
        } else {
            timeoutId = setTimeout(() => {
                if (currentLetterIndex > 0) {
                    setCurrentLetterIndex(currentLetterIndex - 1);
                } else {
                    setCurrentWordIndex((currentWordIndex + 1) % words.length)
                    setWriting(true);
                }
            }, 25 + 30 * Math.random());
        }
        return () => clearTimeout(timeoutId);
    }, [currentLetterIndex, currentWordIndex, isWriting]);

    return <span>
        {displayedWord}
    </span>;
}