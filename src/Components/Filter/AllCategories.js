import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <div className="allFilters upperFilters">
                <h2 className="h2Filter">Filter by Category:</h2>
                <div className="allFilters">
                    {['ALL', 'EARRINGS', 'NECKLACES', 'SPECIALTY']
                    .map(category => {
                        return(
                            <div key={category}>
                                <Filter className="allFilters" category={category} />
                            </div>
                    )})}
                </div>
            </div>

            <div className="allFilters bottomFilters">
                <h2 className="h2Filter">Filter by Material:</h2>
                <div className="allFilters">
                    {['METAL', 'GLASS', 'PLASTIC', 'PEARL', 'ALL']
                    .map(category => {
                        return(
                            <div key={category}>
                                <Filter category={category} />
                            </div>
                    )})}
                </div>
            </div>

        </div>
    )
}

export default AllCategories;