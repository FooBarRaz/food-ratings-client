import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import type { RootState, AppDispatch } from './store/rootStore'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useQuery = ()=> new URLSearchParams(useLocation().search);