export const getColor = (postType: string) => {
  switch (postType) {
    case "general":
      return "#61DBFB";
    case "alert":
      return "#ff3e3e";
    case "buy/Sell":
      return "#179b59";
    case "event":
      return "#fc4ad3";
    case "sighting":
      return "#eed202";
    case "research" :
      return "#743dff";
    case "housing" :
      return "#ffaf2e";
    default:
      break;
  }
};

export function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}