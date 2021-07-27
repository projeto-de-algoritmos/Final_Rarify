import { Grid } from "@material-ui/core";
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

  useEffect(() => {
    if (canvas === null) {
      const c = main(JQuery, "canvasItem");
      c.init();
      setCanvas(c);
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
        }}
      >
        sidebar
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
