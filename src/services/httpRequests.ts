import axios, { AxiosError, AxiosResponse, Method } from 'axios'
import queryString from 'query-string'
import { MESSAGE_CODES } from './messageCodes.enum'

enum SERVICE_TYPES {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

enum RESPONSE_TYPES {
  OK,
  ERROR
}

// const PATH = process.env.NEXT_PUBLIC_BACKEND_URL
const PATH = ''

const baseHeaders = {
  token: '',
  Accept: 'application/json'
}

interface BaseRequestConfig {
  headers: typeof baseHeaders
}

type RequestConfig<T = any> = BaseRequestConfig & {
  url: string
  method: Method
  data?: T
}

type HttpRequestResponse<T = any> = {
  data?: T
  messageCode: MESSAGE_CODES
  statusCode: number
  error?: string
}

type StandardResponse<T = any> = {
  responseType: RESPONSE_TYPES
  messageCode?: MESSAGE_CODES
  data?: T
}

/**
 * Creates the common HTTP request configuration for all requests.
 * @param method - The HTTP method of the request.
 * @param url - The URL of the request.
 * @param params - The parameters of the request.
 * @param data - The data of the request.
 * @returns The request configuration.
 */

const createRequestConfig = <T>(
  method: Method,
  url: string,
  params: Record<string, unknown> = {},
  data: string | Record<string, unknown> = {}
): RequestConfig<T> => {
  const queryParams = params ? `?${queryString.stringify(params)}` : ''
  const requestURL = `${PATH}/${url}${queryParams}`

  return {
    headers: baseHeaders,
    url: requestURL,
    method,
    data: data as T
  }
}

/**
 * Performs an HTTP request using the provided configuration.
 * @param configuration - The request configuration.
 * @returns A promise that resolves with the request response.
 */

const executeRequest = async <T>(configuration: RequestConfig<T>): Promise<StandardResponse<T>> => {
  try {
    const response: AxiosResponse<HttpRequestResponse<T>> = await axios(configuration)
    return {
      responseType: RESPONSE_TYPES.OK,
      messageCode: response.data.messageCode,
      data: response.data?.data
    }
  } catch (error) {
    console.log(error)
    const castedError: AxiosError<HttpRequestResponse> = error as AxiosError<HttpRequestResponse>

    return {
      responseType: RESPONSE_TYPES.ERROR,
      messageCode: castedError.response?.data?.messageCode,
      data: castedError.response?.data?.data
    }
  }
}

/**
 * Performs an HTTP GET request.
 * @param url - The URL of the request.
 * @param params - The parameters of the request.
 * @returns A promise that resolves with the request response.
 */

export const getData = async <T>(
  url: string,
  params?: Record<string, unknown>
): Promise<StandardResponse<T>> => {
  const configuration = createRequestConfig<T>(SERVICE_TYPES.GET, url, params)
  return executeRequest<T>(configuration)
}

/**
 * Performs an HTTP DELETE request.
 * @param url - The URL of the request.
 * @param params - The parameters of the request.
 * @returns A promise that resolves with the request response.
 */

export const deleteData = async <T>(
  url: string,
  params?: Record<string, unknown>
): Promise<StandardResponse<T>> => {
  const configuration = createRequestConfig<T>(SERVICE_TYPES.DELETE, url, params)
  return executeRequest<T>(configuration)
}

/**
 * Performs an HTTP POST request.
 * @param url - The URL of the request.
 * @param params - The parameters of the request.
 * @param data - The data of the request.
 * @returns A promise that resolves with the request response.
 */

export const postData = async <T>(
  url: string,
  params: Record<string, unknown> = {},
  data: string | Record<string, unknown> = {}
): Promise<StandardResponse<T>> => {
  const configuration = createRequestConfig<T>(SERVICE_TYPES.POST, url, params, data)
  return executeRequest<T>(configuration)
}

/**
 * Performs an HTTP PATCH request.
 * @param url - The URL of the request.
 * @param data - The data of the request.
 * @param params - The parameters of the request.
 * @returns A promise that resolves with the request response.
 */

export const patchData = async <T>(
  url: string,
  data: any,
  params: Record<string, unknown>
): Promise<StandardResponse<T>> => {
  const configuration = createRequestConfig<T>(SERVICE_TYPES.PATCH, url, params, data)
  return executeRequest<T>(configuration)
}
