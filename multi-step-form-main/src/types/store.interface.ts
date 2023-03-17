import { iAddOns, Personal_info, Plan, Summary } from "./product.interface";

export interface iStore {
    personal_info: Personal_info,
    step: number,
    plan: Plan,
    addOns: Array<iAddOns>,
    summary: Summary,
}


