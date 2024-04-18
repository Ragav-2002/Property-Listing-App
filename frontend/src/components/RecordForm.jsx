import { useContext, useState } from "react"
import axios from '../service/axios'
import { RecordContext } from "../App"
export default function RecordForm(props){
    const {create,_id, name: n,description: d, status: s, location: l, bedrooms: bd, bathrooms: bt, price: p, edit} = props
    const [name, setName] = useState(n ? n : '')
    const [description, setDescription] = useState(d ? d : '')
    const [status, setStatus] = useState(s ? s : '')
    const [location, setLocation] = useState(l ? l : '')
    const [bedrooms, setBedrooms] = useState(bd ? bd : '')
    const [bathrooms, setBathrooms] = useState(bt ? bt : '')
    const [price, setPrice] = useState(p ? p : '')
    const {recordDispatch} = useContext(RecordContext)
    const handleCreate = async(e) => {
        e.preventDefault()
        const formData = {name, description, status, location, bedrooms, bathrooms, price}
        try{
            const response = await axios.post('/create/record', formData)
            recordDispatch({type: 'CREATE_RECORD', payload: response.data.record})
        }catch(e){
            alert(e.message)
        }finally{
            create()
        }
    }
    const handleEdit = async(e) => {
        e.preventDefault()
        const formData = {name, description, status, location, bedrooms, bathrooms, price}
        try{
            const response = await axios.put(`/update/record/${_id}`, formData)
            recordDispatch({type: 'UPDATE_RECORD', payload: response.data.record})
        }catch(e){
            alert(e.message)
        }finally{
            edit()
        }
    }
    const handleSubmit = edit ? handleEdit : handleCreate
    return (
        <>
            <h2>{edit ? 'Edit' : 'create'} Record</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">name</label><br/>
                <input type="text" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
                <label htmlFor="description">description</label><br/>
                <input type="text" id="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} /><br/>
                <label htmlFor="status">Status</label>
                <select id="status" value={status} onChange={(e)=>{setStatus(e.target.value)}}>
                    <option value=''>Select</option>
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Sold">Sold</option>
                </select><br/>
                <label htmlFor="location">location</label><br/>
                <input type="text" id="location" value={location} onChange={(e)=>{setLocation(e.target.value)}} /><br/>
                <label htmlFor="bedrooms">bedrooms</label><br/>
                <input type="number" id="bedrooms" value={bedrooms} onChange={(e)=>{setBedrooms(e.target.value)}} /><br/>
                <label htmlFor="bathrooms">bathrooms</label><br/>
                <input type="number" id="bathrooms" value={bathrooms} onChange={(e)=>{setBathrooms(e.target.value)}} /><br/>
                <label htmlFor="price">price</label><br/>
                <input type="number" id="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} /><br/>
                <input type="submit" value={create ? 'create' : 'edit'}/>
                <button onClick={create ? create : edit}>cancel</button>
            </form>
        </>
    )
}