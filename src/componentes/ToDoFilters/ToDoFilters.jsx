import { FiltersContainer, ItemLefts, FilterButtonContainer, FilterButton } from "./ToDoFilters.componentes"

const ToDoFilters = () => {
    return(
        <FiltersContainer>
            <ItemLefts/>
            <FilterButtonContainer>
                <FilterButton action={() => { }} active="All" filter='All' />
                <FilterButton action={() => { }} active="All" filter='Active' />
                <FilterButton action={() => { }} active="All" filter='Completed' /> 
            </FilterButtonContainer>
        </FiltersContainer>
    )
}   

export {ToDoFilters}