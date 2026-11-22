import MainLayout from "../../layouts/MainLayout";
import { useParams } from "react-router";
import fromSlug from "../../utils/FromSlug";
import Breadcrumb from "../../components/navigation/BreadCrumb";
import GoToPageCard from "../../components/GoToPageCard";
import EditButton from "../../components/EditButton";
import SessionsOverview from "../../components/SessionsOverview";

function SessionEntry() {
  const { slug } = useParams();

  const sessionSlug = slug ?? "";

  return (
    <MainLayout headerTitle={fromSlug(sessionSlug)} color="teal">
      <Breadcrumb />
      <section className="grid gap-6 border-solid border-2 rounded-lg p-6">
        <header className="flex justify-between">
          <div>
            <p>10-9 - 2026</p>
            <span className="flex gap-1 mt-6">
              <p>Campaign:</p>
              <p>World of Warcraft</p>
            </span>
            <h1 className="font-sans! text-4xl! font-light!">{fromSlug(sessionSlug)}</h1>
            <h2 className="text-5xl!">The Battle of Azeroth </h2>
          </div>
          <EditButton side="right" />
        </header>
        <section>
          <p className="max-w-lg">
            at the end of Legion, Sargeras stabbed the world with his huge sword. This caused the world soul of Azeroth to bleed Azerite, one of the most powerful substances known
            in the World of Warcraft. It has many uses, it can be used as an energy source, but also as a really powerful weapon. Either way, both factions didn't want the other
            one to get it, causing tensions between the two. Now, you remember that barely a minute ago I was talking about SI:7 spies in Orgrimmar. Well that's important, because
            Sylvanas was aware of these spies. When they were among her ranks, she would pretend that the Horde was planning on taking over Silithus, causing a stronger presence of
            Allinace, specifically night elves, in Silithus. Sylvanas was, however, playing the long game and she really wanted to break the Alliance with a much more menacing
            plan. The deal between the Jailer and Sylvanas was to cause as much death as possible to feed the Jailer, which would in turn power up Sylvanas as well. So her plan was
            to take over Darkshore and Teldrassil, kill a lot of night elves and their leader - Malfurion Stormrage. Together with Varok Saurfang, Sylvanas and Nathanos would lead
            the charge. They tore through Darkshore and Saurfang even managed to capture Malfurion, but he let him go. Sylvanas, in her rage over this, came up with an even more
            deadly plan - to burn down Teldrassil. So she did, causing a lot of death and a lot of souls to be sent into the Maw. The Night Elves, seeing that Elune did not help
            them, saw this as a sign that their goddess abandoned them. In truth, Elune sensed the anima drought in Ardenweald, the Shadowlands realm of her sister - the Winter
            Queen, and thought that the souls of the kaldorei from Teldrassil would help the drought. What Elune did not know was that all those souls were rerouted to the Maw.
            Tyrande, in her rage, does a really dangerous ritual to become the Night Warrior which is basically the darkest aspect of Elune's power that is known to usually kill
            the user. With this power, the Horde is succesfully fought back, but not without a lot of night elf death and destruction. The Alliance in return attacks Lordaeron. Oh
            and Jaina's back now, being much more chill than we saw her in Mists of Pandaria and Legion and she also has a huge magic ship. Anyways, the Alliance manages to fight
            their way into Lordaeron. Before entering the keep, Saurfang, disillusioned with the Horde, decides to surrender to the Alliance. See, Saurfang is an old orc, something
            that is very rare in Warcraft, and he just wants a warrior's death. He wants to join his son, who died during Wrath of the Lich King after being used the Arthas. But
            seeing no honor in this war, he willingly gives himself up to the Alliance. The Alliance breaks into the throne room, we get some nice cinematic parallels with Warcraft
            3, Sylvanas runs away and blights the whole city, leaving it uninhabitable for both the living and the dead.
          </p>
        </section>
        <p>DM notes (private): "epic battle"</p>
        <p>Player notes (public): "epic battle" </p>
        <section className="grid md:grid-cols-3 gap-3">
          <GoToPageCard cardTitle="Sargeras" additionalText="NPC" color="teal" />
          <GoToPageCard cardTitle="Sargeras" additionalText="NPC" color="teal" />
          <GoToPageCard cardTitle="Sargeras" additionalText="NPC" color="teal" />
          <GoToPageCard cardTitle="Sargeras" additionalText="NPC" color="teal" />
        </section>
      </section>
      <section className="my-12">
        <h3 className="font-heading text-3xl! mb-2">Previous sessions</h3>
        <SessionsOverview isResponsive />
      </section>
    </MainLayout>
  );
}

export default SessionEntry;
