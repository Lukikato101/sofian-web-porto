import { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    loading && (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner color="purple" aria-label="Purple spinner example" />
      </div>
    )
  );
};

export default PreLoader;