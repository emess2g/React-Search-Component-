import PropTypes from 'prop-types'

import './SearchList.css'

function  SearchList ( {results} )  {
    
  return  <div className='results-list'>
        { results.map((result, id) => {
            return <div key={id}> {result.name}</div>
        }) }
      </div>
  
}

SearchList.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({ 
         id: PropTypes.number,
         name: PropTypes.string,
    })),
}

export default SearchList;