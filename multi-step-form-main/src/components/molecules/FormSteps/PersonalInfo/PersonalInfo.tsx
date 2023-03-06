import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { addPersonalInfo, nextStep } from "../../../../store/MultiStepForm/action";
import { iStore } from "../../../../types/store.interface";
import { ButtonsAreaOne, FormStepStyle, FormStyle } from "../comuns/StyleComuns";
import store from "../../../../store";
import Button from "../../../atoms/Button"
import FormField from "../../../atoms/FormField";
import Describe from "../comuns/Describe";
import * as yup from "yup";

const PersonalInfo = () => {
    const FormStep: iStore = useSelector((state: any) => state.multiStep)

    const formik = useFormik({
        initialValues: {
            name: FormStep.personal_info.name,
            email: FormStep.personal_info.email,
            phone: FormStep.personal_info.phone,
        },
        validationSchema: yup.object({
            name: yup.string().required("This field is required"),
            email: yup.string().email("This email is invalid.").required("This field is required"),
            phone: yup.string().required("This field is required")
        }),
        onSubmit: (values) => {
            store.dispatch(addPersonalInfo(values))
            store.dispatch(nextStep(1))
        },
    });

    return (
        <FormStepStyle>
            <Describe
                title="Personal Info"
                subtitle="Please provide your name, email adress, and phone number."
            />
            <FormStyle onSubmit={formik.handleSubmit} >
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
            </FormStyle>

            <ButtonsAreaOne>
                <Button type="next" action={formik.submitForm} text="Next Step" />
            </ButtonsAreaOne>

        </FormStepStyle>
    )
}

export default PersonalInfo