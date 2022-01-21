import React from 'react';

const Weather = ({wData,unit}) => {
    let tempUnit = unit === "metric" ? "C" : "F";
    console.log(unit);
    return(
        <div className="weather-card min-w-[400px] w-[500px] bg-orange-400 text-center text-white mx-auto mt-6 rounded-2xl p-5">
            
           <table className="table text-sans text-[25px] w-full">
               <tbody>
                   <tr>
                       <td scope="row" className="text-left">City Name</td>
                       <td className="text-left">{wData[0].name}</td>
                   </tr>
                   <tr>
                       <td scope="row" className="text-left">Current Tempreture</td>
                       <td className="text-left">
                           {wData[0].main.temp}&#176;
                            <span>{tempUnit}</span> 
                        </td>
                   </tr>
                    <tr>
                       <td scope="row" className="text-left">Weather</td>
                       <td className="text-left">{wData[0].weather[0].main}</td>
                   </tr>
                   
               </tbody>
           </table>
            
        </div>
    )
    // return(
    //     <div className="weather-card">
    //       {wData.map(wd=>{
    //           console.log(wd);
    //           <h1 className="location-name">
    //               Hello
    //           </h1>
    //       })} 
    //     </div>
    // )
}

export default Weather;