import MainLayout from "../../layouts/MainLayout";
import { useParams } from "react-router";
import fromSlug from "../../utils/FromSlug";

function SessionEntry() {
  const { slug } = useParams();

  const sessionSlug = slug ?? "";

  return (
    <MainLayout headerTitle={fromSlug(sessionSlug)} color="teal">
      <h2>hello Calendar</h2>
    </MainLayout>
  );
}

export default SessionEntry;
