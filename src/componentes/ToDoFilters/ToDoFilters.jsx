import { FiltersContainer, ItemLefts, FilterButtonContainer, FilterButton } from "./ToDoFilters.componentes"

const ToDoFilters = ({total, activeFilter, showAllTodos, showActiveTodos}) => {
    return(
        <FiltersContainer>
            <ItemLefts/>
            <FilterButtonContainer>
                <FilterButton action={() => { }} active="All" filter='All' />
                <FilterButton action={() => { }} active="All" filter='Active' />
                <FilterButton action={() => { }} active="All" filter='Completed' /> 
            </FilterButtonContainer>
            <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
                Clear Completed
            </button>
        </FiltersContainer>
    )
}   

export {ToDoFilters}