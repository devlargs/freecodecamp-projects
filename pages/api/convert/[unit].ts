import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const units = {
      L: "liters",
      gal: "gallons",
      lbs: "pounds",
      kg: "kilograms",
      mi: "miles",
      km: "kilometer",
    };
    const { unit } = req.query;
    const splitter = `${unit}`.match(/[a-z]+|[^a-z]+/gi);

    if (splitter.length !== 2) {
      res.send("invalid unit");
    } else {
      const tempNum = +splitter[0];
      const tempUnit = splitter[1];
      if (
        typeof tempUnit === "string" &&
        typeof tempNum === "number" &&
        !Number.isNaN(tempNum)
      ) {
        if (Object.keys(units).includes(tempUnit)) {
          let response = ({ returnNum, returnUnit }) => ({
            initNum: tempNum,
            initUnit: tempUnit,
            returnNum: +returnNum.toFixed(5),
            returnUnit,
            string: `${tempNum} ${
              units[tempUnit]
            } converts to ${returnNum.toFixed(5)} ${units[returnUnit]}`,
          });

          switch (tempUnit) {
            case "L": {
              res.send(
                response({
                  returnNum: tempNum / 3.78541,
                  returnUnit: "gal",
                })
              );
              break;
            }
            case "gal": {
              res.send(
                response({
                  returnNum: tempNum * 3.78541,
                  returnUnit: "L",
                })
              );
              break;
            }
            case "lbs": {
              res.send(
                response({
                  returnNum: tempNum * 0.453592,
                  returnUnit: "kg",
                })
              );
              break;
            }
            case "kg": {
              res.send(
                response({
                  returnNum: tempNum / 0.453592,
                  returnUnit: "lbs",
                })
              );
              break;
            }
            case "mi": {
              res.send(
                response({
                  returnNum: tempNum * 1.60934,
                  returnUnit: "km",
                })
              );
              break;
            }
            case "km": {
              res.send(
                response({
                  returnNum: tempNum / 1.60934,
                  returnUnit: "mi",
                })
              );
              break;
            }
            default:
              break;
          }
        } else {
          res.send("invalid unit");
        }
      } else {
        res.send("invalid number and unit");
      }
    }
  }
};
