import { i32ToBytes, bytesToI32 } from './utils';

/**
 * Returns the minimum even prime number, which is always 2
 * @param number - input number (ignored since result is always 2)
 * @returns 2 (the only even prime number)
 */
function getMinEvenPrime(number: i32): i32 {
  // The only even prime number is 2
  // We ignore the input parameter since the result is always constant
  return 2;
}

/**
 * Main function of your contract
 * @dev Receives the input of bytes in Uint8Array. Result must also be sent in bytes wrapped in Uint8Array
 *
 * @param input bytes in Uint8Array
 * @returns bytes in Uint8Array containing the value 2
 */
export const main = (input: Uint8Array): Uint8Array => {
  const inputNumber = bytesToI32(input);
  const minEvenPrime = getMinEvenPrime(inputNumber);
  return i32ToBytes(minEvenPrime);
};
