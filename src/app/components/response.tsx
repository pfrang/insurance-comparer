import { InsurancePricesCRepsonse } from "../api/server/route";

interface ResponseProps {
  response: InsurancePricesCRepsonse;
  setResponse: (val: undefined) => void;
}

export const Response = ({ response, setResponse }: ResponseProps) => {
  return (
    <div>
      <div>
        <button onClick={() => setResponse(undefined)} className="absolute left-4 flex items-center text-indigo-500 hover:text-indigo-700">
          <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Gå tilbake
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {Object.keys(response).map((key, idx) => {
          return <div>{key}: {response[key as keyof InsurancePricesCRepsonse]}</div>
        })}
      </div>
    </div>
  )
}

export default Response;
