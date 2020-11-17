import React from 'react';

const ChooseUsDetails = (props) => {
    const { title, img, details } = props.data;
    console.log(props);
    return (
        <div className="col-md-4">
            <div className="choose-card text-center">
            <img className="img-fluid" src={img} alt="" />
            <h4>{title}</h4>
            <p>{details}</p>
            </div>
        </div>
    );
};

export default ChooseUsDetails;