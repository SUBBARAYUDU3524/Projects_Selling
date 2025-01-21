import React from "react";
import { AdMobInterstitial } from "react-admob";

const InterstitialAd = () => {
  const showInterstitialAd = () => {
    AdMobInterstitial.setAdUnitID("ca-app-pub-1530889983435568/5987022562"); // Replace with your AdMob Interstitial Ad Unit ID
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
  };

  return (
    <div>
      <button onClick={showInterstitialAd}>Show Interstitial Ad</button>
    </div>
  );
};

export default InterstitialAd;
