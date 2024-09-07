import React, { useRef, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
}

function TypingAnimation({ text }: TypingAnimationProps) {
  const typingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const typingText = typingRef.current;

    if (!typingText) {
      return;
    }

    let currentCharIndex = 0;

    const typeLetter = () => {
      if (currentCharIndex < text.length) {
        typingText.textContent += text[currentCharIndex];
        currentCharIndex++;
        setTimeout(typeLetter, 100); // Adjust typing speed as needed
      }
    };

    typeLetter();
  }, [text]);

  return (
    <div ref={typingRef} className="typing-text">
      <span className="typing-char"></span>
    </div>
  );
}

export default TypingAnimation;
