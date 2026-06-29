import { useEffect } from 'react';
import FAQ from '../components/FAQ.jsx';

export default function FAQPage() {
  useEffect(() => {
    document.title = 'Agarwood Partnership FAQs for Farmers & Investors | Mrida Infra';
  }, []);

  return <FAQ />;
}
