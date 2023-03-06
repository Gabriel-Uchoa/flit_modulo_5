import PersonalInfo from "./PersonalInfo/PersonalInfo"
import SelectPlan from "./SelectPlan/SelectPlan"
import PickAddOns from "./PickAddOns/PickAddOns"
import Finishing from "./Finishing/Finishing"
import { iStore } from "../../../types/store.interface"
import { useSelector } from "react-redux"

export default function renderStep(step: number) {

    const FormStep: iStore = useSelector((state: any) => state.multiStep)
    console.log(FormStep)

    switch (step) {
        case 1:
            return <PersonalInfo />
        case 2:
            return <SelectPlan />
        case 3:
            return <PickAddOns />
        case 4:
            return <Finishing />
    }
}