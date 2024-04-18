import axios from './service/axios'
import { createContext, useEffect, useReducer } from 'react'
import recordReducer from './reducer/recordReducer'
import ShowRecords from './components/ShowRecords'
export const RecordContext = createContext()
export function App() {
  const [records, recordDispatch] = useReducer(recordReducer , {data: [], loading: true, errors: ''})
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
  return (
    <RecordContext.Provider value={{records: records.data, recordDispatch}}>
      <h1>Property Listing App</h1>
      {records.loading ? '...loading' : 
      !records.errors ? records.data.length ? <ShowRecords/> : 'no data' : 
      records.errors}
    </RecordContext.Provider>
  )
   
}
