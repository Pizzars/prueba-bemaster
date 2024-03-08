export enum StateRequest {
  EMPTY,
  LOADING,
  ERROR,
  SUCCESS
}
export interface BaseReducerProps {
  status: StateRequest
  page: number
  load: boolean
}

export const baseState: BaseReducerProps = {
  status: StateRequest.EMPTY,
  page: 1,
  load: false
}
