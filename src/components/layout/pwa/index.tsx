
import DisableZoom from '@/components/layout/pwa/disable-zoom';

export default function PWA({ children }) {
  return (
    <>
      <DisableZoom />
      {children}
    </>
  );
}
