//  Search by country  - first priority
// search by city - second priority
// filter -always update a list of values that starts with the string in the search

// Implementation
// I'll be creating each list as an array of strings
// one with country names already exists in json
// got to make sure its transfered correctly
// for cities I need a function to read the objects and extract
// only the names, to optmize that i might just replace the cities json
// with one with only cities if that fits our purpose
const fs = require("fs");
const path = require("path");
// paths
const countriesJsonPath = path.join("..", "data/countries.json");
const citiesJsonPath = path.join("..", "data/cities-only.json");
// a const to declare how many options we want to show, can be changed
const requiredNumberOfOptions = 5;
// an iife to create a namespace and scope for this particular section
  // want to create 10 options starting with countries , then cities
  // future goal, if the first word in the search string is a country
  // skip giving options for countries,give options for cities within the country
  // but what if i want to type israel and iran?
  // what does our site do? display info about a country / city? then first option works
  function createOptions(string) {
    // optionsList will have the updated options as the user types
    var optionsList = [];
    string.toUpperCase();
    // current numbers of options found, for example if we find 10 countries to
    // show then we dont have to search for cities
    var currentNumberOfOptions = 0;

    // lists to be filled when we read the files
    var countriesList = [],
      citiesList = [];
    // function listByCountry(string) {
      fs.readFile(countriesJsonPath, (error, file) => {
        if (error) {
          console.log("Error reading countries file");
          return "Error - 0";
        } else {
          countriesList = JSON.parse(file);

          // array.some loops over array and executes callback
          // until the callback function returns true

          countriesList.some(country => {
            if (currentNumberOfOptions >= requiredNumberOfOptions) {
              return true;
            }
            if (country.toUpperCase().startsWith(string)) {
              optionsList.push(country);
              currentNumberOfOptions++;
            }
          });
        }
      });
    // }
    // Don't go searching for cities unless you need more options
    if (currentNumberOfOptions < requiredNumberOfOptions) {
      // function listByCity(string) {
        fs.readFile(citiesJsonPath, (error, file) => {
          if (error) {
            console.log("Error reading cities file");
            return "Error - 0";
          } else {
            citiesList = JSON.parse(file);

            // array.some loops over array and executes callback
            // until the callback function returns true

            citiesList.some(city => {
              if (currentNumberOfOptions >= requiredNumberOfOptions) {
                return true;
              }
              if (city.toUpperCase().startsWith(string)) {
                optionsList.push(city);
                currentNumberOfOptions++;
              }
            });
          }
        });
      // }
    }
  }
  

  // Iffe function end

// Iffe function end

//   exporting module

module.exports = createOptions;