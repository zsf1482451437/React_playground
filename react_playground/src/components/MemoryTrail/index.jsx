import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNames.bind(styles);
const DELAY = 1500;

const MemoryTrail = ({ nodes }) => {
  const [visibleNodes, setVisibleNodes] = useState(
    nodes.map((node) => ({ ...node, visible: false }))
  );

  useEffect(() => {
    nodes.forEach((_, index) => {
      setTimeout(() => {
        setVisibleNodes((prev) =>
          prev.map((node, i) =>
            i === index ? { ...node, visible: true } : node
          )
        );
      }, index * DELAY);
    });
  }, [nodes]);

  return (
    <div className={cn('memoryTrail')}>
      {visibleNodes.map(
        (node, index) =>
          node.visible && (
            <div key={index} className={cn('memoryNode')}>
              {index >= 0 && <div className={cn('line')}></div>}
              <div className={cn('dot')}></div>
              <div className={cn('content')}>
                <img
                  src={node.image}
                  alt={`Node ${index}`}
                  className={cn('image')}
                />
                <p>{node.text}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default MemoryTrail;
