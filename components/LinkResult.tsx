import JsonPrettier from "components/JsonPrettier";
import Alert from "antd/lib/alert";

type Props = {
  url: string;
  data?: any;
  error?: any;
};

export default ({ url, data, error }: Props) => (
  <>
    <a
      href={url}
      target="_blank"
      style={{ display: "inline-block", marginBottom: "8pt" }}
    >
      {url}
    </a>

    {error ? (
      <Alert
        message="Error"
        description="Something went wrong. Please hit refresh."
        type="error"
        showIcon
      />
    ) : (
      <JsonPrettier data={data} />
    )}
  </>
);
