import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Title() {
  const [title, setTitle] = useState('');
  const pathname = usePathname();
  useEffect(() => {
    setTitle(document.title);
  }, [document, pathname]);
  return title || '';
}
