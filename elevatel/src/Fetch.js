import React from "react";
import configdata from "./config.json";

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
    }
    
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
        return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
        return <div>Loading...</div>;
        } else {
        return (
            <ul>
            {items.map(facility => (
                <li key={facility.equipmentnumber}>
                {facility.stationnumber} {facility.state}
                </li>
            ))}
            </ul>
        );
        }
    }
}

export {FetchAPIData};