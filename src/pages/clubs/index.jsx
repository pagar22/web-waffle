import React from "react";
import { Link, List, Paper, Stack, Typography as Text } from "@mui/material";
// internal
import { useClubs } from "@/hooks/clubs/useClubs";

const ClubListScreen = () => {
  const clubs = useClubs(200);
  return (
    <>
      <Text variant={"h3"} textAlign={"center"} color={"primary.main"}>
        Clubs
      </Text>
      <Paper
        sx={{
          p: 2,
          mt: 10,
          maxWidth: 500,
          maxHeight: 400,
          overflow: "auto",
        }}
      >
        <List>
          {clubs?.data?.pages[0]?.map((club, index) => {
            return (
              <Stack
                mb={2}
                key={index}
                direction={"row"}
                alignItems={"center"}
                alignSelf={"center"}
                spacing={2}
              >
                <Link href={`/clubs/${club.id}`}>{club.name}</Link>
                <img
                  src={club.badge_url}
                  alt={""}
                  style={{ height: 25, width: 25 }}
                />
              </Stack>
            );
          })}
        </List>
      </Paper>
    </>
  );
};

export default ClubListScreen;
