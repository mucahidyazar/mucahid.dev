export type GenerateUrl = {
  query: Record<string, string | undefined>
  params: Record<string, string>
  pathname: string
}
export type Href = {
  pathname: string
  query?: Record<string, string | undefined>
}
export function generateUrl({ query, params = {}, pathname }: GenerateUrl): Href {
  const keyValue = Object.entries(query)[0]
  const key = keyValue?.[0]
  const value = params[key] === keyValue?.[1] ? undefined : keyValue?.[1]

  if (!key) {
    return {
      pathname,
      query: {
        ...params,
      },
    }
  }

  if (!value) {
    return {
      pathname,
      query: {
        ...params,
        [key]: undefined,
      },
    }
  }

  const hasQuery = params[key]
  if (!hasQuery) {
    return {
      pathname,
      query: {
        ...params,
        ...query,
      },
    }
  }

  const hasValue = params[key]?.split(',').includes(value)
  if (!hasValue) {
    return {
      pathname,
      query: {
        ...params,
        [key]: `${params[key]},${value}`,
      },
    }
  }

  const values = params[key].split(',')
  const index = values.indexOf(value)
  values.splice(index, 1)
  return {
    pathname,
    query: {
      ...params,
      [key]: values.join(','),
    },
  }
}