import { get } from "lodash-es";
const maxDeepSize = 3;

export const getPlaceContextFromFullApiContext = fullApiContext => {
  const apiContext = fullApiContext.reverse().slice(0, maxDeepSize);
  return {
    countryName: get(apiContext, "[0].text", "Нет Страны"),
    regionName: get(apiContext, "[1].text", "Нет Области"),
    cityName: get(apiContext, "[2].text", "Нет Города")
  };
};

export const getPlace = ({ id, position }, fullApiContext) => {
  const context = getPlaceContextFromFullApiContext(fullApiContext);
  return {
    id,
    title: context.cityName,
    position,
    isSaved: false,
    isShowOnMap: false,
    context
  };
};
