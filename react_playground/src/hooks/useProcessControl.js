import { useState, useEffect, useRef, useCallback } from 'react';

const useProcessControl = (nodes, delay) => {
  const [visibleNodes, setVisibleNodes] = useState(
    nodes.map((node) => ({ ...node, visible: false }))
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRefs = useRef([]);

  // 展示节点
  const showNodes = useCallback(
    (nodes, startIndex) => {
      setVisibleNodes(
        nodes.map((node, i) => ({ ...node, visible: i <= startIndex }))
      );

      // 清除之前的所有定时器
      timeoutRefs.current.forEach(clearTimeout);
      timeoutRefs.current = [];

      // 根据延迟展示节点
      nodes.forEach((_, index) => {
        if (index > startIndex) {
          const timeout = setTimeout(
            () => {
              if (!isPaused) {
                setVisibleNodes((prev) => {
                  setCurrentIndex(index);
                  return prev.map((node, i) =>
                    i === index ? { ...node, visible: true } : node
                  );
                });
              }
            },
            (index - startIndex) * delay
          );
          // 保存定时器引用
          timeoutRefs.current.push(timeout);
        }
      });
    },
    [delay, isPaused]
  );

  // 指定起点
  useEffect(() => {
    showNodes(nodes, currentIndex);
  }, [currentIndex, delay, nodes, showNodes]);

  const handleNext = () => {
    if (currentIndex < nodes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleJumpTo = (index) => {
    if (index >= 0 && index < nodes.length) {
      setCurrentIndex(index);
    }
  };

  // 暂停
  const handlePause = () => {
    setIsPaused(true);
    timeoutRefs.current.forEach(clearTimeout);
  };

  // 继续
  const handleResume = () => {
    setIsPaused(false);
    showNodes(nodes, currentIndex);
  };

  return {
    visibleNodes,
    currentIndex,
    handleNext,
    handlePrev,
    handleJumpTo,
    handlePause,
    handleResume,
    isPaused,
  };
};

export default useProcessControl;
