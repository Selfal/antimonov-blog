type FunctionType = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  object: Record<string, string | any>,
  array?: Array<string>,
) => Array<string>

export const deepMapValues: FunctionType = (object, array = []) => {
  const tmp: Array<string> = array
  Object.keys(object).map((element) => {
    const value = object[element]
    if (typeof value === 'object') {
      deepMapValues(value, tmp)
    } else {
      tmp.push(value)
    }
  })
  return tmp
}
