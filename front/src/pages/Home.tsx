import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import main from "../scripts/main";
import JQuery from "jquery";
import { useEffect } from "react";

//@ts-ignore
window.sidebarPercentage = 0.4;

function Home() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const containerRef = React.useRef(null);
  const [canvas, setCanvas] = React.useState<any>(null);
  const [searchPage, setSearchPage] = React.useState("");

  useEffect(() => {
    if (canvas === null) {
      const c = main(JQuery, "canvasItem");
      c.init();
      setCanvas(c);
      let i = 0;
      setInterval((e) => {
        c.addNode({ name: "https://www.google.com/search?q=" + i.toString() });
        i++;
      }, 1000);
    }
  }, [canvasRef]);

  return (
    <Grid
      container
      direction="row"
      style={{ textAlign: "center", height: "100%" }}
    >
      <Grid
        style={{
          backgroundColor: "#eef",
          borderRight: "1px solid #ddd",
          width: "400px",
          height: "100%",
          textAlign: "left",
          padding: 10,
        }}
      >
        <Typography style={{ marginTop: 10 }}>
          <h3>Page:</h3>
        </Typography>
        <div
          style={{
            backgroundColor: "rgba(70, 70, 200, 0.1)",
            padding: 4,
            borderRadius: 4,
          }}
        >
          <TextField
            style={{
              width: "100%",
            }}
            placeholder="https://fga.unb.br/"
            onChange={(e) => setSearchPage(e.target.value)}
          ></TextField>
        </div>
        <br />
        <div style={{ marginTop: 10, textAlign: "center" }}>
          <Button
            style={{
              backgroundColor: "#66a",
              color: "white",
              fontWeight: 500,
              marginTop: 10,
              width: "100%",
            }}
          >
            <Typography style={{ fontSize: 15, fontWeight: 600 }}>
              Search
            </Typography>
          </Button>
        </div>
      </Grid>
      <Grid
        xs
        style={{
          backgroundColor: "#fafafa",
          height: "100%",
          width: "calc(100% - 400px)",
        }}
        id="canvasContainer"
        ref={containerRef}
      >
        <canvas id="canvasItem" ref={canvasRef}></canvas>
      </Grid>
    </Grid>
  );
}

export default Home;
