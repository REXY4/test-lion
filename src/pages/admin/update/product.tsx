import Drawer from "@/components/Drawer";
import BasicNavbars from "@/components/Navbars";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { getAllCategory } from "@/actions/category";
import { createProduct, updateProduct } from "@/actions/product";
import PrivateRoute from "@/components/PrivateRoute";
import AlertBasic from "@/components/AlertBasic";
import FormUpdate from "@/components/product/FormUpdate";

interface State {
    category: {
        category: any;
    };
    modal : {
        alert : any
    }
    product : {
        detail : any
    }
}

interface Props {
    category: State;
    getAllCategory: any;
    createProduct : any;
    modal :any;
    product : any
    updateProduct : any
}

const UpadateProduct: React.FC<Props> = ({ category, getAllCategory, createProduct, modal, product, updateProduct }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        getAllCategory();
    }, []);
        
    return (
        <PrivateRoute allowedRoles={["admin"]}>
            <div>
                <BasicNavbars show={show} showDrawer={setShow} />
                <div className="d-flex">
                    <Drawer active="product" show={show} setShow={setShow} />
                    <Container
                        style={{
                            marginTop: "100px",
                            marginLeft: "100px",
                            marginRight: "100px",
                        }}
                    >
                        
                        <Row className="mb-5">
                              {modal && modal.status && <AlertBasic vars={modal.var} message={modal.message}/>}
                            <Col md={12}>
                                <h1>Update Product</h1>
                            </Col>
                            <Col md={12} className="mt-5">
                                <Card>
                                  
                                    <Card.Body
                                        className="justify-content-center"
                                        style={{
                                            paddingLeft: "100px",
                                            paddingRight: "100px",
                                        }}
                                    >
                                        <FormUpdate
                                        detail={product}
                                        modal={modal}
                                        create={updateProduct} 
                                        category={category}
                                        />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </PrivateRoute>
    );
};

const mapStateToProps = (state: State) => ({
    category: state.category.category,
    modal : state.modal.alert,
    product : state.product.detail
});

export default connect(mapStateToProps, { getAllCategory,createProduct, updateProduct })(UpadateProduct);
