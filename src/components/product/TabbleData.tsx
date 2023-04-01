import { convertToRupiah } from "@/utils/convertRupiah";
import React, {useState} from "react";
import Table from 'react-bootstrap/Table';
import PaginationBasic from "@/components/Pagination";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



interface Props {
  product : any
}

const TabbleData:React.FC<Props>=({product})=> {
  const [currentPage, setCurrentPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(8);
  const [page, setPage ] = useState(1);
  const [search, setSearch] = useState("");

  const handlePagination = (num:number) =>{
    setPage(num + 1);
    setCurrentPage(num * 8);
    setPreviousPage((num + 1) * 8);
}

const handlePrev = () =>{
  setCurrentPage((previous:number)=>{
    if(previous === 0){
      return 0
    }else{
      return previous - 8
    }
  });

  setPreviousPage((previous:number)=>{
    if(previous === 8){
      return 8
    }else{
      return previous - 8
    }
  });
}

const handleNext = () =>{
  const productLength:number = product.length - 8;
  setCurrentPage((previous:number)=>{
    if(previous >= productLength){
      return previous;
    }else{
      return previous + 8;
    }
  });
  setPreviousPage((previous:number)=>{
    if(previous >= product.length){
      return previous
    }else{
      return previous + 8
    }
  });
}

const handleFirst:any= () =>{
  setCurrentPage(0);
  setPreviousPage(8);
}

const handleLast:any= ()=>{
  setCurrentPage(product.length - 8);
  setPreviousPage(product.length)
}

const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{    
  e.preventDefault();
  setSearch(e.target.value)
}

  return (
    <div>
      <div>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
          placeholder="insert : plu or Product Name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">Search Product</InputGroup.Text>
      </InputGroup>
      </div>
    <Table className="mb-4" striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>PLU</th>
          <th>Name</th>
          <th>Category</th>
          <th>variant</th>
          <th>Qty</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        {product.filter((fil:any) => 
        fil.name.toLowerCase().includes(search.toLowerCase())
        ||     String(fil.plu).includes(search.toLowerCase())
        ).slice(currentPage, previousPage).map((item:any, i:number)=>{
          return(
            <tr>
              <td>{currentPage + 1 + i}</td>
              <td>{item.plu}</td>
              <td>{item.name}</td>
              <td>{item.category[0]=== undefined ? "-" : item.category[0].name}</td>
              <td>
                {item.variant[0]=== undefined ? "-" :
                item.variant.map((item:any)=>{
                  return(
                    <>   
                    <tr>
                     <td>{item.name}</td>
                    </tr>
                    <hr/>
                    </>
                  )
                })
                }
              </td>
              <td>
                {item.variant[0]=== undefined ? "-" :
                item.variant.map((item:any)=>{
                  return(
                    <>   
                    <tr>
                     <td>{item.qty}</td>
                    </tr>
                    <hr/>
                    </>
                  )
                })
                }
              </td>
              <td>
                {item.variant[0]=== undefined ? "-" :
                item.variant.map((item:any)=>{
                  return(
                    <>   
                    <tr>
                     <td>{convertToRupiah(item.price)}</td>
                    </tr>
                    <hr/>
                    </>
                  )
                })
                }
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    <div className="d-flex justify-content-center">
      <PaginationBasic 
      handleFirst={handleFirst}
      handleLast={handleLast}
      handlePage={handlePagination}
      handlePrev={handlePrev} 
      handleNext={handleNext}
      data={product}
    />
    </div>
    </div>
  );
}

export default TabbleData;