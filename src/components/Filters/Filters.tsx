import style from './Filters.module.scss'
import { Arrow } from '../User/Arrow'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../store/Theme/selectors'
import { TextInput } from '../ComponentsForm/InputsForm/InputText'

type FiltersProps = {
    closeWindow: () => void
}

export const Filters = ({ closeWindow }: FiltersProps) => {

    const [isActiveBtn, setActiveBtn] = useState('rating')

    const handleButtonClick = (btnType: string) => {
        setActiveBtn(btnType)
    }
    const { theme } = useSelector(selectTheme)

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
                                onClick={() => handleButtonClick('year')}
                            >
                                Rating
                            </button>
                            <button
                                className={isActiveBtn === 'year' ? style.sortButton : `${style.sortButton} ${style.sortButtonActive}` &&
                                    theme === 'dark' ? style.sortButton : `${style.sortButton} ${style.sortButtonActiveLight}`}
                                onClick={() => handleButtonClick('rating')}
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
                        <TextInput type='text' placeholder='From' lable='Years' />
                        <TextInput type='text' placeholder='To' />
                    </div>
                    <div className={style.rating}>
                        <TextInput type='text' placeholder='From' lable='Rating' />
                        <TextInput type='text' placeholder='To' />
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
                        <button className={style.showResults}>Show results</button>
                    </div>
                </div>
            </div>

        </div>
    )
}