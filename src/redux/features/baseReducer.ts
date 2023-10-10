export enum StateRequest {
  EMPTY,
  LOADING,
  ERROR,
  SUCCESS
}
export interface BaseReducerProps {
  status: StateRequest
}

export const baseState: BaseReducerProps = {
  status: StateRequest.EMPTY
}
