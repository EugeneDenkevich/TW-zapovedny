import {
  useGetBackPhotosQuery,
  useGetMainPageQuery,
} from "../reduxTools/requests/apiRequests";

export const useDatas = () => {
  const { data: main } = useGetMainPageQuery();
  const { data: backPhotos } = useGetBackPhotosQuery();

  //Общие для страниц названия и фоновые фотографии
  const title = main ? main[0].title : "Заповедный остров";
  const titleHouse = main ? main[0].house_title : "Домики";
  const titleKitchen = main ? main[0].kitchen_title : "Кухня";
  const titleEntertainment = main ? main[0].entertainment_title : "Развлечения";
  const titleExcursion = main ? main[0].excursion_title : "Экскурсии";
  const excursionDescription = main ? main[0].excursion_description : "";

  const main_back = backPhotos ? backPhotos[0].photo_m : "";
  const house_back = backPhotos ? backPhotos[0].photo_h : "";
  const kitchen_back = backPhotos ? backPhotos[0].photo_k : "";
  const entertainments_back = backPhotos ? backPhotos[0].photo_e : "";
  const excursions_back = backPhotos ? backPhotos[0].photo_excursion : "";

  // Название для кнопки поиска объекта
  const nameForSearchButton = "Забронировать";

  return {
    title,
    titleHouse,
    titleKitchen,
    titleEntertainment,
    titleExcursion,
    excursionDescription,
    main_back,
    house_back,
    kitchen_back,
    entertainments_back,
    excursions_back,
    nameForSearchButton,
  };
};
