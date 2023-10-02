import { BabyBed } from "../assets/icons/features/BabyBed";
import { Balcony } from "../assets/icons/features/Balcony";
import { Conditioner } from "../assets/icons/features/Conditioner";
import { Dishes } from "../assets/icons/features/Dishes";
import { Dishwasher } from "../assets/icons/features/Dishwasher";
import { Fridge } from "../assets/icons/features/Fridge";
import { Hairdryer } from "../assets/icons/features/Hairdryer";
import { Internet } from "../assets/icons/features/Internet";
import { Iron } from "../assets/icons/features/Iron/Iron";
import { KitchenIcon } from "../assets/icons/features/KitchenIcon";
import { Mangal } from "../assets/icons/features/Mangal";
import { Microwave } from "../assets/icons/features/Microwave";
import { NoSmoking } from "../assets/icons/features/NoSmoking";
import { Parking } from "../assets/icons/features/Parking";
import { Patio } from "../assets/icons/features/Patio";
import { PersonalPier } from "../assets/icons/features/PersonalPier";
import { Shower } from "../assets/icons/features/Shower";
import { Stove } from "../assets/icons/features/Stove";
import { Terrace } from "../assets/icons/features/Terrace";
import { TV } from "../assets/icons/features/TV";
import { WashingMaсhine } from "../assets/icons/features/WashingMaсhine";

export const getFeaturesIcon = (
  id: number,
  littleIcon?: boolean,
): JSX.Element | null => {
  switch (id) {
    case 1:
      return Internet({ littleIcon });
    case 3:
      return Terrace({ littleIcon });
    case 4:
      return Patio({ littleIcon });
    case 5:
      return Balcony({ littleIcon });
    case 6:
      return Dishes({ littleIcon });
    case 7:
      return Hairdryer({ littleIcon });
    case 8:
      return Iron({ littleIcon });
    case 9:
      return WashingMaсhine({ littleIcon });
    case 10:
      return Stove({ littleIcon });
    case 11:
      return Microwave({ littleIcon });
    case 12:
      return Dishwasher({ littleIcon });
    case 13:
      return Shower({ littleIcon });
    case 14:
      return BabyBed({ littleIcon });
    case 15:
      return NoSmoking({ littleIcon });
    case 17:
      return PersonalPier({ littleIcon });
    case 18:
      return Parking({ littleIcon });
    case 19:
      return KitchenIcon({ littleIcon });
    case 20:
      return TV({ littleIcon });
    case 21:
      return Fridge({ littleIcon });
    case 22:
      return Conditioner({ littleIcon });
    case 24:
      return Mangal({ littleIcon });

    default:
      return null;
  }
};

export const getFeaturesText = (id: number): string | null => {
  switch (id) {
    case 1:
      return "Бесплатный Wi-Fi";
    case 3:
      return "Терраса";
    case 4:
      return "Патио";
    case 5:
      return "Балкон";
    case 6:
      return "Посуда";
    case 7:
      return "Фен";
    case 8:
      return "Утюг";
    case 9:
      return "Стиральная машина";
    case 10:
      return "Плита";
    case 11:
      return "Микроволновая печь";
    case 12:
      return "Посудомоечная машина";
    case 13:
      return "Душ/ванна";
    case 14:
      return "Мебель для грудных детей";
    case 15:
      return "Курение в помещении запрещено";
    case 17:
      return "Личный пирс";
    case 18:
      return "Бесплатная парковка";
    case 19:
      return "Кухня";
    case 20:
      return "Телевизор";
    case 21:
      return "Холодильник";
    case 22:
      return "Кондиционер";
    case 24:
      return "Мангал";

    default:
      return null;
  }
};
