const calcPosition = (cardWidth, gap, column) => {
  const currentHeight = new Array(column).fill(0);
  const resPositionList = [];
  for (let index = 0; index < videoList.length; index++) {
    const position = {};
    //第一排元素顺序放置
    if (index <= column) {
      position.top = 0;
      position.left = (cardWidth + gap) * index;
      resPositionList.push(position);
      currentHeight[index] = videoList[index].height;
    } else {
      let minIndex = 0;
      let minHeight = currentHeight[minIndex];
      //获取当前最小高度 以及 索引
      _.forEach(currentHeight, (height, idx) => {
        if (height < minHeight) {
          minHeight = height;
          minIndex = idx;
        }
      });
      position.top = currentHeight[minIndex] + gap;
      position.left = (cardWidth + gap) * minIndex;
      resPositionList.push(position);
      //更新当前高度
      currentHeight[minIndex] += videoList[index].height + gap;
    }
  }
  return resPositionList;
}