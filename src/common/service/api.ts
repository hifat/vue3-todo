import axios, { AxiosResponse, AxiosError } from 'axios'
import * as TokenService from './token'
import { swalFire } from '../../utilities/helper/alert'
import { DataError, RequestError, ApiError } from '../../types/api'

const requestError = (status: number, data: DataError): RequestError => {
   switch (status) {
      case 401:
         return {
            status,
            message: data.message,
         }
      case 403:
         return {
            status,
            message: data.message,
         }
      case 404:
         return {
            status,
            message: 'Page or data not found',
         }
      case 405:
         return {
            status,
            message: 'Method not allowed',
         }
      case 409:
         return {
            status,
            message: 'The request could not be fulfilled',
         }
      case 422:
         return {
            status,
            errors: data.errors,
         }
      case 429:
         return {
            status,
            message: 'Too Many Attempts',
         }
      case 500:
         return {
            status,
            message: 'Server Error',
         }
      case 503:
         return {
            status,
            message: 'Service Unavailable',
         }
      default:
         return {
            status: 520,
         }
   }
}

/**
 * Request service
 */
export const request = async (method: string, url: string, data: object = {}, alert401: boolean = true): Promise<any> => {
   try {
      const token = TokenService.getAccessToken()

      axios.defaults.baseURL = import.meta.env.VITE_API_APP_URL
      axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'

      if (token) {
         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      }

      const res = await axios({ method, url, data })

      return res.data
   } catch (error) {
      const err = error as Error | AxiosError
      if (axios.isAxiosError(err) && err.response) {
         const { status, data }: AxiosResponse = err.response

         const message = requestError(status, data)

         if ((status !== 422 && status !== 401) || (status === 401 && alert401)) {
            swalFire('error', `${message.status}: ${message.message}`)
         }

         return {
            error: requestError(status, data),
         }
      }

      return { error }
   }
}
