import { onMounted, onUnmounted, watchEffect } from "vue";
import { path } from "../../../composables/useRouteObserver";
import gsap from "gsap";
import { BASE_VOLUMES, musicTracks } from "../definitions/music";
import { sceneWeights } from "../../../animations/scenes";
import { sizes } from "../../../utils/sizes";
import { howlerUnlocked, soundsEnabled } from "./useHowler";
import { clamp } from "../../../utils/math";
import { isFeatureEnabled } from "../../../utils/features";
import { useAgent } from "../../../composables/useAgent";

import type { MusicTrack } from "../types";

export const useMusic = () => {
  const { isTouch } = useAgent();

  let currentLuciVol = 0;
  let currentAboutVol = 0;

  const tickVolumes = () => {
    let targetLuci = 0;
    let targetAbout = 0;

    // Calculate target volumes based on route and scene weights
    if (path.value !== "/") {
      targetLuci = BASE_VOLUMES.luci;
      targetAbout = 0;
    } else {
      targetLuci = clamp(1 - sceneWeights.about, 0, 1) * BASE_VOLUMES.luci;
      targetAbout = clamp(sceneWeights.about * 1.25 - 0.25, 0, 1) * BASE_VOLUMES.about;
    }

    // Exponential smoothing LERP for ultra-smooth volume transitions
    currentLuciVol += (targetLuci - currentLuciVol) * 0.08;
    currentAboutVol += (targetAbout - currentAboutVol) * 0.08;

    musicTracks.luci.volume(clamp(currentLuciVol, 0, BASE_VOLUMES.luci));
    musicTracks.about.volume(clamp(currentAboutVol, 0, BASE_VOLUMES.about));
  };

  const tick = () => {
    if (!sizes.visible) return;
    if (!soundsEnabled.value || !howlerUnlocked.value || isTouch.value) return;
    tickVolumes();
  };

  const play = (trackId: MusicTrack) => {
    if (!isFeatureEnabled("sounds") || isTouch.value) return;
    const track = musicTracks[trackId];
    if (!track || track.playing()) return;
    track.load();
    track.volume(0);
    track.play();
    track.fade(0, BASE_VOLUMES[trackId], 1500);
  };

  watchEffect(() => {
    if (!isFeatureEnabled("sounds")) return;
    if (!howlerUnlocked.value || !soundsEnabled.value || isTouch.value) return;

    play("luci");
    play("about");
  });

  onMounted(() => {
    if (!isFeatureEnabled("sounds")) return;
    gsap.ticker.add(tick);
  });

  onUnmounted(() => {
    if (!isFeatureEnabled("sounds")) return;
    gsap.ticker.remove(tick);
    musicTracks.luci.stop();
    musicTracks.about.stop();
  });
};
