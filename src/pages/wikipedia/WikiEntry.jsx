import MainLayout from "../../layouts/MainLayout";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import { useParams } from "react-router";

function fromEntry(entry) {
  return entry
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function WikiEntry() {
  const { entry } = useParams();
  const worldEntry = entry ?? "";

  return (
    <MainLayout headerTitle={fromEntry(worldEntry)} color="teal" css="">
      <Breadcrumbs></Breadcrumbs>
      <section className="flex flex-col gap-2 [&_p]:max-w-[65ch]  items-start">
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
    </MainLayout>
  );
}

export default WikiEntry;
