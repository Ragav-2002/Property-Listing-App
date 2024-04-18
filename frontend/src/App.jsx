import axios from './service/axios'
import { createContext, useEffect, useReducer, useState } from 'react'
import recordReducer from './reducer/recordReducer'
import ShowRecords from './components/ShowRecords'
import RecordForm from './components/RecordForm'
export const RecordContext = createContext()
export function App() {
  const [records, recordDispatch] = useReducer(recordReducer , {data: [], loading: true, errors: ''})
  const [create, setCreate] = useState(false)
  console.log(records)
  useEffect(()=>{
    (async() => {
      try{
        const response = await axios.get('/getRecords')
        recordDispatch({type: 'GET_RECORDS', payload: response.data})
      }catch(e){
        recordDispatch({type: 'ERROR', payload: e.message})
      }
    })()
  }, [])
  const handleCreate = () => {
    setCreate(!create)
}
  return (
    <RecordContext.Provider value={{records: records.data, recordDispatch}}>
      <h1>Property Listing App</h1>
      {create ? <RecordForm create={handleCreate}/> :
        <button onClick={handleCreate}>create record</button>}<br/>
      {records.loading ? '...loading' : 
      !records.errors ? records.data.length ? <ShowRecords/> : 'no data' : 
      records.errors}
    </RecordContext.Provider>
  )
   
}
