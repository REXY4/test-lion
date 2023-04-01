import Drawer from "@/components/Drawer";
import BasicNavbars from "@/components/Navbars";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TabbleData from "@/components/product/TabbleData";
import { connect } from "react-redux";
import { getAllProduct } from "@/actions/product";

interface State {
    product: {
        product: any;
    };
}

interface Props {
    product: State;
    getAllProduct: any;
}

const Home: React.FC<Props> = ({ product, getAllProduct }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <>
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
                                <h1>Product</h1>
                            </Col>
                            <Col md={12} className="mt-5">
                                <TabbleData product={product} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state: State) => ({
    product: state.product.product,
});

export default connect(mapStateToProps, { getAllProduct })(Home);
