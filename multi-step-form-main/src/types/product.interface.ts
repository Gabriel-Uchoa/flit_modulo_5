export interface Plan {
    icon_plan: string
    name_plan: string,
    value_plan: number,
    cobrance: string,
    free_period: string,
}

export interface Personal_info {
    name: string,
    email: string,
    phone: string
}

export interface AddOns {
    name_plan: string,
    describe_plan: string,
    value_plan: number,
}

export interface Summary {
    personal_info: Personal_info,
    step: number,
    plan: Plan,
    addOns: Array<AddOns>,
}