# Ionic-Unlock-Component
We built this proof of concept component based on a question posted in the [Ionic Forum](https://forum.ionicframework.com/t/any-unlock-slider-ionic-2/77617).

The visual design is based on this blog post from [CSS-Tricks](https://github.com/CSS-Tricks/Slide-to-Unlock).

## Component Markup
```<unlocker (unlocked)="unlockedHandler($event)"></unlocker>```

## Events
When the user releases the thumb, the component will emit an unlocked event with a boolean if the slider was slid completly to the end of the track.

## Customizing
For now, the text that is shown in the slider track is set within the unlocker.scss. 