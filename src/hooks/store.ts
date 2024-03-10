// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import { AppDispatch, RootState } from '../store/index'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'


// // Use throughout your app instead of plain `useSelector`
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// // Use throughout your app instead of plain `useDispatch`
// export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispach: () => AppDispatch = useDispatch
