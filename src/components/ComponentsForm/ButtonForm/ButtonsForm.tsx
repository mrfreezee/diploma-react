import style from './ButtonForm.module.scss'

type Props = {
    nameButton: string
    onClick?: () => void
}

export const ButtonForm = ({nameButton, onClick}: Props) =>{
    return(
        <button className={style.buttonForm} type='submit'>{nameButton}</button>
    )
}