import Drawer from "@/components/Drawer";
import BasicNavbars from "@/components/Navbars";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TabbleData from "@/components/product/TabbleData";
import { connect } from "react-redux";
import { getAllProduct } from "@/actions/product";
import PrivateRoute from "@/components/PrivateRoute";
import { deleteProduct, getDetail } from "@/actions/product"; 
import { useRouter } from "next/router";

interface State {
    product: {
        product: any;
    };
}

interface Props {
    product: State;
    getAllProduct: any;
    deleteProduct : any
    getDetail : any
}

const Home: React.FC<Props> = ({ product, getAllProduct, deleteProduct, getDetail }) => {
    const [show, setShow] = useState(true);
    let router = useRouter();
    useEffect(() => {
        getAllProduct();
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
                            <Col
                                md={12}
                                className="d-flex justify-content-between"
                            >
                                <h1>Product</h1>
                                <Button
                                    variant="outline-danger"
                                    onClick={() =>
                                        router.push("/admin/create/product")
                                    }
                                >
                                    Create
                                </Button>
                            </Col>
                            <Col md={12} className="mt-5">
                                <TabbleData detail={getDetail} reload={getAllProduct} deleted={deleteProduct} product={product} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </PrivateRoute>
    );
};

const mapStateToProps = (state: State) => ({
    product: state.product.product,
});

export default connect(mapStateToProps, { getAllProduct, deleteProduct, getDetail })(Home);
