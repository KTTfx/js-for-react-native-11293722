import { formatArrayStrings } from './arrayManipulation.js';

function createUserProfiles(originalNames, modifiedNames) {
  const userProfiles = [];
  let id = 1;

  for (let i = 0; i < originalNames.length; i++) {
    const originalName = originalNames[i];
    const modifiedName = modifiedNames[i];

    const profile = {
      id: id++,
      originalName: originalName,
      modifiedName: modifiedName,
    };

    userProfiles.push(profile);
  }

  return userProfiles;
}

const originalNames = ["Arhin", "Kweku", "Nsroma"];

try {
  
  const processedNumbers = processArray([2, 3, 5]); 

  const modifiedNames = [];
  formatArrayStrings(modifiedNames, originalNames.slice()); 

  const userProfiles = createUserProfiles(originalNames, modifiedNames);
  console.log(userProfiles);
} catch (error) {
  console.error(error.message);
}
