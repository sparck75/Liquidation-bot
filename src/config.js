const defaultPairParams = {
  minimumRewardThreshold: 10,
  degreeOfConfidenceThreshold: 0.9,
};

const pairParams = {
  "0x": {
    minimumRewardThreshold: 10,
    degreeOfConfidenceThreshold: 0.01,
  },
};

export const getPairParams = (pair) => {
  return pair in pairParams ? pairParams[pair] : defaultPairParams;
};

export default { getPairParams };
