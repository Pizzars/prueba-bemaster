import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppDispatch, RootSate } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector
