import style from './InputsStyles.module.scss'

type Props = {
    lable: string
    type: string
    placeholder: string
    className?: string
    // ref1?: React.RefObject<HTMLInputElement>

    // value?: string
    // onChange?: (text: string) => void
    // errors?: AuthErrors
    
}


export const TextInput = ({lable, type, placeholder, className}: Props) => {
    

    return (
        <div className={`${style.wrapperInput} ${className}`}>
            <label  className={style.lableInput}>
                {lable}
            </label>
            <input 
            type={type}
            className={style.textInput}
            placeholder={placeholder} 

            // ref={ref1}
            // value={text} 
            // onInput={func}  
            />
            
        </div>
    )
}