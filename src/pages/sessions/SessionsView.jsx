import MainLayout from "../../layouts/MainLayout";
import { useParams } from "react-router";
import fromSlug from "../../utils/FromSlug";

function SessionsView() {
  const { slug } = useParams();

  const sessionSlug = slug ?? "";

  return (
    <MainLayout headerTitle="Sessions" color="teal">
      <h2>hello Calendar</h2>
    </MainLayout>
  );
}

export default SessionsView;
