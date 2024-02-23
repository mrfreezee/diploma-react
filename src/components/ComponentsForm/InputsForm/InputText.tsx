import { useSelector } from 'react-redux'
import style from './InputsStyles.module.scss'
import { selectTheme } from '../../../store/Theme/selectors'
import { useState } from 'react'

type Props = {
    lable?: string
    type: string
    placeholder: string
    className?: string
    // ref1?: React.RefObject<HTMLInputElement>
    value?: string
    onChange?: (text: string) => void
    // errors?: AuthErrors
    
}



export const TextInput = ({lable, type, placeholder, className, value, onChange}: Props) => {
    const {theme} = useSelector(selectTheme)

    const [text, setText] = useState(value)

    const func = (e: React.FormEvent<HTMLInputElement>) =>{
        setText(e.currentTarget.value)
        onChange && onChange(e.currentTarget.value)
    }

    return (
        <div className={`${style.wrapperInput} ${className}`}>
            <label  className={style.lableInput}>
                {lable}
            </label>
            <input 
            type={type}
            className={theme === 'dark' ? style.textInput : `${style.textInput} ${style.textInputLight}`}
            placeholder={placeholder} 
            
            // ref={ref1}
            value={text} 
            onInput={func}  
            />
            
        </div>
    )
}