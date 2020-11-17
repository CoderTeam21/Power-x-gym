import React from 'react';
import body from '../../../images/icon/choose-1.png'
import tools from '../../../images/icon/choose-2.png'
import box from '../../../images/icon/choose-3.png'
import ChooseUsDetails from '../ChooseUsDetails/ChooseUsDetails';


const chooseData = [
    {
        id: 1,
        title: "FREE FITNESS TRAINING",
        img: body,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non autem deserunt reprehenderit quisquam vel quibusdam, laborum,  dolores ab assumenda pariatur porro minima, quam ratione nostrum!"
    },
    {
        id: 2,
        title: "TONS OF CARDIO AND STRENGTH",
        img: tools,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non autem deserunt reprehenderit quisquam vel quibusdam, laborum,  dolores ab assumenda pariatur porro minima, quam ratione nostrum!"
    },
    {
        id: 3,
        title: "NO COMMITMENT MEMBERSHIPS",
        img: box,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non autem deserunt,  dolores ab assumenda pariatur porro minima, quam ratione nostrum!"
    }
]

const ChooseUs = () => {
    return (
        <section className="container">
            <div className="choose-us-body">
                <h1 className=" text-center my-5"><span className="colored-text">WHY</span>CHOOSE US</h1>
                <div className="row d-flex justify-content-center align-items-center">
                    {
                        chooseData.map(ch => <ChooseUsDetails key={ch.id} data={ch} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;