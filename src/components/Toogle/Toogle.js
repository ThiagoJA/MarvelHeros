import React, { useState } from 'react';
import styled from 'styled-components';

const ToogleInput = styled.label`
    position: relative;
    display: inline-block;
    width: 54px;
    height: 28px;
    margin: 0px 10px;
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #E8E8E8;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 30px;
        display: block !important;
        :before {
            position: absolute;
            content: "";
            height: 17px;
            width: 17px;
            left: 4px;
            bottom: 6px;
            background-color: #FF1510;
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 30px;
            box-shadow: 2px 3px 4px 2px rgba(255,21,16,0.53);
            ${props => (
                props.checked ? `left: 31px` : `left: 6px`
            )}
        }
    }
`

const handleClick = (setFilterType, setChecked) => {
    setFilterType(prevState => !prevState);
    setChecked(prevState => !prevState);
}

const Toogle = ({ setFilterType }) => {
    const [checked, setChecked] = useState(false);
    return (
        <ToogleInput checked={checked}>
            <input type="checkbox" onClick={() => handleClick(setFilterType, setChecked)} />
            <span />
        </ToogleInput>
    )
};

export default Toogle;
