import { useState } from 'react';
import { words } from './data';
import styles from './Words.module.css';

export default function Words() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <header className={`${styles.tt} ${styles.blue}`}>
            {words.map((word, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <h1>{index + 1}</h1>
                    <h2>{hoveredIndex === index ? word.jp : word.en}</h2>
                </div>
            ))}
        </header>
    );
}