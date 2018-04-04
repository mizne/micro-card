const isInCenterViewport = (elem: Element): boolean => {
  const distance = elem.getBoundingClientRect()

  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight
  const windowWidth = window.innerWidth || document.documentElement.clientWidth

  const bol =
    distance.top > 0 &&
    distance.top <= windowHeight * 3 / 4 &&
    distance.left >= 0 &&
    distance.right <= windowWidth

  return bol
}

export { isInCenterViewport }
