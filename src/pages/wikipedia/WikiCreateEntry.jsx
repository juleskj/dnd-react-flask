import MainLayout from "../../layouts/MainLayout";
import Breadcrumb from "../../components/navigation/BreadCrumb";
import UploadImg from "../../components/UploadImg";
import ContextLink from "../../components/wiki/ContextLink";
import AddButton from "../../components/AddButton";
import useScrollDirection from "../../utils/UseScrollDirection";

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

        <section className=" [&_span]:inline-block [&_span]:first-letter:uppercase [&_span]:text-xl [&_p]:underline ">
          <h2>list</h2>
          <ul>
            <li>
              <p>
                <span>age:</span> 23
              </p>
            </li>
            <li>
              <p>
                <span>born:</span> 1503
              </p>
            </li>
            <li>
              <p>
                <span>family name:</span> Stormwind
              </p>
            </li>
            <li>
              <p>
                <span>lives:</span> Waterdeep
              </p>
            </li>
            <li>
              <p>
                <span>class:</span> Wizard
              </p>
            </li>
            <li>
              <p>
                <span>dnd race:</span> Half-elf
              </p>
            </li>
          </ul>
        </section>
      </section>

      <section
        className={`sticky md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 flex flex-col gap-2   [transition:transform_0.3s_ease-in,0.3s_linear]  ${scrollDirection === "down" ? "top-5" : "top-25"}`}
      >
        <AddButton
          css="col-span-2 lg:min-w-full"
          btnText="add context"
        ></AddButton>

        <ContextLink
          categori="npc"
          worldSlug={worldSlug}
          contextSlug="the-jailer"
        ></ContextLink>
        <ContextLink
          categori="npc"
          worldSlug={worldSlug}
          contextSlug="the-jailer"
        ></ContextLink>
        <ContextLink
          categori="npc"
          worldSlug={worldSlug}
          contextSlug="the-jailer"
        ></ContextLink>
      </section>
    </MainLayout>
  );
}

export default WikiCreateEntry;
