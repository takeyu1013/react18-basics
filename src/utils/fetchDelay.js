export const dalay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
