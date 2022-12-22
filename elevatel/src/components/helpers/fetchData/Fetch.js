import React from "react";
import configdata from "../../../env.json";
import './index.css';

class FetchAPIData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    
    componentDidMount() {
        const headers = {'DB-Client-Id': configdata.ID, 
                        'DB-Api-Key': configdata.KEY} 
        fetch("https://apis.deutschebahn.com/db-api-marketplace/apis/fasta/v2/facilities", {headers: headers})
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                items: result
            });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
        .catch(function (error) {
            //Handle error
            console.log(error);
          });
    }
    
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
        return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
        return <div>Loading...</div>;
        } else {
        return (
            // <code>{JSON.stringify(items)}</code>
            // <select className="station-list">
            // {items.map(facility => (
            //     <option key={facility.equipmentnumber} value={facility.equipmentnumber}>
            //     <span>Station ID:{facility.stationnumber} </span> 
            //     <span>Station Status:{facility.state}</span>
                 
            //     </option>
            // ))}
            // </select>
            <div className="search-drop" >
                <span>Stationsuche: </span>
                <select className="station-list" data-cy="fetch-data-station">
                <option /> 
                {items.map((facility) => {
                    return <option key={facility.equipmentnumber} value={facility.equipmentnumber}>
                        StatusID: {facility.stationnumber} 
                        {' '} Station Status: {facility.state} 
                        </option>
                })} 
                </select>
            </div>
        );
        }
    }
}

export {FetchAPIData};