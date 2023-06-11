
import { useState } from "react";
import { Categories } from "../page";
import TravelInsuranceForm from "./travel-insurance-form";

interface FormShellprops {
  categorySelected: Categories;
}

export const FormShell = ({ categorySelected }: FormShellprops) => {
  const [error, setError] = useState(false);

  return (
    <>
      {error ? (
        <div>
          <button onClick={() => setError(false)} className="absolute left-4 flex items-center text-indigo-500 hover:text-indigo-700">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Gå tilbake
          </button>
          <h2>Beklager, noe gikk feil!</h2>
        </div>
      ) : (
        (() => {
          switch (categorySelected) {
            case "Reise":
              return <TravelInsuranceForm setError={setError} />;
            case "Bil":
              return <div>Coming soon....</div>;
            default:
              return <div>Coming soon....</div>;
          }
        })()
      )}
    </>
  );
};




export default FormShell;
