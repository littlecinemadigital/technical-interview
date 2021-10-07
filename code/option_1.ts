/*
  [Option 1] - 
  Write a function that finds `dataToFind` in the array `data`.
  Explain the BigO time of the function.
*/

type dataProps = {
  /** the message for this data point */
  message: string;
  /** the user's id */
  userId: number
};

const data: dataProps[] = [
  { message: "12313", userId: 0 },
  { message: "34212", userId: 1 },
  { message: "34234", userId: 2 },
  { message: "54532", userId: 3 },
  { message: "31233", userId: 4 },
  { message: "12312", userId: 5 },
  { message: "12313", userId: 6 },
];

const dataToFind = "31233";

/** the arguments for the `findDataPoint` method */
interface FindDataPointProps {
  data: dataProps[];
  val: string | number;
  key?: keyof dataProps;
}
/** the object that's returned from the `findDataPoint` method if a match is found */
interface FindDataPointReturnObj extends dataProps {
  index: number;
}

/** the possible return values for the `findDataPoint` method */
type findDataPointReturn = FindDataPointReturnObj | false;

/**
 * loop through the data provided and return the row with the matching value
 * @param val - the value to search for. Default `0`
 * @param key - the name of the key to query. Default `message`
 * @returns - the row with the matching value, or false if no match was found
 */
function findDataPoint({
  data,
  val = 0,
  key = "message",
}: FindDataPointProps): findDataPointReturn {
  for (let i = 0; i < data.length; i++) {
    const dataPoint = data[i];
    if (dataPoint[key] === val) {
      return { index: i, ...dataPoint };
    }
  }

  // if no values for the key provided were found, return false
  return false;
}

// Conclusion - The time of function is O(N) - Linear time.
// Big O notation assumes the upper limit where the algorithm
// will perform the maximum number of iterations, in this case `data.length`. 