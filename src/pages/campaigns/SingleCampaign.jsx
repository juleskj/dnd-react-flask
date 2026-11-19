import MainLayout from "../../layouts/MainLayout";
import { useParams } from "react-router";
import fromSlug from "../../utils/FromSlug";
import SessionCard from "../../components/SessionCard";
function SingleCampaign() {
  const { slug } = useParams();
  const campaignSlug = slug ?? "";
  return (
    <MainLayout headerTitle={fromSlug(campaignSlug)} color="teal">
      <section className="grid sm:grid-cols-2">
        <SessionCard sessionNumber="03" date="20/12" variant="small" />
      </section>
    </MainLayout>
  );
}

export default SingleCampaign;
