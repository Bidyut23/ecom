// import AsyncStorage from "store";

// export const storeData = async (key, value, callback) => {
//   try {
//     await AsyncStorage.set(key, value);
//     if (callback) {
//       callback(true);
//     }
//   } catch (e) {
//     console.log("Error in saving data", e);
//     if (callback) {
//       callback(false);
//     }
//   }
// };

// export const getData = async (key, callback, failed) => {
//   try {
//     const value = await AsyncStorage.get(key);
//     if (callback) {
//       callback(value);
//     }
//   } catch (e) {
//     console.log("Error in getting data");
//     if (failed) {
//       failed(e);
//     }
//   }
// };

// export const removeData = async (key, callback) => {
//   try {
//     const value = await AsyncStorage.remove(key);
//     // if (value == null) {
//       if(callback)
//         callback(value);
//     //}
//   } catch (e) {
//     console.log("Error in removing data");
//   }
// };