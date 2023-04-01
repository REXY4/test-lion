import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useRouter } from "next/router";

interface Props {
    close: any;
    login: any;
}

interface Forms {
    email: string;
    password: string;
}

const FormAuth: React.FC<Props> = ({ close, login }) => {
    const [form, setForm] = useState<Forms>({
        email: "",
        password: "",
    });

    let router = useRouter();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const submit = (e: any) => {
        e.preventDefault();
        login(form, router);
    };

    return (
        <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    name="email"
                    onChange={onChange}
                    type="email"
                    placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name="password"
                    onChange={onChange}
                    type="password"
                    placeholder="Password"
                />
            </Form.Group>
            <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" onClick={close}>
                    Sign In
                </Button>
            </div>
        </Form>
    );
};

export default FormAuth;
