import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {RootState,AppDispatch} from "../redux/store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export {
    useAppDispatch,
    useAppSelector
}