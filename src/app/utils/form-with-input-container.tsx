import { useField } from "formik";

type TextFieldType = "text" | "text-area" | "password";

type FormInputProps = {
  type: TextFieldType;
  errored: boolean;
}

type ContainedFormTextInputProps = {
  label: string;
  placeholder?: string;
  name: string;
  type: TextFieldType;
};




export const FormWithInputContainer = ({label,placeholder,
  ...props
}: ContainedFormTextInputProps) => {
  const [field, meta, helpers] = useField(props as ContainedFormTextInputProps);
  //write a generic input type text which is used with Formik input tags
  return (
    <div className="flex flex-col">
      <label htmlFor={props.name}>
        {label}
      </label>
      <input placeholder={placeholder} {...field} {...props} />
      {meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}
