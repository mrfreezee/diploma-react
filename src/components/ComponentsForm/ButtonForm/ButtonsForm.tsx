import style from './ButtonForm.module.scss'

type Props = {
    nameButton: string
}

export const ButtonForm = ({nameButton}: Props) =>{
    return(
        <button className={style.buttonForm}>{nameButton}</button>
    )
}