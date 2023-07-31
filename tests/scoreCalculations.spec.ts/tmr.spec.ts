import { test, expect } from "@playwright/test";
import { getScoreDecreasingIsBetter } from "@/utils/utils";
import { TestScore } from "@/types";

/**
 * TWO MILE RUN
 *
 * These are tests for calculating the Two Mile Run scores from the raw performance values.
 */

// scores for males age 17-21 for TMR
const male17Tmr: TestScore[] = [
  { score: 0, raw: 1441 }, // edge case
  { score: 0, raw: 1440 },
  { score: 1, raw: 1438 },
  { score: 2, raw: 1436 },
  { score: 3, raw: 1434 },
  { score: 4, raw: 1432 },
  { score: 5, raw: 1430 },
  { score: 6, raw: 1428 },
  { score: 6, raw: 1427 }, // edge case
  { score: 7, raw: 1426 },
  { score: 8, raw: 1424 },
  { score: 9, raw: 1422 },
  { score: 10, raw: 1420 },
  { score: 11, raw: 1418 },
  { score: 12, raw: 1416 },
  { score: 13, raw: 1414 },
  { score: 14, raw: 1412 },
  { score: 15, raw: 1410 },
  { score: 15, raw: 1409 }, // edge case
  { score: 16, raw: 1408 },
  { score: 17, raw: 1406 },
  { score: 18, raw: 1404 },
  { score: 19, raw: 1402 },
  { score: 20, raw: 1400 },
  { score: 21, raw: 1398 },
  { score: 22, raw: 1396 },
  { score: 23, raw: 1394 },
  { score: 24, raw: 1392 },
  { score: 25, raw: 1390 },
  { score: 26, raw: 1388 },
  { score: 26, raw: 1387 }, // edge case
  { score: 27, raw: 1386 },
  { score: 28, raw: 1384 },
  { score: 29, raw: 1382 },
  { score: 30, raw: 1379 },
  { score: 31, raw: 1377 },
  { score: 32, raw: 1375 },
  { score: 33, raw: 1373 },
  { score: 34, raw: 1371 },
  { score: 35, raw: 1369 },
  { score: 36, raw: 1367 },
  { score: 37, raw: 1365 },
  { score: 38, raw: 1363 },
  { score: 39, raw: 1361 },
  { score: 40, raw: 1359 },
  { score: 41, raw: 1357 },
  { score: 41, raw: 1356 }, // edge case
  { score: 42, raw: 1355 },
  { score: 43, raw: 1353 },
  { score: 44, raw: 1351 },
  { score: 45, raw: 1349 },
  { score: 46, raw: 1347 },
  { score: 47, raw: 1345 },
  { score: 48, raw: 1343 },
  { score: 49, raw: 1341 },
  { score: 50, raw: 1339 },
  { score: 51, raw: 1337 },
  { score: 52, raw: 1335 },
  { score: 53, raw: 1333 },
  { score: 54, raw: 1331 },
  { score: 55, raw: 1329 },
  { score: 56, raw: 1327 },
  { score: 57, raw: 1325 },
  { score: 58, raw: 1323 },
  { score: 59, raw: 1321 },
  { score: 60, raw: 1320 },
  { score: 60, raw: 1315 }, // edge case
  { score: 61, raw: 1263 },
  { score: 62, raw: 1242 },
  { score: 63, raw: 1219 },
  { score: 64, raw: 1200 },
  { score: 65, raw: 1183 },
  { score: 66, raw: 1167 },
  { score: 67, raw: 1152 },
  { score: 68, raw: 1140 },
  { score: 69, raw: 1127 },
  { score: 70, raw: 1115 },
  { score: 70, raw: 1113 }, // edge case
  { score: 71, raw: 1103 },
  { score: 72, raw: 1092 },
  { score: 73, raw: 1081 },
  { score: 74, raw: 1072 },
  { score: 75, raw: 1063 },
  { score: 76, raw: 1053 },
  { score: 77, raw: 1044 },
  { score: 78, raw: 1035 },
  { score: 79, raw: 1025 },
  { score: 79, raw: 1023 }, // edge case
  { score: 80, raw: 1017 },
  { score: 81, raw: 1008 },
  { score: 82, raw: 999 },
  { score: 83, raw: 990 },
  { score: 84, raw: 982 },
  { score: 85, raw: 974 },
  { score: 86, raw: 965 },
  { score: 87, raw: 957 },
  { score: 88, raw: 948 },
  { score: 89, raw: 939 },
  { score: 90, raw: 930 },
  { score: 90, raw: 929 }, // edge case
  { score: 91, raw: 920 },
  { score: 92, raw: 911 },
  { score: 93, raw: 900 },
  { score: 94, raw: 891 },
  { score: 95, raw: 880 },
  { score: 95, raw: 869 }, // edge case
  { score: 96, raw: 868 },
  { score: 97, raw: 855 },
  { score: 98, raw: 840 },
  { score: 99, raw: 822 },
  { score: 100, raw: 802 },
  { score: 100, raw: 801 }, // edge  case
];

