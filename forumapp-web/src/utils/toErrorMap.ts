// file to convert between the FieldError type we have and error that Formik accepts

import { FieldError } from "../generated/graphql";

export const toErrorMap = (errors: FieldError[]) => {
    const errorMap: Record<string, string> = {};
    errors.forEach(({field, message}) => {
        errorMap[field] = message;
    });

    return errorMap;
}