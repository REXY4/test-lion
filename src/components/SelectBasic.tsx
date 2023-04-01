import React from "react";
import Form from 'react-bootstrap/Form';

interface Props {
    placeholder : string
    data : any
    setId : any
}

const SelectBasic:React.FC<Props> =({ placeholder, data, setId})=> {
  return (
    <Form.Select style={{
        fontSize : "12px"
    }} aria-label="Default select example" onChange={(e)=>setId(e.target.value)}>
      <option value={data[0] !== undefined ? data[0].id : undefined}>{placeholder}</option>
      {data && data.map((item:any)=> <option value={parseInt(item.id)}>{item.name}</option>)}
    </Form.Select>
  );
}

export default SelectBasic;