import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

import useProcessControl from 'hooks/useProcessControl';

const cn = classNames.bind(styles);

const MemoryTrail = ({ nodes, delay = 1000, lineType = 'straight' }) => {
  const {
    visibleNodes,
    currentIndex,
    handleJumpTo,
    handlePause,
    handleResume,
    isPaused,
  } = useProcessControl(nodes, delay);

  return (
    <div className={cn('wrapper')}>
      <div className={cn('memoryTrail')}>
        {visibleNodes.map(
          (node, index) =>
            node.visible && (
              <div key={index} className={cn('memoryNode')}>
                {index >= 0 && (
                  <div
                    className={cn('line', { curved: lineType === 'curved' })}
                  ></div>
                )}
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
      <div className={cn('controls')}>
        输入起始节点：
        <input
          type="number"
          min="0"
          max={nodes.length - 1}
          value={currentIndex}
          onChange={(e) => handleJumpTo(Number(e.target.value))}
        />
        <button onClick={isPaused ? handleResume : handlePause}>
          {isPaused ? '继续' : '暂停'}
        </button>
      </div>
    </div>
  );
};

export default MemoryTrail;
