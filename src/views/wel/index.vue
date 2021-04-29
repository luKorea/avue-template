<template>
  <div>
    <data-operatext/>
    <data-icons/>
    <data-box/>
    <data-card/>
    <data-cardtext/>
    <data-display/>
    <data-imgtext/>
    <date-range/>
    <data-price/>
    <data-tabs/>
    <data-progress/>
    <data-rotate/>
    <data-pay/>
    <data-panel/>
  </div>
</template>

<script>
import dataIcons from "../../components/dataShow/dataIcons";
import dataDisplay from "../../components/dataShow/dataDisplay";
import dataImgtext from "../../components/dataShow/dataImgtext";
import dataBox from "../../components/dataShow/dataBox";
import dataPay from "../../components/dataShow/dataPay";
import dataCard from "../../components/dataShow/dataCard";
import dataCardtext from "../../components/dataShow/dataCardtext";
import dataOperatext from "../../components/dataShow/dataOperatext";
import dataProgress from "../../components/dataShow/dataProgress";
import dataPanel from "../../components/dataShow/dataPanel";
import dataRotate from "../../components/dataShow/dataRotate";
import dataTabs from "../../components/dataShow/dataTabs";
import dataPrice from "../../components/dataShow/dataPrice";

export default {
  name: "wel",
  components: {
    dataIcons,
    dataDisplay,
    dataProgress,
    dataImgtext,
    dataPay,
    dataCard,
    dataPrice,
    dataBox,
    dataOperatext,
    dataTabs,
    dataPanel,
    dataCardtext,
    dataRotate
  }
};
</script>

<style>
</style>

