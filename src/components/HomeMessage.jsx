import React from "react";
import { Box, Typography } from "@mui/material";
import borderCorner from "../assets/border-corner-cream.png";

const HomeMessage = () => {
  return (
    <Box
      sx={{
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        width: "fit-content",
        maxWidth: 500,
        backgroundColor: "rgba(0, 0, 0, 0.87)",
        height: "fit-content",
        margin: 1,
      }}
    >
      <Box
        sx={{
          width: "fit-content",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            component={"img"}
            src={borderCorner}
            sx={{ width: 75, height: 75 }}
            alt="Victorian etching-style illustration of a corner border with intricately detailed leaves, designed in a cream color."
          />
          <Box
            component={"img"}
            src={borderCorner}
            sx={{
              width: 75,
              height: 75,
              transform: "scaleX(-1)",
            }}
            alt="Victorian etching-style illustration of a corner border with intricately detailed leaves, designed in a cream color."
          />
        </Box>
        <Typography
          textAlign={"center"}
          fontFamily={"Della Respira"}
          sx={{
            color: "#f5f2f1",
            marginX: 5,
            textWrap: "wrap",
          }}
        >
          Plan your perfect <b>holiday movie night</b> or a{" "}
          <b>cozy December day</b> filled with <b>winter magic</b>. Answer a few
          fun questions to get <b>personalized recommendations</b> for{" "}
          <b>holiday movies</b> and <b>treats</b>. Let’s make this season{" "}
          <b>unforgettable</b>!
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            component={"img"}
            src={borderCorner}
            sx={{
              width: 75,
              height: 75,
              transform: "scaleY(-1)",
            }}
            alt="Victorian etching-style illustration of a corner border with intricately detailed leaves, designed in a cream color."
          />
          <Box
            component={"img"}
            src={borderCorner}
            sx={{
              width: 75,
              height: 75,
              transform: "scale(-1)",
            }}
            alt="Victorian etching-style illustration of a corner border with intricately detailed leaves, designed in a cream color."
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeMessage;
