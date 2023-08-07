import { useEffect, useState } from "react";

const ErrorToast = ({ errorMsg }: { errorMsg: string }) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count - 1);

    }, 1000);
    
    if (count === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer)
    }
  })

  return (
    <div
      className={`${
        count === 0 ? "hidden" : ""
      } toast toast-top toast-start fixed left-0 translate-y-full bottom-24 z-10`}
    >
      <div className="alert alert-error flex justify-between items-center">
        <span>{errorMsg}</span>
        <span>{count}</span>
      </div>
    </div>
  );
};

export default ErrorToast;
