/** Set window.innerWidth and dispatch resize (for smart mode tests). */
export function resizeTo(width: number, height = 800) {
  Object.defineProperty(window, 'innerWidth', {
    configurable: true,
    writable: true,
    value: width,
  })
  Object.defineProperty(window, 'innerHeight', {
    configurable: true,
    writable: true,
    value: height,
  })
  window.dispatchEvent(new Event('resize'))
}
