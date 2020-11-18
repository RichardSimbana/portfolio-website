import React from 'react';
import './Work.css';
import Card from './../../components/Card';
import WorkModal from './../../components/WorkModal';

const Work = props => {

    const workCards = props.cardInfos.map(x => {
        return (
            <Card
                key={x.title}
                cardInfos={x}
                onSelectClick={() => props.onSelectClick(x)}
            />
        )
    });

    return (
        <div id="work" className="container-fluid work">
            <div className="jumbotron">
                <div className="row">
                    <div className="col">
                        <div className="jumbotron-title">Work</div>
                    </div>
                </div>
                <div className="row">
                    {workCards}
                </div>
                <WorkModal
                    selectedCard={props.selectedCard}
                />
            </div>
        </div>
    )
}
export default Work;
