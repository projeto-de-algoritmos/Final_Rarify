import { Divider, Grid } from "@material-ui/core";

function Home() {
  return (
    <Grid container direction="row" style={{ textAlign: "center", flex: 1 }}>
      <Grid
        xs={5}
        style={{
          backgroundColor: "#fafafa",
          borderRight: "1px solid #ddd",
          flex: 1,
        }}
      >
        search stuff
      </Grid>
      <Grid
        xs
        style={{
          backgroundColor: "#fff",
          flex: 1,
        }}
      >
        other stuff
      </Grid>
    </Grid>
  );
}

export default Home;
