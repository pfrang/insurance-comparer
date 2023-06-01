import { CResponse } from "../api/next-api-client";
import { TravelInsuranceFormShape } from "./form-settings";
import TravelInsuranceForm from "./travel-insurance-form";

interface FormShellprops {
  categorySelected: number;
  onSubmit: (values: TravelInsuranceFormShape) => Promise<CResponse>
}


export const FormShell = ({ categorySelected, onSubmit }: FormShellprops) => {
  return (() => {
    switch (categorySelected) {
      case 0:
        return <TravelInsuranceForm onSubmit={onSubmit} />
      case 1:
        return <div>Coming soon....</div>
      default: return <div>Coming soon....</div>
    }
  })();
}



export default FormShell;
