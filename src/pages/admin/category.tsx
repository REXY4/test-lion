import Drawer from "@/components/Drawer";
import BasicNavbars from "@/components/Navbars";
import React, { useEffect, useState } from "react";
import { Container, Row, Col , Button} from "react-bootstrap";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { getAllCategory } from "@/actions/category";
import TabbleCategory from "@/components/category/TabbleCategory";
import PrivateRoute from "@/components/PrivateRoute";

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
    let router = useRouter();
    useEffect(() => {
        getAllCategory();
    }, []);

    return (
        <PrivateRoute allowedRoles={["admin"]}>
            <div>
                <BasicNavbars show={show} showDrawer={setShow} />
                <div className="d-flex">
                    <Drawer active="category" show={show} setShow={setShow} />
                    <Container
                        style={{
                            marginTop: "100px",
                            marginLeft: "100px",
                            marginRight: "100px",
                        }}
                    >
                        <Row className="mb-5">
                            <Col md={12} className="d-flex justify-content-between">
                                <h1>Category</h1>
                                 <Button
                                    variant="outline-danger"
                                    onClick={() =>
                                        router.push("/admin/create/category")
                                    }
                                >
                                    Create
                                </Button>
                            </Col>
                            <Col md={12} className="mt-5">
                                <TabbleCategory product={category} />
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
