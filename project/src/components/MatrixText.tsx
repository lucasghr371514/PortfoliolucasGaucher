import React, { useState, useEffect } from 'react';

interface MatrixTextProps {
  text: string;
  onComplete?: () => void;
  className?: string;
}

const MatrixText: React.FC<MatrixTextProps> = ({ text, onComplete, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';

  useEffect(() => {
    let currentIndex = 0;
    let scrambleCount = 0;
    const maxScrambles = 3;
    
    const scrambleInterval = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(scrambleInterval);
        onComplete?.();
        return;
      }

      if (scrambleCount >= maxScrambles) {
        setDisplayText(prev => prev + text[currentIndex]);
        currentIndex++;
        scrambleCount = 0;
      } else {
        setDisplayText(prev => 
          prev.slice(0, currentIndex) + 
          chars[Math.floor(Math.random() * chars.length)] + 
          prev.slice(currentIndex + 1)
        );
        scrambleCount++;
      }
    }, 50);

    return () => clearInterval(scrambleInterval);
  }, [text]);

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
    </span>
  );
};

export default MatrixText;