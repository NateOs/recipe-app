'use strict'

const filters = {
    searchText : ""
}

const setFilters = (updates) => {
    if (typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText

        console.log(updates)

        console.log(`Filters.searchText: ${filters.searchText}`)
    }
}

const getFilters = () => filters

export { setFilters, getFilters }