import Drawer from "@/components/Drawer";
import BasicNavbars from "@/components/Navbars";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card , Button} from "react-bootstrap";
import { connect } from "react-redux";
import { getAllCategory, updateCategory } from "@/actions/category";
import PrivateRoute from "@/components/PrivateRoute";
import AlertBasic from "@/components/AlertBasic";
import FormUpdateCategory from "@/components/category/FormUpdateCategory";

interface State {
    category: {
        category: any;
        detail : any
    };
    modal : {
        alert : any
    }

}

interface Props {
    category: State;
    getAllCategory: any;
    modal :any;
    updateCategory : any
    detail : any
}

const UpdateCategory: React.FC<Props> = ({ category, getAllCategory, updateCategory, modal, detail }) => {
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
                                        <FormUpdateCategory
                                        detail={detail}
                                        modal={modal}
                                        create={updateCategory} 
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
    detail : state.category.detail
});

export default connect(mapStateToProps, { getAllCategory, updateCategory })(UpdateCategory);
