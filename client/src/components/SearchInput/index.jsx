import React from "react";
import { SearchOutlined } from '@ant-design/icons';


import './SearchInput.scss';
const SearchInput = (props) => {
    return (
        <div className="search__dialogs">
                <div className="search__input--block">
                    <div className="search__icon--dialog">
                        <SearchOutlined />
                    </div>
                    <input type="text" placeholder="поиск диалога" {...props}/>
                </div>
         </div>
    )
}

export default SearchInput;