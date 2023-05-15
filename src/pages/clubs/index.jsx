import React from "react";
import { Link, Stack, Typography as Text } from "@mui/material";
// internal
import { useClubs } from "@/hooks/clubs/useClubs";

const ClubListScreen = () => {
  const clubs = useClubs();
  return (
    <>
      <Text variant={"h3"} textAlign={"center"} color={"primary.main"}>
        Clubs
      </Text>
      <Stack mt={5} spacing={2}>
        {clubs?.data?.pages[0]?.map((club, index) => {
          return (
            <Stack
              key={index}
              direction={"row"}
              justifyContent={"space-evenly"}
            >
              <Link href={`/clubs/${club.id}`}>{club.name}</Link>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
};

export default ClubListScreen;
