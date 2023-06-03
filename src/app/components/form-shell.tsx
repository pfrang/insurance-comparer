
import TravelInsuranceForm from "./travel-insurance-form";

interface FormShellprops {
  categorySelected: number;
}

export const FormShell = ({ categorySelected }: FormShellprops) => {
  return (() => {
    switch (categorySelected) {
      case 0:
        return <TravelInsuranceForm  />
      case 1:
        return <div>Coming soon....</div>
      default: return <div>Coming soon....</div>
    }
  })();
}



export default FormShell;
