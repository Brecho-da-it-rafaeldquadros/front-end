import { useMenu } from "../../context/menu.context";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface IValue {
  penny:string
  value:string
  valueFomart:string
}

export const tranformPennyInPriceFloat = (penny: number): IValue => {
  const priceString = String(penny);
  let createAllPrice = priceString.split("").reverse()

  const pennyValue = createAllPrice.splice(0,2)
  let value = createAllPrice.splice(0,createAllPrice.length)

  for (let i = 3; i < value.length; i += 4) {
    value.splice(i, 0, ".")
  }

  const pennyFormat = pennyValue.reverse().join("")
  const valueFormat = value.reverse().join("")

  return {
    penny:pennyFormat,
    value:valueFormat,
    valueFomart:`${valueFormat},${pennyFormat}`
  }
};

export const getCurrentDateMileseconds = (): number => {
  let milesecondsUTC = Date.parse(new Date().toISOString());

  const currentMileseconds = (milesecondsUTC -= 10800000);

  return currentMileseconds;
};

export const transformDateInMileseconds = (date: string): number => {
  return Date.parse(new Date(date).toISOString());
};

export const generateDatePerMileseconds = (mileseconds: number): string => {
  return new Date(mileseconds).toISOString();
};

export const transformsPTBRFormat = () => {
  return generateDatePerMileseconds(getCurrentDateMileseconds());
};

export function formatTime(milissegundos: number): string {
  const segundos = Math.floor(milissegundos / 1000);
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;

  const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
  const segundosFormatados =
    segundosRestantes < 10 ? `0${segundosRestantes}` : segundosRestantes;

  return `${minutosFormatados}:${segundosFormatados}`;
}

export function generateDeliveryStowageAt(days: number): string {
  const mileseconds = days * 86400000;

  const currentDate = getCurrentDateMileseconds();
  const resultDate = generateDatePerMileseconds(currentDate + mileseconds);

  return resultDate.slice(0, 10);
}

export const PaginationRounded = (buttons: number) => {
  const { setPage } = useMenu();
  return (
    <Stack spacing={2}>
      <Pagination
        count={buttons}
        hideNextButton
        hidePrevButton
        onClick={async (e) => {
          const actual: any = e.target;
          setPage(+actual.innerText);
        }}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
};
