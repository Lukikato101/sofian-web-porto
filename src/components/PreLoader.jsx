import { Spinner } from "flowbite-react";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0b12]">
      <Spinner color="purple" aria-label="Purple spinner example" />
    </div>
  );
};

export default PreLoader;