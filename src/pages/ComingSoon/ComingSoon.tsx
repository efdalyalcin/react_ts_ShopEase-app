import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import OpenCloseButton from 'src/components/OpenCloseButton/OpenCloseButton';

export default function ComingSoon() {
  const [isOpen, setIsOpen] = useState(true);
  const closeButton = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <main className="loading">
      <Link
        to="/"
        // I will be developing this part later, so inline styling is okay for now.
        style={{
          marginTop: '8px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <OpenCloseButton state={isOpen} action={closeButton} />
      </Link>
      <h1 className="loading__text">
        This page is in development! <br />
        Thank you for your understanding...
      </h1>
    </main>
  );
}
