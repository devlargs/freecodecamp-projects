import ConvertForm from "components/ConvertForm";
import MetricImperialTable from "components/MetricImperialTable";

export default () => {
  return (
    <>
      <ConvertForm />
      <br />
      <MetricImperialTable field="length" />
    </>
  );
};
