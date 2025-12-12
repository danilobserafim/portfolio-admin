import { RefreshCcwIcon } from "lucide-react";

export default function Spinner() {
  return (
    <div className="flex justify-around pt-2.5">
      <RefreshCcwIcon className="animate-spin transition-all" />
    </div>
  );
}
