import { useState, useEffect } from "react";

import AddButton from "../components/AddButton";
import EditButton from "../components/EditButton";

function Home() {
  const [count, setCount] = useState(0);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.user);
      });
  }, []);

  return (
    <div className="my-4 mx-4  lg:mx-32 lg:my-8">
      <section>
        <AddButton btnText="hello"></AddButton>
        <EditButton></EditButton>
      </section>
    </div>
  );
}

export default Home;
