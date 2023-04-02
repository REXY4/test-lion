import React, { useState, } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import {AiOutlineDelete} from "react-icons/ai"
import PaginationBasic from "@/components/Pagination";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {AiOutlineEdit} from "react-icons/ai"
import { useRouter } from "next/router";

interface Props {
    product: any;
    deleteData : any
    reload : any
    getDetail : any
}

const TabbleCategory: React.FC<Props> = ({ product, deleteData, reload, getDetail }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [previousPage, setPreviousPage] = useState(8);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    let router = useRouter();
    const handlePagination = (num: number) => {
        setPage(num + 1);
        setCurrentPage(num * 8);
        setPreviousPage((num + 1) * 8);
    };

    const handlePrev = () => {
        setCurrentPage((previous: number) => {
            if (previous === 0) {
                return 0;
            } else {
                return previous - 8;
            }
        });

        setPreviousPage((previous: number) => {
            if (previous === 8) {
                return 8;
            } else {
                return previous - 8;
            }
        });
    };

    const handleNext = () => {
        const productLength: number = product.length - 8;
        setCurrentPage((previous: number) => {
            if (previous >= productLength) {
                return previous;
            } else {
                return previous + 8;
            }
        });
        setPreviousPage((previous: number) => {
            if (previous >= product.length) {
                return previous;
            } else {
                return previous + 8;
            }
        });
    };

    const handleFirst: any = () => {
        setCurrentPage(0);
        setPreviousPage(8);
    };

    const handleLast: any = () => {
        setCurrentPage(product.length - 8);
        setPreviousPage(product.length);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    const handleDelete = (id:string) =>{
        deleteData(id, reload)
    }

    const handleDetail = (id:string) =>{
        getDetail(id, router);
    }

  
    return (
        <div>
            <div>
                
                <InputGroup className="mb-3">
                    <Form.Control
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onChange(e)
                        }
                        placeholder="insert :  category Name and active"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">
                        Search Product
                    </InputGroup.Text>
                </InputGroup>
            </div>
            <Table className="mb-4" striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Active</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {product
                        .filter((fil: any) =>
                            fil.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        )
                        .slice(currentPage, previousPage)
                        .map((item: any, i: number) => {
                            return (
                                <tr>
                                    <td>{currentPage + 1 + i}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        {item.active ? "active" : "non Active"}
                                    </td>
                                    <td className="d-flex justify-content-evenly">
                                        <Button onClick={()=>handleDelete(item.id)} variant="danger"><AiOutlineDelete/></Button>
                                        <Button onClick={()=>handleDetail(item.id)}><AiOutlineEdit/></Button>
                                    </td>
                                </tr>
                            );
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
};

export default TabbleCategory;
