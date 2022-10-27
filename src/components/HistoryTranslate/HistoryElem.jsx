export const HistoryElem = ({lang1, lang2, text, translate, num}) => {
  return (
    <tr>
        <th scope="row">{num + 1}</th>
        <td>{`${lang1 || ""}-${lang2 || ""}`}</td>
        <td>{text || ""}</td>
        <td>{translate || ""}</td>
    </tr>
  )
}
