//Source to this function https://github.com/sioit/sio.no
export const isDigitsOnly = (input: string) => {
  return /^[0-9]+$/.test(input);
};

//Source to this function https://github.com/sioit/sio.no
export const isValidNorwegianAccountNumber = (input: string) => {
  if (!input || typeof input !== "string") return false;

  const accountNumber = input.replace(/\s|\./g, ""); // remove whitespace and .

  if (
    !accountNumber ||
    accountNumber.length !== 11 ||
    !isDigitsOnly(accountNumber)
  )
    return false;

  const controlDigit = parseInt(
    accountNumber.charAt(accountNumber.length - 1),
    10
  );
  return controlDigit === mod11NumberWithControlDigit(accountNumber);
};

//Source to this function https://github.com/sioit/sio.no
const mod11NumberWithControlDigit = (input: any) => {
  let controlNumber = 2;
  let sumForMod = 0;

  for (let i = input.length - 2; i >= 0; --i) {
    sumForMod += input.charAt(i) * controlNumber;
    if (++controlNumber > 7) controlNumber = 2;
  }

  const result = 11 - (sumForMod % 11);
  return result === 11 ? 0 : result;
};
