import React from 'react';


//http://localhost:3000/search?keyword=etst
//{new URLSearchParams(location.search).get('keyword')}
// url param get
const Search = ({location}) => {
    return (
        <div>
            {new URLSearchParams(location.search).get('keyword')} 검색
        </div>
    );
};

export default Search;