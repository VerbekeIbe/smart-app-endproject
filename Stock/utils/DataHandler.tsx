import React from 'react'

// const API = "http://localhost:5000";
const API = "https://backend-uitleendienst20210819190651.azurewebsites.net";

export const getData = async function (props: any) {
    const rawData = await fetch(`${API}/${props.endpoint}/${props.categorie}`).then((response) => response.json())
    return rawData
}

export const getLeningen = async function (props: any) {
    console.log("endpoint")
    console.log(props.endpoint)
    const rawData = await fetch(`${API}/${props.endpoint}`).then((response) => response.json())
    return rawData
}

export const getShoppingList = async function (props: any) {
    console.log("endpoint")
    console.log(props.endpoint)
    const rawData = await fetch(`${API}/${props.endpoint}`).then((response) => response.json())
    return rawData
}




export const postData = async function (props: any) {
    console.log("triggered")
    await fetch(`${API}/${props.endpoint}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(props.requestBody)
    });

    console.log("done")
}

export const deleteData = async function (props: any) {
    console.log("triggered")
    await fetch(`${API}/${props.endpoint}/${props.id}`, {method: 'DELETE'});

    console.log("done")
}

export const postEndLening = async function(props: any) {
    console.log("triggered")
    await fetch(`${API}/${props.endpoint}/${props.id}`, {method: 'POST'});

    console.log("done")
}

