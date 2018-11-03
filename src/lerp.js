export const lerp = (orig, dest, fraction) => {
  const dist = dest - orig
  return orig + dist * fraction
}