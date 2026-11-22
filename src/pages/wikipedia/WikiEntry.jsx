import MainLayout from "../../layouts/MainLayout";
import Breadcrumb from "../../components/navigation/BreadCrumb";
import { useParams, Link } from "react-router";
import EditButton from "../../components/EditButton";
import ContextLink from "../../components/wiki/ContextLink";
import fromSlug from "../../utils/FromSlug";

import useScrollDirection from "../../utils/UseScrollDirection";
import ContextLinkWrapper from "../../components/wiki/ContextLinkWrapper";

function WikiEntry() {
  const { entry, slug } = useParams();

  const worldSlug = slug ?? "";
  const worldEntry = entry ?? "";

  const scrollDirection = useScrollDirection();

  return (
    <MainLayout
      headerTitle={fromSlug(worldEntry)}
      color="teal"
      css="lg:grid lg:grid-cols-2 lg:items-start lg:gap-16 md:gap-8 "
    >
      <section className="flex flex-col gap-2 [&_p]:max-w-[65ch]  items-start relative mb-8 mb:mb-0 lg:mb-0">
        <Breadcrumb></Breadcrumb>
        <EditButton></EditButton>
        <img
          src="https://placehold.co/600x400"
          alt=""
          className="max-[600px]:w-screen max-[600px]:max-w-none! max-[600px]:ml-[calc(50%-50vw)]"
        />
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
        <img
          src="https://placehold.co/600x400"
          alt=""
          className="max-[600px]:w-screen max-[600px]:max-w-none! max-[600px]:ml-[calc(50%-50vw)] "
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          dignissimos non minus ipsa magnam, nesciunt earum dolore aliquam, a
          voluptas dolorum mollitia quis quae natus quia, officia aspernatur
          cumque eveniet?
        </p>
      </section>

      <section
        className={`sticky [transition:transform_0.3s_ease-in,0.3s_linear]  ${scrollDirection === "down" ? "top-5" : "top-25"}`}
      >
        <ContextLinkWrapper
          editing={false}
          worldSlug={worldSlug}
          currentSlug={worldEntry}
        ></ContextLinkWrapper>
      </section>
    </MainLayout>
  );
}

export default WikiEntry;
