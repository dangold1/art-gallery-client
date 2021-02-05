export const mapCategories = (categories) => {
  let results = {};
  for (const category of categories) {
    let [main, sub] = category.split("/");
    if (!results[main]) results[main] = [];
    results[main].push(sub);
  }
  return results;
};
