import style from './Filters.module.scss'
import { Arrow } from '../User/Arrow'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../store/Theme/selectors'
import { TextInput } from '../ComponentsForm/InputsForm/InputText'
import { sortByRatingAction, sortByYearAction } from '../../store/Movies/reducer'
import { useAppDispatch } from '../../helpers/Hooks'
import { filterByYearAction } from '../../store/Movies/actions'

type FiltersProps = {
    closeWindow: () => void
}

export const Filters = ({ closeWindow }: FiltersProps) => {

    const { theme } = useSelector(selectTheme)

    const dispatch = useAppDispatch()

    const [isActiveBtn, setActiveBtn] = useState('year')

    const handleButtonClick = (btnType: string) => {
        setActiveBtn(btnType)
    }

    const [fromYear, setFromYear] = useState('');
    const [toYear, setToYear] = useState('');

    const handleShowResults = () => {
        const fromYearInt = parseInt(fromYear, 10);
        const toYearInt = parseInt(toYear, 10);

        if (!isNaN(fromYearInt) && !isNaN(toYearInt)) {
            dispatch(filterByYearAction(fromYearInt, toYearInt));
        } else {
            console.error('Invalid year values');
        }
    };


    return (
        <div className={style.filtersBackground}>
            <div className={theme === 'dark' ? style.filtersWindow : `${style.filtersWindow} ${style.filtersWindowLignt}`}>
                <div className={style.filtersWindowWrapper}>
                    <header className={style.filtersHeader}>
                        Filters
                        <div className={style.closeFilters} onClick={closeWindow}>
                            <span className={style.closeFiltersSpan}></span>
                            <span className={style.closeFiltersSpan}></span>
                        </div>
                    </header>
                    <div className={theme === 'dark' ? style.containerSortBy : `${style.containerSortBy} ${style.containerSortByLight}`}>
                        <label className={style.filtersLable}>Sort by</label>
                        <div className={theme === 'dark' ? style.sortBy : `${style.sortBy} ${style.sortByLight}`}>
                            <button
                                className={isActiveBtn === 'rating' ? style.sortButton : `${style.sortButton} ${style.sortButtonActive}` &&
                                    theme === 'dark' ? style.sortButton : `${style.sortButton} ${style.sortButtonActiveLight}`}
                                onClick={() => {
                                    dispatch(sortByRatingAction())
                                    handleButtonClick('year')
                                }}
                            >
                                Rating
                            </button>
                            <button
                                className={isActiveBtn === 'year' ? style.sortButton : `${style.sortButton} ${style.sortButtonActive}` &&
                                    theme === 'dark' ? style.sortButton : `${style.sortButton} ${style.sortButtonActiveLight}`}
                                onClick={() => {
                                    dispatch(sortByYearAction())
                                    handleButtonClick('rating')
                                }}
                            >
                                Year
                            </button>
                        </div>
                    </div>
                    <TextInput type='text' placeholder='Your text' lable='Full or short movie name' />
                    <div className={style.containerForLable}>
                        <label>Genre</label>
                        <div className={theme === 'dark' ? style.genre : `${style.genre} ${style.genreLight}`}>

                        </div>
                    </div>
                    <div className={style.years}>
                        <div className={style.wrapperInp}>
                            <TextInput value={fromYear}  type='text' placeholder='From' lable='Years' />
                        </div>
                        <div className={style.wrapperInp}>
                            <TextInput value={toYear} type='text' placeholder='To' />
                        </div>
                    </div>
                    <div className={style.rating}>
                        <div className={style.wrapperInp}>
                            <TextInput type='text' placeholder='From' lable='Rating' />
                        </div>
                        <div className={style.wrapperInp}>
                            <TextInput type='text' placeholder='To' />
                        </div>
                    </div>
                    <div className={style.containerForLable}>
                        <label className={style.filtersLable}>Country</label>
                        <div className={theme === 'dark' ? style.country : `${style.country} ${style.countryLight}`}>
                            Select country
                            <div className={style.arrowDown}>
                                <Arrow />
                            </div>
                        </div>
                    </div>
                    <div className={style.buttonsFilters}>
                        <button className={theme === 'dark' ? style.clearFilter : `${style.clearFilter} ${style.clearFilterLignt}`}>Clear filter</button>
                        <button className={style.showResults} onClick={handleShowResults}>Show results</button>
                    </div>
                </div>
            </div>

        </div>
    )
}