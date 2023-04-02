import { useRouter } from "next/router";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface Props {
    create : any
    category : any
    modal :any
}


const FormProduct: React.FC<Props> = ({create, category, modal}) => {
    const [form, setForm] = useState({
        plu : "",
        name : "",
        product_category_id : "",
        description : ""
    })
    let router = useRouter();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }
    const handleSubmit = async(e:any) =>{
        e.preventDefault();
        create(form, router)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>PLU</Form.Label>
                <Form.Control
                name="plu"
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)} 
                type="text"
                 placeholder="Insert Product Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control 
                name="name"
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)} 
                type="text" placeholder="Insert Product Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Category</Form.Label>
                  <Form.Select name="product_category_id" onChange={(e: any)=>onChange(e)} aria-label="Default select example">
                            <option>Select Category</option>
                            {category && category.map((item:any)=>{
                                return(
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )
                            })}
                  </Form.Select>
            </Form.Group>
            <Form.Group  className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Thumbnail</Form.Label>
                <Form.Control type="file" placeholder="" />
            </Form.Group>
            <div>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                name="name"
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)} 
                type="text" placeholder="Insert Product Name" />
                </Form.Group>
            </div>    
            <div className="d-flex justify-content-center mt-5 mb-5">
            <Button disabled={modal && modal.status} variant="primary" type="submit">
                Submit
            </Button>
            </div>
        </Form>
    );
};

export default FormProduct;
