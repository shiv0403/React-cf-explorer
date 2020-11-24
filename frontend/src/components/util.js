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

const colors = {
  newbie: {
    color: "gray",
  },
  pupil: {
    color: "green",
  },
  specialist: {
    color: "#03A89E",
  },
  expert: {
    color: "blue",
  },
  candidate_master: {
    color: "#a0a",
  },
  master: {
    color: "#FF8C00",
  },
  inter_master: {
    color: "orange",
  },
  grandmaster: {
    color: "red",
  },
  inter_grandmaster: {
    color: "red",
  },
  legend_grandmaster: {
    color: "red",
  },
};

export const getColor = (UserInfo) => {
  console.log(UserInfo.rank);
  switch (UserInfo.rank) {
    case "newbie": {
      return colors.newbie.color;
    }
    case "pupil": {
      return colors.pupil.color;
    }
    case "specialist": {
      return colors.specialist.color;
    }
    case "expert": {
      return colors.expert.color;
    }
    case "candidate master": {
      return colors.candidate_master.color;
    }
    case "master": {
      return colors.master.color;
    }
    case "international master": {
      return colors.inter_master.color;
    }
    case "grandmaster": {
      return colors.grandmaster.color;
    }
    case "international grandmaster": {
      return colors.inter_master.color;
    }
    case "legendary grandmaster": {
      return colors.legend_grandmaster.color;
    }
    default: {
      return null;
    }
  }
};
