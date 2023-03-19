import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

function HomeView() {
  return (
    <Grid container spacing={2} className="home">
      <Grid item xs={12}>
        <h1>Fish Extenders are fun!</h1>
        <p>Learn more about fish Extenders</p>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Signup For Your Cruise</Typography>
            <p>Find your cruise and signup for a fish extender group!</p>
            <Button>Find Your Cruise Now</Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Learn About Fish Extenders</Typography>
            <p>Why are we extending fish? Find out here!</p>
            <Button>Extend the Fish</Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Your Info</Typography>
            <p>Find your cruise and signup for a fish extender group!</p>
            <Button>View More</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default HomeView;
