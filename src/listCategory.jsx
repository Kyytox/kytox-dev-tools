import { React } from 'react'
import { Tools } from '../tools';

function ListCategory(props) {

    // console.log(Tools)
    const arr = []

    // add category in arr
    for (let x of Tools) {
        arr.push(x.category)
    }

    // remove doublon 
    var listCategory = [...new Set(arr)]

    console.log(listCategory);

    return (
        listCategory.map((item) =>
            <div className='list-category'>
                <p>{item}</p>
            </div>
        )
    )
}

export default ListCategory