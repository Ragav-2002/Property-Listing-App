import { useContext, useState } from "react"
import RecordForm from "./RecordForm"
import { RecordContext } from "../App"
import axios from '../service/axios'

export default function ShowRecord(props){
    const {record} = props
    const [view, setView] = useState(false)
    const [edit, setEdit] = useState('')
    const {recordDispatch} = useContext(RecordContext)
    const handleView = () => {
        setView(!view)
    }
    const handleEdit = (id) => {
        setEdit(id)
    }
    const handleDelete = async(id) => {
        try{
            await axios.delete(`/delete/record/${id}`)
            recordDispatch({type: 'DELETE_RECORD', payload: id})
        }catch(e){
            alert(e.message)
        }
    }
    return (
        edit==record._id ? 
        <RecordForm {...record} edit={handleEdit}/> :
        (view ? 
        <li key={record._id}>
            name: {record.name}<br/>
            description: {record.description}<br/>
            status: {record.status}<br/>
            location: {record.location}<br/>
            bedrooms: {record.bedrooms}<br/>
            bathrooms: {record.bathrooms}<br/>
            price: {record.price}$<br/>
            <button onClick={handleView}>hide</button>
            <button onClick={()=>{handleEdit(record._id)}}>edit</button>
            <button onClick={()=>{handleDelete(record._id)}}>delete</button>
        </li> : 
        <li key={record._id}>
            name: {record.name}<br/>
            status: {record.status}<br/>
            location: {record.location}<br/>
            <button onClick={handleView}>view</button>
            <button onClick={()=>{handleEdit(record._id)}}>edit</button>
            <button onClick={()=>{handleDelete(record._id)}}>delete</button>
        </li>)

    )
}