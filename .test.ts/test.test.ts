import { ok } from 'assert';
import { expect, test } from 'vitest'


  // 1
// function stringLeangth(string: string) {
//   return string.length;
// }

// test('stringLength', () => {
//   expect(stringLeangth("hello")).toBe(5); 
// });
// 2
//  function isPalindrome(str: string): boolean {
//   const formattedStr = str.replace(/\s/g, '').toLowerCase();
//   return formattedStr === formattedStr.split('').reverse().join('');
// }
 
// test('isPalindrome returns true for palindromic string', () => {
//   expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
// });

// test('isPalindrome returns false for non-palindromic string', () => {
//   expect(isPalindrome("hello")).toBe(false);
// });

// 3
// function sortAscending(arr: number[]): number[] {
//   return arr.slice().sort((a, b) => a - b);
// }
// test('sortAscending sorts an array in ascending order', () => {
//   expect(sortAscending([3, 1, 2])).toEqual([1, 2, 3]);
// }); 

// test('sortAscending returns an empty array when given an empty array', () => {
//   expect(sortAscending([])).toEqual([]);
// });
// 4
// function sqrt(number) {
//   if (number < 0) {
//     return NaN;
//   }
//   return Math.sqrt(number);
// }
// test('sqrtRoot', () => {
//     expect(sqrt(36)).toBe(6);
// });
// 5
// function sumOfArray(array) {
//   let sumOfArray = 0; 
//   for (let index = 0; index < array.length; index++) {
//     sumOfArray += array[index]; 
//   }
//   return sumOfArray; 
// }
// test('sumOfArray', () => {
//     expect(sumOfArray([1,2,3,4])).toBe(10);
// });
// test('sumOfArray checks if the sum is greater than 9', () => {
//   const array = [1, 1, 6];
//   const sum = sumOfArray(array);
//   expect(sum).toBeGreaterThan(9); 
// });

// test('sumOfArray checks if the array contains a certain number', () => {
//   const array = [1, 2, 3, 4, 5];
//   const targetNumber = 3;
//   expect(array).toContain(targetNumber); 
// });
// 6
// interface UserData {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// }
// async function fetchUserData(userId: number): Promise<UserData | null> {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

//   if (!response.ok) {
//     return null;
//   }

//   const userData: UserData = await response.json();
//   return userData;
// }
// test('fetchUserData', async () => {
//   expect(await fetchUserData(1)).not.toBeNull();
// });
// 7
// function nextFibonacciValue(arr) {
//   const length = arr.length;
//   if (length < 2) {
//     return null;
//   }
//   const nextValue = arr[length - 1] + arr[length - 2];
//   return nextValue;
// }
 
// test('nextFibonacciValue returns the next value', () => {
//   const fibonacciSeries = [0, 1, 1, 2, 3, 5, 8];
//   expect(nextFibonacciValue(fibonacciSeries)).toBe(13); 
// });

// test('nextFibonacciValue throws an error for insufficient values', () => {
//   const shortFibonacciSeries = [0];
//   expect(() => nextFibonacciValue(shortFibonacciSeries)).toThrowError(
//     'Not enough values in the array to calculate the next Fibonacci value'
//   );
// });










