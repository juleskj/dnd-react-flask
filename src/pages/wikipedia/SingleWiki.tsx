import MainLayout from "../../layouts/MainLayout";
import { useParams } from "react-router";

function Wiki() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <MainLayout headerTitle="The wikipedia" color="teal">
      <p>{slug}</p>
    </MainLayout>
  );
}

export default Wiki;
