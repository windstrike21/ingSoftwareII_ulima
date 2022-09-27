import React from 'react';

const Paginacion = () => {
    return (
        <div className="">
            <nav  >
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        
                            <button class="page-link" href="#" aria-label="Previous" onClick={<d/>}>
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        

                    </li>
                    <li class="page-item"><button class="page-link" href="#" onClick={<d/>}>1</button></li>
                    <li class="page-item"><button class="page-link" href="#" onClick={<d/>}>2</button></li>
                    <li class="page-item"><button class="page-link" href="#" onClick={<d/>}>3</button></li>
                    <li class="page-item">
                        <button class="page-link" href="#" aria-label="Next" onClick={<d/>}> 
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Paginacion;