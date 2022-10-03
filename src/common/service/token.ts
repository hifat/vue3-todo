const REFRESH_TOKEN  = "refresh_token"
const ACCESS_TOKEN  = "access_token"

// Refresh

export const getRefreshToken = (): string | null => {
  return localStorage.getItem(REFRESH_TOKEN)
}

export const saveRefreshToken = (token: string) => {
  localStorage.setItem(REFRESH_TOKEN, token)
}

export const destroyRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN)
}

// Access

export const getAccessToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN)
}

export const saveAccessToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN, token)
}

export const destroyAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN)
}
