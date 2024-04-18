import { useContext, useState } from "react"
import { RecordContext } from "../App"
import ShowRecord from "./ShowRecord"
import RecordForm from "./RecordForm"

export default function ShowRecords(){
    const [create, setCreate] = useState(false)
    const {records} = useContext(RecordContext)
    const handleCreate = () => {
        setCreate(!create)
    }
    return (
        <>
        {create ? <RecordForm create={handleCreate}/> :
        <button onClick={handleCreate}>create record</button>}
        <ul>
            {records && records.map(record=>{
                return <ShowRecord key={record._id} record={record}/>
            })}
        </ul>
        </>
    )
}