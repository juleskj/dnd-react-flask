import MainLayout from "../../layouts/MainLayout";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import { useParams, Link } from "react-router";
import EditButton from "../../components/EditButton";
import ContextLink from "../../components/wiki/ContextLink";
import fromSlug from "../../utils/FromSlug";

function WikiEntry() {
  const { entry, slug } = useParams();

  const worldSlug = slug ?? "";
  const worldEntry = entry ?? "";

  return (
    <MainLayout headerTitle={fromSlug(worldEntry)} color="teal" css="">
      <Breadcrumbs></Breadcrumbs>
      <section className="flex flex-col gap-2 [&_p]:max-w-[65ch]  items-start">
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

        <section className="[&_span]:inline-block [&_span]:first-letter:uppercase [&_span]:text-xl [&_p]:underline ">
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

      <section>
        <ContextLink
          categori="npc"
          worldSlug={worldSlug}
          contextSlug="the-jailer"
        ></ContextLink>
      </section>
    </MainLayout>
  );
}

export default WikiEntry;
