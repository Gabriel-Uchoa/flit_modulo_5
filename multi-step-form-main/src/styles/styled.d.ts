import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            primary: {
                marine_blue: string,
                purplish_blue: string,
                pastel_blue: string,
                light_blue: string,
                strawberry_red: string
            },
            neutral: {
                cool_gray: string,
                light_gray: string,
                magnolia: string,
                alabaster: string,
                white: string,
            },
        }
    }
}