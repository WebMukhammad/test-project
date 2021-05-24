export function serializeQueryParams(obj = {}, { delimiter = '&' } = {}) {
  if (Object.keys(obj).length === 0) {
    return ''
  }
  let query = '?'
  for (const prop in obj) {
    if (Array.isArray(obj[prop])) {
      obj[prop].forEach((el) => {
        query += `${prop}=${el}${delimiter}`
      })
    } else if (obj[prop]) {
      query += `${prop}=${encodeURI(obj[prop])}${delimiter}`
    }
  }
  return query.slice(0, -1) // crop the last char, it's a unnecessary delimiter
}

export function getFormData(obj) {
  const data = new FormData()

  for (const prop in obj) {
    if (obj[prop] instanceof FileList) {
      Array.from(obj[prop]).forEach((el) => {
        data.append(prop + '[]', el)
      })
    } else {
      data.append(prop, obj[prop])
    }
  }

  return data
}
