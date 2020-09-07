import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon: any;
  title: string;
};

export default ({ icon, title }: Props) => (
  <>
    <FontAwesomeIcon
      icon={icon}
      style={{
        fontSize: 14,
        marginRight: 10,
      }}
    />
    {title}
  </>
);
