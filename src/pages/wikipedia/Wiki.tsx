import MainLayout from "../../layouts/MainLayout";
import { useRef } from "react";

import { Link } from "react-router";
import AddWikiBtn from "../../components/AddWikiBtn";

function Wiki() {
  const wikiContainer = useRef<HTMLElement>(null);

  return (
    <MainLayout headerTitle="The wikipedia" color="teal">
      <AddWikiBtn btnText="Create new world" refrence={wikiContainer} />

      <article id="wiki-worlds" ref={wikiContainer}>
        <Link to="/Wiki/world-of-warcraft">
          <article>
            <h3>world-of-warcraft</h3>
          </article>
        </Link>
      </article>
    </MainLayout>
  );
}

export default Wiki;
