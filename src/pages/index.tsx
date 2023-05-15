import { Link, Stack } from "@mui/material";
import { collection } from "@firebase/firestore";
import { db } from "firebase.config";
import { useClubs } from "@/hooks/clubs/useClubs";

export default function Home() {
  useClubs();
  return (
    <Stack alignItems={"center"}>
      <h1>Sewy Seven</h1>
      <Stack direction={"row"} spacing={2}>
        <Link href={"/seasons"}>Seasons</Link>
        <Link href={"/leagues"}>Leagues</Link>
        <Link href={"/clubs"}>Clubs</Link>
        <Link href={"/players"}>Players</Link>
      </Stack>
      <img
        style={{ marginTop: 50 }}
        src={
          "https://media.tenor.com/ka5zqWWnutMAAAAC/cristiano-ronaldo-shocked.gif"
        }
        alt={"SEWY"}
      />
    </Stack>
  );
}
