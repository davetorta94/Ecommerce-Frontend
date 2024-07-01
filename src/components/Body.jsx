import { useDispatch, useSelector } from 'react-redux';
import { TypeAnimation } from 'react-type-animation';
import { getItems, increment } from '../store/slices/ecommerce';
import { useEffect } from 'react';

export const Body = () => {

  //const {ecommerce} = useSelector( state => state.ecommerce);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems())
    
  }, [])
  
  return (
    <>
        <div className="container">
          <div className="rowd-flex justify-content-between mt-5">
              <h1 className='pt-5 text-center'>
              <TypeAnimation
                      style={{
                        display: 'block',
                        height: '100px',
                        
                      }}
                      sequence={[
                        "Productos Artesanos de Gran Calidad",
                        1000,
                        
                      ]}
                      speed={50}
                      
                      className="type-animation-font"
                    />
              </h1>
          </div>
            <div className="row d-flex justify-content-between mt-5">
                <div className="col-2 mt-5">
                    <div className="card sale-card">
                   <img src="..." className="card-img-top" alt="..."/>
                   <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <a href="#" className="btn btn-primary" onClick={()=> dispatch(increment())}>Go somewhere</a>
                   </div>
                  </div>
                </div>

                {/*<div className="col-12">{ecommerce}</div>*/}

                <div className="col-2 mt-5">
                    <div className="card sale-card">
                   <img src="..." className="card-img-top" alt="..."/>
                   <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <a href="#" className="btn btn-primary">Go somewhere</a>
                   </div>
                  </div>
                </div>

                <div className="col-2 mt-5">
                    <div className="card sale-card">
                   <img src="..." className="card-img-top" alt="..."/>
                   <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <a href="#" className="btn btn-primary">Go somewhere</a>
                   </div>
                  </div>
                </div>


            </div>
        </div>
    </>
  )
}
