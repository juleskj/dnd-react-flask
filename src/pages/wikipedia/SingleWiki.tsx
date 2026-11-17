import MainLayout from "../../layouts/MainLayout";
import { useParams } from "react-router";

function fromSlug(slug: string) {
  return slug.replace(/-/g, " ");
}
function Wiki() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <MainLayout headerTitle={fromSlug(slug ?? "")} color="teal">
      <p>{fromSlug(slug ?? "")}</p>
    </MainLayout>
  );
}

export default Wiki;
