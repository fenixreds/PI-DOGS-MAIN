import { useSelector } from "react-redux";
import './pagination.styles.css';


function Pagination({prePage,changeCpage,nextPage,recordsPerPage,currentPage}){

    const allDogs=useSelector((state)=>state.allDogs);

    const npage =Math.ceil(allDogs.length/recordsPerPage);
    const numbers =[...Array(npage+1).keys()].slice(1);

    return(
        <div className="pages-box">
            <li>
                <button onClick={prePage}>Prev</button>
            </li>
            {
                numbers.map((n,i)=>
                    <li  key={i}>
                        <button className={currentPage===n? "page-item-active":""} onClick={changeCpage}>{n}</button>
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