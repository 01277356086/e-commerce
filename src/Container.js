import React from 'react';
function Container() {
    return (
        <>
           <div style={{ maxWidth: '100%',height: '105vh' ,background:'#f7f7f7' , display:'flex',justifyContent:'center'}}>
            <div style={{ maxWidth: '90%', margin:'30px'  }}>
                     <div className="row g-0">
                        <div className="col-md-4">
                            <img src='https://www.ambitiouskitchen.com/wp-content/uploads/2018/07/AK-BeautyProducts-Blog-2.jpg' className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" style={{margin:'100px',padding:'50px'}}>
                                <h3 className="card-title">ambitious</h3>
                                <p className="card-text">
                                    Hello beauties! I’m back from trip to LA and am feeling more inspired than ever.
                                    Don’t worry, I’m doing a recap ASAP, but in the meantime I’ve got a little something special for you.
                                </p>
                                <p className="card-text"><small className="text-body-secondary">
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