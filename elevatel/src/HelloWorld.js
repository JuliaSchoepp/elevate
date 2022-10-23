import {useData} from './DataProvider';
import React from 'react';


export default function HelloWorld(){
    const data = useData();
    return <div>{data.value}</div>
}
