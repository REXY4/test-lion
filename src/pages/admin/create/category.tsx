import Drawer from "@/components/Drawer";
import BasicNavbars from "@/components/Navbars";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card , Button} from "react-bootstrap";
import { connect } from "react-redux";
import { getAllCategory, createCategory } from "@/actions/category";
import PrivateRoute from "@/components/PrivateRoute";
import FormProduct from "@/components/product/FormProduct";
import AlertBasic from "@/components/AlertBasic";
import FormCategory from "@/components/category/FormCategory";
import Head from "next/head";

interface State {
    category: {
        category: any;
    };
    modal : {
        alert : any
    }
}

interface Props {
    category: State;
    getAllCategory: any;
    modal :any;
    createCategory : any
}

const Category: React.FC<Props> = ({ category, getAllCategory, createCategory, modal }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        getAllCategory();
    }, []);
        
    return (
        <>
            <Head>
                <title>Create Category</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
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
                                <h1>Create Category</h1>
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
                                        <FormCategory
                                        modal={modal}
                                        create={createCategory} 
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
          </>
    );
};

const mapStateToProps = (state: State) => ({
    category: state.category.category,
    modal : state.modal.alert
});

export default connect(mapStateToProps, { getAllCategory,createCategory })(Category);