test("TMR Scores are calculated correctly for males age 17-21", async ({
  page,
}) => {
  male17Tmr.forEach((s) => {
    const score = getScoreDecreasingIsBetter("male", "17", "tmr", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for females age 17-21 for TMR
const female17Tmr: TestScore[] = [
  { score: 0, raw: 1523 }, // edge case
  { score: 0, raw: 1522 },
  { score: 1, raw: 1520 },
  { score: 2, raw: 1518 },
  { score: 3, raw: 1516 },
  { score: 4, raw: 1514 },
  { score: 5, raw: 1512 },
  { score: 6, raw: 1510 },
  { score: 7, raw: 1508 },
  { score: 7, raw: 1507 }, // edge case
  { score: 8, raw: 1506 },
  { score: 9, raw: 1504 },
  { score: 10, raw: 1502 },
  { score: 11, raw: 1500 },
  { score: 12, raw: 1498 },
  { score: 13, raw: 1496 },
  { score: 14, raw: 1494 },
  { score: 15, raw: 1492 },
  { score: 16, raw: 1490 },
  { score: 16, raw: 1489 }, // edge case
  { score: 17, raw: 1488 },
  { score: 18, raw: 1486 },
  { score: 19, raw: 1484 },
  { score: 20, raw: 1482 },
  { score: 21, raw: 1480 },
  { score: 22, raw: 1478 },
  { score: 23, raw: 1476 },
  { score: 24, raw: 1474 },
  { score: 25, raw: 1472 },
  { score: 25, raw: 1471 }, // edge case
  { score: 26, raw: 1470 },
  { score: 27, raw: 1468 },
  { score: 28, raw: 1466 },
  { score: 29, raw: 1464 },
  { score: 30, raw: 1461 },
  { score: 31, raw: 1459 },
  { score: 32, raw: 1457 },
  { score: 33, raw: 1455 },
  { score: 33, raw: 1454 }, // edge case
  { score: 34, raw: 1453 },
  { score: 35, raw: 1451 },
  { score: 36, raw: 1449 },
  { score: 37, raw: 1447 },
  { score: 38, raw: 1445 },
  { score: 39, raw: 1443 },
  { score: 40, raw: 1441 },
  { score: 41, raw: 1439 },
  { score: 43, raw: 1435 },
  { score: 44, raw: 1433 },
  { score: 45, raw: 1431 },
  { score: 46, raw: 1429 },
  { score: 47, raw: 1427 },
  { score: 48, raw: 1425 },
  { score: 49, raw: 1423 },
  { score: 50, raw: 1421 },
  { score: 50, raw: 1420 }, // edge case
  { score: 51, raw: 1419 },
  { score: 52, raw: 1417 },
  { score: 53, raw: 1415 },
  { score: 54, raw: 1413 },
  { score: 55, raw: 1411 },
  { score: 56, raw: 1409 },
  { score: 42, raw: 1437 },
  { score: 58, raw: 1405 },
  { score: 59, raw: 1403 },
  { score: 60, raw: 1402 },
  { score: 60, raw: 1400 }, // edge case
  { score: 61, raw: 1378 },
  { score: 62, raw: 1355 },
  { score: 63, raw: 1331 },
  { score: 64, raw: 1314 },
  { score: 65, raw: 1297 },
  { score: 66, raw: 1280 },
  { score: 67, raw: 1263 },
  { score: 67, raw: 1262 }, // edge case
  { score: 68, raw: 1258 },
  { score: 69, raw: 1249 },
  { score: 70, raw: 1240 },
  { score: 71, raw: 1230 },
  { score: 72, raw: 1221 },
  { score: 73, raw: 1212 },
  { score: 74, raw: 1203 },
  { score: 75, raw: 1196 },
  { score: 76, raw: 1188 },
  { score: 76, raw: 1187 }, // edge case
  { score: 77, raw: 1180 },
  { score: 78, raw: 1172 },
  { score: 79, raw: 1164 },
  { score: 80, raw: 1157 },
  { score: 81, raw: 1149 },
  { score: 82, raw: 1140 },
  { score: 83, raw: 1134 },
  { score: 84, raw: 1126 },
  { score: 85, raw: 1119 },
  { score: 85, raw: 1118 }, // edge case
  { score: 86, raw: 1110 },
  { score: 87, raw: 1102 },
  { score: 88, raw: 1093 },
  { score: 89, raw: 1084 },
  { score: 90, raw: 1076 },
  { score: 90, raw: 1068 }, // edge case
  { score: 91, raw: 1067 },
  { score: 92, raw: 1057 },
  { score: 93, raw: 1047 },
  { score: 94, raw: 1034 },
  { score: 95, raw: 1021 },
  { score: 95, raw: 1020 }, // edge case
  { score: 96, raw: 1008 },
  { score: 97, raw: 994 },
  { score: 98, raw: 976 },
  { score: 99, raw: 955 },
  { score: 100, raw: 929 },
  { score: 100, raw: 928 }, // edge case
];

test("TMR Scores are calculated correctly for females age 17-21", async ({
  page,
}) => {
  female17Tmr.forEach((s) => {
    const score = getScoreDecreasingIsBetter("female", "17", "tmr", s.raw);
    expect(score).toEqual(s.score);
  });
});
