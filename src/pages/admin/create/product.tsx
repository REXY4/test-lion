import Drawer from "@/components/Drawer";
import BasicNavbars from "@/components/Navbars";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { getAllCategory } from "@/actions/category";
import TabbleCategory from "@/components/category/TabbleCategory";
import PrivateRoute from "@/components/PrivateRoute";
import FormProduct from "@/components/product/FormProduct";

interface State {
    category: {
        category: any;
    };
}

interface Props {
    category: State;
    getAllCategory: any;
}

const Home: React.FC<Props> = ({ category, getAllCategory }) => {
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
                            <Col md={12}>
                                <h1>Create Product</h1>
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
                                        <FormProduct />
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
});

export default connect(mapStateToProps, { getAllCategory })(Home);
