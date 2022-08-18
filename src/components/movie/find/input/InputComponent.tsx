import React, {FC} from 'react';
import {useForm} from "react-hook-form";

import {ErrorComponent, FindMovieComponent, InputMui} from "../../../index";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {actions} from "../../../../redux/slice";


import css from './InputComponent.module.css'


const InputComponent:FC = () => {
    const {reset, register, handleSubmit, formState: {errors}} = useForm({mode: 'all'});

    const {showArr} = useAppSelector(state => state.show);

    const dispatch = useAppDispatch();


    // @ts-ignore
    const submit = async ({name}) => {
        dispatch(actions.getMovie(showArr.subscriptions[0].watch(name)))
        reset()
    }



    return (
        <div className={css.inputWrap}>
            <div><InputMui handleSubmit={handleSubmit} submit={submit} register={register} showArr={showArr}/>
                {errors.name &&<ErrorComponent/>}</div>
            <div className={css.movie}><FindMovieComponent/></div>
        </div>

    );
};

export default InputComponent;