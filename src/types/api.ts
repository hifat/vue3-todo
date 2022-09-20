import { AxiosError } from "axios"

export type DataError = {
   message: string
   errors: any
}

export type RequestError = {
   status: number,
   message?: string,
   errors?: any,
}

export type ApiError = {
   error: AxiosError | Error
}