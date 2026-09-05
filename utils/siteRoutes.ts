import projects from "constants/projects";
import convertString from "utils/convertString";

export const getOrigin = (req: any) => {
  const proto = req?.headers?.["x-forwarded-proto"] || "http";
  const host = req?.headers?.host || "";
  return `${proto}://${host}`;
};

export default () => {
  const routes = ["/", "/projects", "/certificates"];

  projects.forEach((group) => {
    const key = convertString(group.name, "sentence", "kebab");
    group.list.forEach((name) => {
      routes.push(`/projects/${key}/${convertString(name, "sentence", "kebab")}`);
    });
  });

  return routes;
};
