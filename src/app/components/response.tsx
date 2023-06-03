import { CResponse } from "../api/next-api-client";

interface ResponseProps {
  response: string;
  setResponse: (val: string) => void;
}

export const Response = ({ response, setResponse }: ResponseProps) => {
  return (
    <div>
      <div>
        <button onClick={() => setResponse("")} className="absolute left-4 flex items-center text-indigo-500 hover:text-indigo-700">
          <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Gå tilbake
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {response}
      </div>
    </div>
  )
}

export default Response;
