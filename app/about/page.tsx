import React from "react";

interface ErrorPageProps {
  statusCode: number | null;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ statusCode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-600">
        {statusCode ? `Error ${statusCode}` : "An error occurred"}
      </h1>
      <p className="text-lg text-gray-600 mt-2">
        {statusCode
          ? `Something went wrong (Error ${statusCode})`
          : "An unexpected error has occurred."}
      </p>
      <a href="/" className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-md">
        Go back home
      </a>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
