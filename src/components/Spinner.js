import React from 'react'

function Spinner() {
    return (
        <div>
            <div class="d-flex align-items-center">
                <strong>Loading...</strong>
                <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        </div>
    )
}

export default Spinner
