export default function getIndexDifference(nextCupOrBank, cupsAndBanks) {
    let difference = 1;
    if (nextCupOrBank === cupsAndBanks.length - 1) {
        difference = -(cupsAndBanks.length - 1);
    }
    return difference;
};