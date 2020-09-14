import ConvertForm from "components/ConvertForm";
import MetricImperialTable from "components/MetricImperialTable";

export default () => {
  return (
    <>
      <ConvertForm type="length" />
      <br />
      <MetricImperialTable field="length" />
    </>
  );
};
