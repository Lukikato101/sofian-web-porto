<<<<<<< HEAD
import { Spinner } from "flowbite-react";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0b12]">
      <Spinner color="purple" aria-label="Purple spinner example" />
    </div>
=======
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
>>>>>>> 40f7d0c939f6b996ca453a275b52d8fab5849c41
  );
};

export default PreLoader;