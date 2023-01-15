export function type(i) {
  let title
  if (i == "0") {
    title = '厂商'
  } else if (i == "1") {
    title = item.manufacturername
  } else {
    title = item.manufacturername + item.seriesname
  }
  return title
}
