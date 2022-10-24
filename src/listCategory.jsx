import { React } from 'react'
import { Tools } from '../tools';

function ListCategory(props) {

    // console.log(Tools)
    const arr = []
    arr.push('ALL')

    // add category in arr
    for (let x of Tools) {
        arr.push(x.category)
    }

    // remove doublon 
    var listCategory = [...new Set(arr)].sort()

    let categoryChange = (e) => {
        //convert input text to lower case
        var category = e.target.value
        props.setSelectCateg(category);
        props.setInputText("")
    };

    return (
        listCategory.map((item) =>
            <button value={item} onClick={categoryChange}>{item}</button>
        )
    )
}

export default ListCategory