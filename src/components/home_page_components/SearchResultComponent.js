import React from 'react';
import { useSelector } from 'react-redux';
import ContactCard from '../ContactCard';


const SearchResultComponent = () => {
    const searchResults = useSelector((state) => state.search.searchResults)
    console.log(searchResults)
  return (
    <div>
            <div className="m-3 d-flex flex-row flex-wrap">
                {searchResults.length !== 0 ?
                    searchResults.map((card, index) =>
                        <ContactCard card={card} index={index} key={index} />
                    )
                    : <div className="text-center h3">No cards found</div>
                }
            </div>
        </div>
  )
}

export default SearchResultComponent