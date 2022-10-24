import { React } from 'react'
import { Tools } from '../tools';

function ListTools(props) {

    // const sortlistTools = Tools.sort(() => Math.random() - 0.5);
    console.log(props.selectCateg)

    //create a new array by filtering the original array
    const filteredData = Tools.filter((tool) => {
        //if no input the return the original
        if (props.selectCateg && props.inputText === '') {
            if (props.selectCateg === "ALL") {return tool} else {return tool.category.includes(props.selectCateg)}
        } else if (props.inputText === '') {
            return tool;
        } else {
            //return the item which contains the user input
            return tool.site.toLowerCase().includes(props.inputText)
        }
    })

    return (
        filteredData.map((item) =>
            <div className='box'>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.img}></img>
                    <div className="overlay">
                        <p>{item.site}</p>
                        <p>{item.description}</p>
                    </div>
                </a>
            </div>
        )
    )
}

export default ListTools