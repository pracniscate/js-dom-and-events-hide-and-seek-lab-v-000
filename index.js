// returns the first element that matches
function getFirstSelector(selector) {
  return document.querySelector(selector);
};

// pulls a .target out of #nested
function nestedTarget() {
  return document.querySelector('#nested .target');
};

// increases the ranks in all of the .ranked-lists by n
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < rankedLists.length; i++) {
    let children = rankedLists[i].children;

    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    };
  };
};

// pulls out the most deeply nested child from div#grand-node
function deepestChild() {
  const deepest = document.getElementById('grand-node').querySelector('div div div div div');
  return deepest;
};