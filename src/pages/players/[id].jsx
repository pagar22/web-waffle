import { useRouter } from "next/router";
import { usePlayer } from "@/hooks/players/usePlayer";
import { Stack, Typography as Text } from "@mui/material";
import { Groups } from "@mui/icons-material";

const InfoText = ({ detail, value }) => {
  return (
    <Stack direction={"row"} spacing={2}>
      <Text variant={"subtitle1"} fontWeight={600}>
        {detail}:
      </Text>
      <Text variant={"subtitle1"}>{value}</Text>
    </Stack>
  );
};

const PlayerDetailScreen = () => {
  const { id } = useRouter().query;
  const { data: player, isLoading } = usePlayer(id);

  return (
    !isLoading && (
      <Stack>
        <Stack alignItems={"center"} spacing={2}>
          <img
            style={{ height: 250, width: 250 }}
            src={player?.image_url}
            alt={player?.name}
          />
          <Text variant={"h4"}>
            {player?.first_name + " " + player?.last_name}
          </Text>
        </Stack>
        <InfoText detail={"Birth Country"} value={player?.birth_country} />
        <InfoText detail={"National Country"} value={player?.national_team} />
        <InfoText
          detail={"Date of Birth"}
          value={new Date(player?.date_of_birth).toDateString()}
        />
        <InfoText detail={"Shirt Number"} value={player?.shirt_number} />
        <InfoText detail={"Position"} value={player?.position} />
        <InfoText
          detail={"Efficiency Index"}
          value={player?.efficiency_index || 0}
        />
        <InfoText detail={"Market Value"} value={player?.market_value || 0} />
        <InfoText detail={"Elo Rating"} value={player?.elo_rating || 0} />
      </Stack>
    )
  );
};

export default PlayerDetailScreen;
