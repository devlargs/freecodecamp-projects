import meta from "constants/meta";
import SEO from "components/SEO";

export default () => (
  <SEO
    title="Exercise Tracker"
    description={meta.description("Exercise Tracker")}
    imageUrl={`/assets/images/projects/exercise-tracker.png`}
  />
);
