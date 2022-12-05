import React, { useState } from 'react';
import Alert from './Alert';
import '../Styles/addProperty.css';
import axios from 'axios';

const AddProperties = () => {

    const initialState = {
        fields: {
            title: "No title entered",
            city: "Manchester",
            type: "Flat",
            bedrooms: "0",
            bathrooms: "0",
            email: "No e-mail entered",
            price: "No price entered"
        },
        alert: {
            message: '',
            isSuccess: false,
        },
    }

    const [fields, setFields] = useState(initialState.fields);
    const [alert, setAlert] = useState(initialState.alert);

    const url = 'http://localhost:3000/api/v1/PropertyListing'


    const handleAddProperty = (event) => {
        event.preventDefault()
        setAlert({ message: "", isSuccess: false });
        console.log(fields)

        axios.post(url, fields)
            .then(() =>
                setAlert({
                    message: "Property Added",
                    isSuccess: true,
                })
                    .catch(() =>
                        setAlert({
                            message: "Server error. Please try again later.",
                            isSuccess: false,
                        })
                    )
            )
    }

    const handleFieldChange = (event) => {
        setFields({ ...fields, [event.target.name]: event.target.value })
    }

    return (
        <div className="add-property">
            <h1 className='page-title'>Add Property Page</h1>

            <form className='property-form' onSubmit={handleAddProperty}>
                {alert.message && (
                    <Alert message={alert.message} success={alert.isSuccess} />
                )}
                <label className="property-form-item" htmlFor='title'>
                    Title
                    <input
                        id='title'
                        name='title'
                        value={fields.title}
                        onChange={handleFieldChange}
                    />
                </label>

                <label className="property-form-item" htmlFor='city'>
                    City
                    <select id='city' name='city' value={fields.city} onChange={handleFieldChange}>
                        <option value="Manchester">Manchester</option>
                        <option value="Leeds">Leeds</option>
                        <option value="Sheffield">Sheffield</option>
                        <option value="Liverpool">Liverpool</option>
                    </select>

                </label>

                <label className="property-form-item" htmlFor='type'>
                    Type of house
                    <select id="type" name='type' value={fields.type} onChange={handleFieldChange}>
                        <option value="Flat">Flat</option>
                        <option value="Detached">Detached</option>
                        <option value="Semi-Detached">Semi-Detached</option>
                        <option value="Terraced">Terraced</option>
                        <option value="End of Terrace">End of Terrace</option>
                        <option value="Cottage">Cottage</option>
                        <option value="Bungalow">Bungalow</option>
                    </select>
                </label>

                <label className="property-form-item" htmlFor='bedrooms'>
                    Number of bedrooms
                    <select id='bedrooms' name='bedrooms' value={fields.bedrooms} onChange={handleFieldChange}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                </label>

                <label className="property-form-item" htmlFor='bathrooms'>
                    Number of bathrooms
                    <select id='bathrooms' name='bathrooms' value={fields.bathrooms} onChange={handleFieldChange}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                </label>

                <label className="property-form-item" htmlFor='email'>
                    E-mail
                    <input
                        id='email'
                        name='email'
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                </label>

                <label className="property-form-item" htmlFor='price'>
                    Price
                    <input
                        id='price'
                        name='price'
                        placeholder='2000'
                        value={fields.price}
                        onChange={handleFieldChange}
                    />
                </label>


                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddProperties;