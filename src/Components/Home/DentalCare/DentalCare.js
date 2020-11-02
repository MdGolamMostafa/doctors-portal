import React from 'react';
import DentalCareImg from '../../../images/DentalCareImg.png';

const DentalCare = () => {

    return ( 
        <section className = 'pd-m-5 my-5'>
            <div  className = 'container mb-5 '>
                <div className = 'row mb-5 '>
                    <div className="col-md-5 mb-4 mr-0">
                        <img className = 'img-fluid ' src={DentalCareImg}></img>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h2 className = 'mt-0'>Exceptional Dental <br/> Care , on Your Terms</h2>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet <br/>consectetur adipisicing  <br/>
                            elit. Nesciunt culpa cum  <br/>alias obcaecati officiis
                            maxime earum repellendus. <br/> Dignissimos, eum. Quia, <br/>
                            incidunt labore ex omnis
                            beatae numquam ut autem aliquam tempore ad, vero iste?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolore non corrupti consectetur voluptas nobis quam deserunt maiores nostrum laudantium voluptatibus rem in porro eum, veniam unde illum totam facere.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt esse ab, ad rerum vero totam mollitia illum corrupti, obcaecati odit quos alias, quam corporis! Reprehenderit quis harum perferendis cumque voluptas voluptatum commodi quisquam!
                        </p>
                        <button className = "btn btn-primary">learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DentalCare;