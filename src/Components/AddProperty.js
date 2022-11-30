import React, { useState } from 'react';

import '../Styles/addProperty.css';

const AddProperties = () => {

    const initialState = {
        fields: {
            title: "",
            city: "Manchester",
            type: "Flat",
            bedrooms: "",
            bathrooms: "",
            email: "",
            price: ""
        }
    }

    const [fields, setFields] = useState(initialState.fields);

    const handleAddProperty = (event) => {
        event.preventDefault()
        console.log(fields)
    }

    const handleFieldChange = (event) => {
        setFields({ ...fields, [event.target.name]: event.target.value })
    }

    return (
        <div className="add-property">
            <h1>Add Property Page</h1>

            <form className='property-form' onSubmit={handleAddProperty}>
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