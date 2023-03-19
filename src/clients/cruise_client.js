import CruiseModel from "../models/cruise_model";

const CruiseClient = {
  getCruises: (search) => {
    const results = [];
    for (let i = 0; i < 10; i++) {
      const startDate = new Date(2023, 1 + i, i * 3);
      const endDate = new Date(2023, 1 + i, i * 3 + 4);
      results.push(
        new CruiseModel(
          `Cruise ${i}`,
          startDate,
          endDate,
          "Magic",
          "Port Canaveral"
        )
      );
    }
    return results;
  },
  getCruise: (cruiseId) => {
    const startDate = new Date(2023, 5, 10);
    const endDate = new Date(2023, 5, 14);
    return new CruiseModel(
      "Single Cruise",
      startDate,
      endDate,
      "Magic",
      "Port Canaveral"
    );
  },
};

export default CruiseClient;
