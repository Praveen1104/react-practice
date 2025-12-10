import React, { useState } from 'react';

function ConfirmationModal() {
  const [openConfiramtion, setOpenConfiramtion] = useState(false)
  const [message, setmessage] = useState("")

  const confirm = () => {
    setmessage("Confirmed")
    setOpenConfiramtion(false)
  }
  const cancel = () => {
    setmessage("Cancelled")
    setOpenConfiramtion(false)
  }
  return (
    <div className="modal-container">
      <button data-testid="open-modal-button" className="open-modal-btn" onClick={() => setOpenConfiramtion(!openConfiramtion)}>Open Confirmation Modal</button>

      {
        openConfiramtion && <div className="modal-backdrop" data-testid="confirmation-modal">
          <div className="modal-box" >
            <h2 className="modal-title" data-testid="modal-title">Confirm Action</h2>
            <p className="modal-message" data-testid="modal-message">Are you sure you want to proceed?</p>

            <div className="modal-buttons">
              <button className="confirm-btn"
                data-testid="confirm-button" onClick={() => confirm()}>Confirm</button>
              <button className="cancel-btn"
                data-testid="cancel-button"  onClick={() => cancel()}>Cancel</button>
            </div>
          </div>
        </div>

      }
      <div className="action-status" data-testid="action-status"> {message}</div>
    </div>
  );
}

export default ConfirmationModal;
