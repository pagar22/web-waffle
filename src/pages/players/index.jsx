import React from "react";
import { Link, List, Paper, Stack, Typography as Text } from "@mui/material";
// internal
import { usePlayers } from "@/hooks/players/usePlayers";

const ClubListScreen = () => {
  const players = usePlayers(50);
  return (
    <>
      <Text variant={"h3"} textAlign={"center"} color={"primary.main"}>
        Players
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
          {players?.data?.pages[0]?.map((player, index) => {
            return (
              <Stack
                mb={2}
                key={index}
                direction={"row"}
                alignItems={"center"}
                alignSelf={"center"}
                spacing={2}
              >
                <Link href={`/players/${player.id}`}>
                  {player.first_name + " " + player.last_name}
                </Link>
                {player.image_url && (
                  <img
                    src={player.image_url}
                    alt={""}
                    style={{ height: 25, width: 25 }}
                  />
                )}
              </Stack>
            );
          })}
        </List>
      </Paper>
    </>
  );
};

export default ClubListScreen;
