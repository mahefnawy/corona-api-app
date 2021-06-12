export const dataModulatorService = (selectedCountries, countriesApiData) => {
    let totalDataObj = {
        tableData: [],
        activeArr: [],
        deathsArr: [],
        recoveriesArr: [],
        totalActive: 0,
        totalDeaths: 0,
        totalRecoveries: 0,
        totalRowObject: {},
    };

    selectedCountries.map((countryString, selectedIndex) => {
        countriesApiData.Countries.map((apiCountryObj) => {
            if (apiCountryObj.Country === countryString) {
                let countryData = {
                    key: selectedIndex,
                    countryName: apiCountryObj.Country,
                    active: apiCountryObj.TotalConfirmed,
                    deaths: apiCountryObj.TotalDeaths,
                    recoveries: apiCountryObj.TotalRecovered,
                };

                totalDataObj.tableData.push(countryData);
                totalDataObj.activeArr.push(countryData.active);
                totalDataObj.deathsArr.push(countryData.deaths);
                totalDataObj.recoveriesArr.push(countryData.recoveries);
            }
        });
    });

    if (totalDataObj.tableData.length > 0) {
        totalDataObj.tableData.map((tableDataObject) => {
            totalDataObj.totalActive += tableDataObject.active;
            totalDataObj.totalDeaths += tableDataObject.deaths;
            totalDataObj.totalRecoveries += tableDataObject.recoveries;
        });
        totalDataObj.totalRowObject = {
            key: totalDataObj.tableData.length + 1,
            countryName: 'Total',
            active: totalDataObj.totalActive,
            deaths: totalDataObj.totalDeaths,
            recoveries: totalDataObj.totalRecoveries,
        };
        totalDataObj.tableData.push(totalDataObj.totalRowObject);
    }
    return totalDataObj;
};
