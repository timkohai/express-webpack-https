function groupBy (arr, key) {
  return arr.reduce((acc, i) => {
    (acc[i[key]] = acc[i[key]] || []).push(i)
    return acc
  }, {})
}

function square (x) {
  return x * x
}

export {
  groupBy,
  square
}
