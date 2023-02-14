type propsType = {
    label: string,
    setState: Function,
    objKey: string,
    isNumber?: boolean
}


export const FormItem = (props: propsType) => {

    const onChangeHandler = (e:any) => {
        props.setState((prev: any)=> {
            if (props.isNumber) {
                return({...prev, [props.objKey]: +e.target.value})
            }
            else {
                return({...prev, [props.objKey]: e.target.value})
            }
        }
        )
    }

    return(
        <div className='form-group row'>
            <label className='col-sm-3 col-form-label'> {props.label}  </label>
                <div className='col-sm'>
                    <input type='text' className='form-text' onChange={(e)=> onChangeHandler(e)}
                    ></input>
                </div>
        </div>
    )
}