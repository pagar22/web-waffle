import { useRouter } from "next/router";
import { useClub } from "@/hooks/clubs/useClub";
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

const ClubDetailScreen = () => {
  const { id } = useRouter().query;
  const { data: club, isLoading } = useClub(id);

  return (
    !isLoading && (
      <Stack>
        <Stack alignItems={"center"} spacing={2}>
          {club?.badge_url ? (
            <img
              style={{ height: 250, width: 250 }}
              src={club?.badge_url}
              alt={club?.name}
            />
          ) : (
            <Groups fontSize={"large"} />
          )}
          <Text variant={"h4"}>{club?.name}</Text>
        </Stack>
        <InfoText detail={"Code"} value={club?.code} />
        <InfoText detail={"City"} value={club?.city} />
        <InfoText detail={"Stadium"} value={club?.stadium} />
        <InfoText detail={"Market Value"} value={club?.market_value || 0} />
        <InfoText detail={"Elo Rating"} value={club?.elo_rating || 0} />
      </Stack>
    )
  );
};

export default ClubDetailScreen;
