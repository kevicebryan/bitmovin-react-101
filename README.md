  
# Guide: How to make your own React Bitmovin Player UI (using NextJS)
 
## Getting Started
To see the result run the development server:
```bash
npm install
npm run dev
```
### Bitmovin Player Guide
The bitmovin player needs an API Key, which you can find in your profile settings **[here](https://dashboard.bitmovin.com)**. 
Update the ``API_KEY`` with your own to be able to run the player.
```jsx
  const playerConfig: PlayerConfig = {
    key: "API_KEY",
    playback: {
      autoplay: true,
    },
  };
```

If you want to change the video you can change it here:
```jsx
  const defaultPlayerSource: SourceConfig = {
    hls: "https://cdn.bitmovin.com/content/assets/streams-sample-video/sintel/m3u8/index.m3u8",
  };
```

## Packages used
[bitmovin-player-react](https://www.npmjs.com/package/bitmovin-player-react)
[bitmovin-player-ui](https://www.npmjs.com/package/bitmovin-player-ui)
[styled-components](https://styled-components.com/docs/basics)


## Repo Tour Guide
- The sample of how to customize your own bitmovin video player UI can be seen in [```pages.tsx```](https://github.com/kevicebryan/bitmovin-react-101/blob/main/src/app/page.tsx)
- The Styling can be seen in [```style.ts```](https://github.com/kevicebryan/bitmovin-react-101/blob/main/src/app/style.ts) located at ```src/app/style.ts```

### Styling Guide
To create your bitmovin player UI, you create your own **UIContainer** and modify it based on your requirements. And pass it to the **BitmovinPlayer** in the **customUi** parameter:
```jsx
<BitmovinPlayer
	source={defaultPlayerSource}
	config={playerConfig}
	customUi={{
		containerFactory: uIContainer,
		}}
/>
```


To make styling easier give the component you want to style a classname with the ```cssClasses``` attribute like follows, 
```js
new ControlBar({
	components: [controlBarTop, controlBarBottom],
	cssClasses: ["controlbar-wrapper"],
}),
```

and reference that in the styling with ```bmpui- ```in front of the class name and hit it's the child div.
*e.g: you give **cssClass: controlbar-wrapper**, to access it you can use:*
```css
& .bmpui-controlbar-wrapper  >  div  {
// some css styling
}
```


##### editors-note:
this guide is made since the documentation from bitmovin isn't as cleared.
but made possible based on these references:
[Sample project (the tvOS guide helps a lot)](https://github.com/bitmovin/bitmovin-player-web-samples/blob/main/playerUi/tv/netflix/index.html)
