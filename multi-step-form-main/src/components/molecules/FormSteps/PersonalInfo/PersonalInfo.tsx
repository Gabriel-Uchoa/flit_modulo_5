import { useFormik } from "formik";
import store from "../../../../store";
import { nextStep } from "../../../../store/MultiStepForm/action";
import Button from "../../../atoms/Button"
import FormField from "../../../atoms/FormField";
import Describe from "../comuns/Describe";
import { ButtonsAreaOne, FormStepStyle } from "../comuns/StyleComuns";
import { Form } from "./StylePersonalInfo"

interface Errors {
    name?: string;
    email?: string;
    phone?: string;
}

const PersonalInfo = () => {
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

    const handleClick = () => {
        store.dispatch(nextStep(1))

    }

    return (
        <FormStepStyle>
            <Describe
                title="Personal Info"
                subtitle="Please provide your name, email adress, and phone number."
            />
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

            <ButtonsAreaOne>
                <Button type="next" action={handleClick} text="Next Step" />
            </ButtonsAreaOne>

        </FormStepStyle>
    )
}

export default PersonalInfo