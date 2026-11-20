import MainLayout from "../../layouts/MainLayout";
import Breadcrumb from "../../components/navigation/BreadCrumb";
import UploadImg from "../../components/UploadImg";
import ContextLink from "../../components/wiki/ContextLink";
import ContextLinkWrapper from "../../components/wiki/ContextLinkWrapper";
import AddButton from "../../components/AddButton";
import useScrollDirection from "../../utils/UseScrollDirection";
import EntryDetailList from "../../components/wiki/EntryDetailList";
import { useParams } from "react-router";

function WikiCreateEntry() {
  const scrollDirection = useScrollDirection();
  const { slug } = useParams();
  const worldSlug = slug ?? "";

  return (
    <MainLayout
      headerTitle="New content"
      color="teal"
      css="lg:grid lg:grid-cols-2 lg:items-start lg:gap-16 md:gap-8 "
    >
      <section className="flex flex-col gap-2 [&_p]:max-w-[65ch]  items-start relative mb-8 mb:mb-0 lg:mb-0">
        <Breadcrumb></Breadcrumb>

        <UploadImg imgId="1"></UploadImg>
        <UploadImg imgId="2"></UploadImg>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          dignissimos non minus ipsa magnam, nesciunt earum dolore aliquam, a
          voluptas dolorum mollitia quis quae natus quia, officia aspernatur
          cumque eveniet?
        </p>
        <EntryDetailList></EntryDetailList>
      </section>

      <section
        className={`sticky [transition:transform_0.3s_ease-in,0.3s_linear]  ${scrollDirection === "down" ? "top-5" : "top-25"}`}
      >
        <ContextLinkWrapper worldSlug={worldSlug}></ContextLinkWrapper>
      </section>
    </MainLayout>
  );
}

export default WikiCreateEntry;
