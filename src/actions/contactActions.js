import {
    GET_CONTACTS,
    DELETE_CONTACT,
    ADD_CONTACTS,
    GET_CONTACT,
    UPDATE_CONTACT,
} from "./types";
import Axios from "axios";

export const getContacts = () => async (dispatch) => {
    const res = await Axios.get("http://jsonplaceholder.typicode.com/users");
    dispatch({
        type: GET_CONTACTS,
        payload: res.data,
    });
};
export const getContact = (id) => async (dispatch) => {
    const res = await Axios.get(
        `http://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
        type: GET_CONTACT,
        payload: res.data,
    });
};
export const deleteContact = (id) => async (dispatch) => {
    await Axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
        type: DELETE_CONTACT,
        payload: id,
    });
};
export const addContacts = (contact) => async (dispatch) => {
    const res = await Axios.post(
        "http://jsonplaceholder.typicode.com/users",
        contact
    );
    dispatch({
        type: ADD_CONTACTS,
        payload: res.data,
    });
};
export const updateContact = (contact) => async (dispatch) => {
    const res = await Axios.put(
        `http://jsonplaceholder.typicode.com/users/${contact.id}`,
        contact
    );
    console.log("contact updated: ", res.data);
    dispatch({
        type: UPDATE_CONTACT,
        payload: res.data,
    });
};
