var main = function (array, joinString) {
  if (typeof joinString === 'undefined') {
    joinString = ' ';
  }
  var myReturn = array.reduce(function (p, c) {
    if (c.length > 0) {
      var oll = OverlapLength(p, c);
      return [p, c.slice(oll).trim()].join(joinString);
    } else {
      return p;
    }
  })
  return myReturn;
}

function OverlapLength(s1, s2) {
  if (s1.length > s2.length) {
    s1 = s1.slice(-s2.length);
  }
  var T = BackTrackTable(s2);

  var m = 0;
  var i = 0;
  while (m + i < s1.length) {
    if (s2[i] == s1[m + i]) {
      i += 1;
    } else {
      m += i - T[i];
      if (i > 0) i = T[i];
    }
  }
  return i;
}
function BackTrackTable(s) {
  var T = new Array(s.length);
  var cnd = 0;
  T[0] = -1;
  T[1] = 0;
  var pos = 2;
  while (pos < s.length) {
    if (s[pos - 1] == s[cnd]) {
      T[pos] = cnd + 1;
      pos += 1;
      cnd += 1;
    } else if (cnd > 0) {
      cnd = T[cnd];
    } else {
      T[pos] = 0;
      pos += 1;
    }
  }
  return T;
}

module.exports = main;