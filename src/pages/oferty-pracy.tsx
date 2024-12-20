import Layout from '@theme/Layout';
import { JobOffersPage } from '../components/JobOffers/JobOffersPage';

export default function OfertyPracy() {
  return (
    <Layout
      title="Oferty pracy"
      description="Aktualne oferty pracy w branży dokumentacji technicznej"
    >
      <JobOffersPage />
    </Layout>
  );
}
