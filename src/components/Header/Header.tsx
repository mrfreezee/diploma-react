import style from './Header.module.scss'
import { Search } from '../Search/Search'
import { User } from '../User/User'
import { Filters } from '../Filters/Filters'
import { useState } from 'react'


export const Header = () => {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false)

    const toggleFilters = () => {
        setIsFiltersOpen((prevState) => !prevState)
    }

    const closeFilters = () => {
        setIsFiltersOpen(false);
    }
    return (
        <header className={style.header}>
            <Search openFilters={toggleFilters}/>
            <User />
            {isFiltersOpen && <Filters closeWindow={closeFilters} />}
        </header>
    )
}