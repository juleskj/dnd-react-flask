import MainLayout from "../../layouts/MainLayout";
import AddButton from "../../components/AddButton";
import { Link } from "react-router";

function Wiki() {
  return (
    <MainLayout headerTitle="The wikipedia" color="teal">
      <AddButton btnText="Create new world"></AddButton>
      <article>
        <Link to="/Wiki/world-of-warcraft">
          <h3>World of warcraft</h3>
        </Link>
      </article>
    </MainLayout>
  );
}

export default Wiki;
