function sortByName(a,b) {
  if (a.name_en > b.name_en) {
    return 1;
  } else if (a.name_en < b.name_en) {
    return -1;
  } else {
    return 0;
  }
}

function sortByNps(a,b) {
  if (parseInt(a.n_p_score, 10) - parseInt(b.n_p_score, 10) < 0) {
    return 1;
  } else if (parseInt(a.n_p_score, 10) - parseInt(b.n_p_score, 10) > 0) {
    return -1;
  } else {
    return 0;
  }
}

function sortByRating(a,b) {
  if (parseInt(a.average_p_rate, 10) - parseInt(b.average_p_rate, 10) < 0) {
    return 1;
  } else if (parseInt(a.average_p_rate, 10) - parseInt(b.average_p_rate, 10) > 0) {
    return -1;
  } else {
    return 0;
  }
}

export default function sort(array, sortBy) {
  return array.sort((a,b) => {
    if (sortBy === 'name') {
      return sortByName(a,b);
    } else if (sortBy === 'nps') {
      return sortByNps(a,b);
    } else {
      return sortByRating(a,b);
    }
  })
}
