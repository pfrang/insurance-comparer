import { InputLabel, Select, MenuItem, FormHelperText, FormControl } from "@mui/material";
import { FormikProps, useField } from "formik";
import { TravelInsuranceFormShape } from "../components/form-settings";

interface ItemProps {
  value: number;
  label: string;
}

type h = TravelInsuranceFormShape[keyof TravelInsuranceFormShape]


const handleSelect = (e: any, formikProps: FormikProps<any>, name: string) => {
  formikProps.setFieldValue(name, e.target.value);
}
interface SelectProps {
  onChange?: (...args: any[]) => void;
  value: string | number;
  name: string;
  placeholder: string;
  formikProps: FormikProps<any>;
  label: string;
  helperText?: string;
  items: ItemProps[];
}


export const SelectComp = ({ value, items, name, label, placeholder, helperText, formikProps }: SelectProps) => {
  const [field, meta, helpers] = useField(name);
  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel><p className=""> Hvem skal forsikringen gjelde for?</p ></InputLabel >
        <Select
          {...field}
          name={name}
          className=""
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder={placeholder}
          value={value}
          label={label}
          onChange={(e) => handleSelect(e, formikProps, name)}
        >
          {items.map((item, idx) => {
            return (
              <MenuItem key={item.value + item.label} value={item.value}>{item.label}</MenuItem>
            )
          })}
        </Select>
        {helperText && (
          <FormHelperText>{helperText}</FormHelperText>
        )}
      </FormControl>
      {meta.error ? (
        <div className="error text-sm">{meta.error}</div>
      ) : null}
    </div>
  )
}
