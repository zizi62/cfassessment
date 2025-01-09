"use client";

type TError = {
  error: Error;
};

const Error = ({ error }: TError) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center">
        <p className="mt-4 text-lg text-red-500">
          An error occurred. Please try again later.
        </p>
        <p className="mt-2 text-sm  text-red-500">More about the error:</p>
        <p className="mt-2 text-sm">{error.message}</p>
      </div>
    </div>
  );
};

export default Error;
