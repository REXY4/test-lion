import { useRouter } from "next/router";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface Props {
    create : any
    category : any
    modal :any
}


const FormCategory: React.FC<Props> = ({create, category, modal}) => {
    const [form, setForm] = useState({
        name : "",
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
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                name="name"
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)} 
                type="text"
                 placeholder="Insert Product Name" />
            </Form.Group>
            <div className="d-flex justify-content-center mt-5 mb-5">
            <Button disabled={modal && modal.status} variant="primary" type="submit">
                Submit
            </Button>
            </div>
        </Form>
    );
};

export default FormCategory;
