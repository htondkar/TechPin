function compareName(a,b) {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
}

function compareNps(a,b) {
  if (parseInt(a.nps, 10) - parseInt(b.nps, 10) < 0) {
    return 1;
  } else if (parseInt(a.nps, 10) - parseInt(b.nps, 10) > 0) {
    return -1;
  } else {
    return 0;
  }
}
function compareRating(a,b) {
  if (parseInt(a.rating, 10) - parseInt(b.rating, 10) < 0) {
    return 1;
  } else if (parseInt(a.rating, 10) - parseInt(b.rating, 10) > 0) {
    return -1;
  } else {
    return 0;
  }
}

export default function sort(array, sortBy) {
  return array.sort((a,b) => {
    if (sortBy === 'name') {
      return compareName(a,b);
    } else if (sortBy === 'nps') {
      return compareNps(a,b);
    } else {
      return compareRating(a,b);
    }
  })
}
