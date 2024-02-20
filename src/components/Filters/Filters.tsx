import style from './Filters.module.scss'
import { Arrow } from '../User/Arrow'
import { useState, useEffect } from 'react'

type FiltersProps = {
    closeWindow: () => void
}



export const Filters = ({ closeWindow }: FiltersProps) => {


    return ( 
        <div className={style.filtersBackground}>
            <div className={style.filtersWindow}>
                <div className={style.filtersWindowWrapper}>
                    <header className={style.filtersHeader}>
                        Filters
                        <div className={style.closeFilters} onClick={closeWindow}>
                            <span className={style.closeFiltersSpan}></span>
                            <span className={style.closeFiltersSpan}></span>
                        </div>
                    </header>
                    <div className={style.containerForLable}>
                        <label className={style.filtersLable}>Sort by</label>
                        <div className={style.sortBy}>
                            <button className={style.sortButton}>
                                Rating
                            </button>
                            <button className={style.sortButton}>
                                Year
                            </button>
                        </div>
                    </div>
                    <div className={style.containerForLable}>
                        <label className={style.filtersLable}>Full or short movie name</label>
                        <input className={style.enterMovieName} type='text' placeholder='Your text' />
                    </div>
                    <div className={style.containerForLable}>
                        <label>Genre</label>
                        <div className={style.genre}>

                        </div>
                    </div>
                    <div className={style.containerForLable}>
                        <label className={style.filtersLable}>Years</label>
                        <div className={style.years}>
                            <input className={style.yearsFrom} type='text' placeholder='From' />
                            <input className={style.yearsTo} type='text' placeholder='To' />
                        </div>
                    </div>
                    <div className={style.containerForLable}>
                        <label className={style.filtersLable}>Rating</label>
                        <div className={style.rating}>
                            <input className={style.ratingFrom} type='text' placeholder='From' />
                            <input className={style.ratingTo} type='text' placeholder='To' />
                        </div>
                    </div>
                    <div className={style.containerForLable}>
                        <label className={style.filtersLable}>Country</label>
                        <div className={style.country}>
                            Select country
                            <div className={style.arrowDown}>
                                <Arrow />
                            </div>
                        </div>
                    </div>
                    <div className={style.buttonsFilters}>
                        <button className={style.clearFilter}>Clear filter</button>
                        <button className={style.showResults}>Show results</button>
                    </div>
                </div>
            </div>

        </div>
    )
}