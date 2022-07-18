import { TextField } from "@mui/material";
import { FC } from "react";

interface MyFieldProps {
    label: string,
    fieldProps: any
}

const MyField:FC<MyFieldProps> = ({label, fieldProps}) => {
    const {field, meta} = fieldProps
    return <TextField
        label={label}
        {...(meta.error && meta.touched ? {error:true} : {})}
        {...(meta.error && meta.touched ? {helperText: meta.error} : {})}
        {...field}
    />
}

export default MyField