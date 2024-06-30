"use client";

import { PlayerConfig, SourceConfig } from "bitmovin-player";
import { PageWrapper, VideoWrapper } from "./style";
import {
  Container,
  ControlBar,
  FullscreenToggleButton,
  PlaybackSpeedSelectBox,
  PlaybackToggleButton,
  PlaybackToggleOverlay,
  SeekBar,
  UIContainer,
  VideoQualitySelectBox,
  VolumeSlider,
  VolumeToggleButton,
} from "bitmovin-player-ui";
import "bitmovin-player-ui/dist/css/bitmovinplayer-ui.css";

import { BitmovinPlayer } from "bitmovin-player-react";

export default function Home() {
  const defaultPlayerSource: SourceConfig = {
    hls: "https://cdn.bitmovin.com/content/assets/streams-sample-video/sintel/m3u8/index.m3u8",
  };

  const playerConfig: PlayerConfig = {
    key: "7ea5492a-c818-4984-b20a-8323e21f7fa8",
    playback: {
      autoplay: true,
    },
  };

  const leftContainer = new Container({ cssClass: "left-container" });
  leftContainer.addComponent(new PlaybackToggleButton());
  leftContainer.addComponent(new VolumeToggleButton());
  leftContainer.addComponent(new VolumeSlider());

  const rightContainer = new Container({ cssClass: "right-container" });
  rightContainer.addComponent(new PlaybackSpeedSelectBox());
  rightContainer.addComponent(new VideoQualitySelectBox());
  rightContainer.addComponent(new FullscreenToggleButton());

  const controlBarTop = new Container({
    components: [new SeekBar()],
    cssClasses: ["controlbar-top"],
  });

  const controlBarBottom = new Container({
    components: [leftContainer, rightContainer],
    cssClasses: ["controlbar-bottom"],
  });

  const uIContainer = () =>
    new UIContainer({
      cssClasses: ["kodio-bitmovin-player"],
      hideDelay: 2000,
      components: [
        new PlaybackToggleOverlay(),
        new ControlBar({
          components: [controlBarTop, controlBarBottom],
          cssClasses: ["controlbar-wrapper"],
        }),
      ],
    });

  return (
    <PageWrapper>
      <VideoWrapper>
        <BitmovinPlayer
          source={defaultPlayerSource}
          config={playerConfig}
          customUi={{
            containerFactory: uIContainer,
          }}
        />
      </VideoWrapper>
    </PageWrapper>
  );
}
