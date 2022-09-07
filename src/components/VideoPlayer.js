import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.main`
  display: flex;
  justify-content: center;
`;

const VideoPlayer = () => {
  return (
    <Container>
      <ReactPlayer
        width={"100vw"}
        height={"65vh"}
        controls
        url="https://www.youtube.com/watch?v=HUgmq_8PlRY"
        onReady={() => console.log("onReady callback")}
        onStart={() => console.log("onStart callback")}
        onPause={() => console.log("onPause callback")}
        onEnded={() => console.log("onEnded callback")}
        onError={() => console.log("onEnded callback")}
      />
    </Container>
  );
};

export default VideoPlayer;
