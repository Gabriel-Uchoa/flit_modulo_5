import { useFormik } from "formik";
import Button from "../../atoms/Button"
import FormField from "../../atoms/FormField";
import { Form, FormDescribe, FormStepStyle, Subtitle, Title } from "./StyleFormStep"

interface Errors {
    name?: string;
    email?: string;
    phone?: string;
}

const FormStep = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate: (values) => {
            const errors: Errors = {};

            if (!values.name) {
                errors.name = "This field is required";
            }
            if (!values.email) {
                errors.email = "This field is required";
            }
            if (!values.phone) {
                errors.phone = "This field is required";
            }

            return errors;
        },
    });

    return (
        <FormStepStyle>
            <FormDescribe>
                <Title>Personal Info</Title>
                <Subtitle>Please provide your name, email adress, and phone number.</Subtitle>
            </FormDescribe>
            <Form onSubmit={formik.handleSubmit}>
                <FormField
                    label="Name"
                    name="name"
                    onChange={formik.handleChange}
                    placeholder="e.g. Sthepen King"
                    value={formik.values.name}
                    error={formik.errors.name}
                />
                <FormField
                    label="Email Adress"
                    name="email"
                    onChange={formik.handleChange}
                    placeholder="e.g. sthepenking@lorem.com"
                    value={formik.values.email}
                    error={formik.errors.email}
                />
                <FormField
                    label="Phone Number"
                    name="phone"
                    onChange={formik.handleChange}
                    placeholder="e.g. +1 234 567 890"
                    value={formik.values.phone}
                    error={formik.errors.phone}
                />
            </Form>

            <div>
                <Button type="back" action={(e) => { console.log(e) }} text="Go Back" />
                <Button type="next" action={(e) => { console.log(e) }} text="Next Step" />
            </div>

        </FormStepStyle>
    )
}

export default FormStep