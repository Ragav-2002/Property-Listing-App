import { useContext, useState } from "react"
import { RecordContext } from "../App"
import ShowRecord from "./ShowRecord"

export default function ShowRecords(){
    const {records} = useContext(RecordContext)
    return (
        <>
        <h2>Total Records - {records.length}</h2>
        <ul>
            {records && records.map(record=>{
                return <ShowRecord key={record._id} record={record}/>
            })}
        </ul>
        </>
    )
}