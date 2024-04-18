import { useContext, useState } from "react"
import { RecordContext } from "../App"
import ShowRecord from "./ShowRecord"
import RecordForm from "./RecordForm"

export default function ShowRecords(){
    const {records} = useContext(RecordContext)
    const handleCreate = () => {
        setCreate(!create)
    }
    return (
        <>
        <ul>
            {records && records.map(record=>{
                return <ShowRecord key={record._id} record={record}/>
            })}
        </ul>
        </>
    )
}