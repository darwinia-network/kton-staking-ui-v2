'use client';

import { useEffect } from 'react';

import ErrorComponent from '@/components/error';

const ErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className=" flex h-full w-full items-center justify-center">
      <ErrorComponent
        title="ops!"
        message="Sorry, an unexpected error has occurred."
        buttonText="Try again"
        action={reset}
      />
    </div>
  );
};

export default ErrorPage;
