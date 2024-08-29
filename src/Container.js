import React from 'react';
import './container.css';
import containerimg from './images/22e.png'
 function Container() {
    return (
        <>
            <div className='container-all' >
                <div style={{ maxWidth: '90%', margin: '30px' }}>

                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={containerimg} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div style={{ margin: '100px', padding: '50px' }}>
                                <h2 >Ambitious</h2>
                                <p  >
                                    Hello beauties! I’m back from trip to LA and am feeling more inspired than ever.
                                    Don’t worry, I’m doing a recap ASAP, but in the meantime I’ve got a little something special for you.
                                </p>
                                <p ><small className="text-body-secondary">
                                    I practice a few things that I think make a big difference</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Container;