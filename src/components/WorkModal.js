import React from 'react';

const WorkModal = props => {
    const { title, date, description, role, link } = props.selectedCard;
    return (
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-md" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className='modal-row'>
                            <label className='modal-body-title mr-2'>Date:</label>
                            <span className='modal-body-content'>{date}</span>
                        </div>
                        <div className='modal-row'>
                            <label className='modal-body-title mr-2'>Description:</label>
                            <span className='modal-body-content'>{description}</span>
                        </div>
                        <div className='modal-row'>
                            <label className='modal-body-title mr-2'>Role: </label>
                            <span className='modal-body-content'>{role}</span>
                        </div>
                        <div className='modal-row'>
                            <label className='modal-body-title mr-2'>Link:</label>
                            <a href={link} target="_blank" rel="noopener noreferrer">More Info</a>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WorkModal;
