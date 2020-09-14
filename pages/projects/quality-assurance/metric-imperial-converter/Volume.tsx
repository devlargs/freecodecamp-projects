import ConvertForm from "components/ConvertForm";
import MetricImperialTable from "components/MetricImperialTable";

export default () => {
  return (
    <>
      <ConvertForm type="volume" />
      <br />
      <MetricImperialTable field="volume" />
    </>
  );
};
