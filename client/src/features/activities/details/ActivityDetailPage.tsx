import { Grid2, Typography } from "@mui/material"
import { useParams } from "react-router"
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

export default function ActivityDetailPage() {
  const{id} = useParams();
  const {activity, isLoadingActivity} = useActivities(id)

  if(isLoadingActivity) return <Typography>Loading...</Typography>

  if(!activity) return <Typography>Activity not found</Typography>

  return (
    <Grid2 container spacing={3} >
      <Grid2 size={8}>
        <ActivityDetailedHeader activity = {activity}/>
        <ActivityDetailedInfo activity = {activity}/>
        <ActivityDetailedChat/>
      </Grid2>
      <Grid2 size={4}>
        <ActivityDetailedSidebar/>
      </Grid2>

    </Grid2>
  )
}
