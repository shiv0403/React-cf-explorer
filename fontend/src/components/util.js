export const getHandles = (url) => {
  const urlArray = url;
  let handles = [];

  let handle1 = "",
    handle2 = "";
  let i = urlArray.length - 1;

  while (urlArray[i] !== "&") {
    handle2 = handle2 + urlArray[i];
    i--;
  }
  i--;

  while (urlArray[i] !== "/") {
    handle1 = handle1 + urlArray[i];
    i--;
  }

  const reverse = (str) => {
    let revStr = "";
    for (var j = str.length - 1; j >= 0; --j) {
      revStr = revStr + str[j];
    }
    return revStr;
  };

  handles.push(reverse(handle1));
  handles.push(reverse(handle2));

  return handles;
};

export const getCommonContest = (arr1, arr2) => {
  let arr = [];

  for (var i = 0; i < arr1.length; ++i) {
    for (var j = 0; j < arr2.length; ++j) {
      if (arr1[i].contestId === arr2[j].contestId) {
        arr.push({
          firstInfo: arr1[i],
          secondInfo: arr2[j],
        });
        break;
      }
    }
  }

  return arr;
};
