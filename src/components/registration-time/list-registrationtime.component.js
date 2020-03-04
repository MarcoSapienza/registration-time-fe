import React, { useMemo, useState, useEffect } from "react";

import RegistrationTimeTable from "../atomic-component/improvementregistrationtimetable.atomic";
import RegistrationTime from "../../api/resources/registrationtime.resource";

function RegistrationTimesList() {

    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const registrationTime = new RegistrationTime();
            await registrationTime.getAllRegistrationTime((response) =>{
                let tableData = Object.assign([], response);
                tableData.map(singleRegistration => {
                    const endDate= new Date(singleRegistration.end);
                    const startDate= new Date(singleRegistration.start);

                    const difference = Math.abs(endDate.getTime() - startDate.getTime()) / 3600000;
                    singleRegistration['difference'] = difference;
                    singleRegistration['totalamount'] = difference * singleRegistration.project[0].amountperhour;
                    return singleRegistration;
                });

                setData(tableData);
            }, (error) =>{
                console.log("Error on getAllRegistratioTime: ",error);
            })
        })();
    }, []);

    /*
      - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to Memoize the columns data
      - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
    */
    const columns = useMemo(
        () => [
            {
                // first group - TV Show
                Header: "RegistrationTimes",
                // First group columns
                columns: [
                    {
                        Header: "Name",
                        accessor: "project[0].name"
                    },
                    {
                        Header: "Start",
                        accessor: "start"
                    },
                    {
                        Header: "End",
                        accessor: "end"
                    },
                    {
                        Header: "Difference",
                        accessor: "difference"
                    },
                    {
                        Header: "Total Amount",
                        accessor: "totalamount"
                    },
                    {
                        Header: "Description",
                        accessor: "description"
                    }


                ]
            }
        ],
        []
    );


    return (
        <div className="App">
            <RegistrationTimeTable columns={columns} data={data} />
        </div>
    );
}

export default RegistrationTimesList;
