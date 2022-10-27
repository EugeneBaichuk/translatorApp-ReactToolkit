import { useSelector } from "react-redux";
import { showValue } from "../../slice/translateSlice"
import { HistoryElem } from "./HistoryElem";

const HistoryTranslate = () => {
    const {data} = useSelector(showValue);
    console.log(data);

    const historyArr = data.map((item, i) => {
        return (
            <HistoryElem num={i} {...item}/>
        );
    })


    return(
        <>
        <h2>Your history translate</h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Languages</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                    </tr>
                </thead>
                <tbody>
                        {historyArr}
                </tbody>
            </table>
        </>
    )
}

export default HistoryTranslate;