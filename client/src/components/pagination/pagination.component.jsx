import { useSelector } from "react-redux";



function Pagination({prePage,changeCpage,nextPage,recordsPerPage}){

    const allDogs=useSelector((state)=>state.allDogs);

    //const recordsPerPage=8;
    const npage =Math.ceil(allDogs.length/recordsPerPage);
    const numbers =[...Array(npage+1).keys()].slice(1);

    return(
        <div>
            <li>
                <button onClick={prePage}>Prev</button>
            </li>
            {
                numbers.map((n,i)=>
                    <li key={i}>
                        <button onClick={changeCpage}>{n}</button>
                    </li>
                )
            }
            <li>
                <button onClick={nextPage}>Next</button>
            </li>
            
        </div>
    )
}

export default Pagination;