import React from 'react'

export default class Activity extends React.Component
{


    constructor(props)
    {
      super(props)
       this.state = {details:[
           {img:'/img/together.png',title:'Podcast',description:'Listen to your precious devs'},
           {img:'./img/together.png',title:'Sessions',description:'Get hands on practicals from our...'},
           {img:'./img/together.png',title:'News Letter',description:'Our biweekly news letter features opportunities...'}
    ]}
    }

  render()
  {
      return (   <section>
        <div classNmae="container" style={{background: '#ffffff'}}>
            <div classNmae="row">
             <div classNmae="col-12 mb-5"><h4 classNmae="text-center">Our Activities</h4></div>
 

             {/* this.state.details.map(detail => {
             
             <div classNmae="col-4">
             <div classNmae="card" style={{width:"190px"}}>
                 <img src="./img/together.png" alt="" classNmae="card-img-top" width="150px" />
             </div>
             <div classNmae="card-body">
                 <div classNmae="card-title">Podcast</div>
                 <div classNmae="card-text">Listen to your precious devs</div>
             </div>    
         </div>

             }) */}

             <div classNmae="col-4">
                 <div classNmae="card" style={{width:"190px"}}>
                     <img src="./img/together.png" alt="" classNmae="card-img-top" width="150px" />
                 </div>
                 <div classNmae="card-body">
                     <div classNmae="card-title">Podcast</div>
                     <div classNmae="card-text">Listen to your precious devs</div>
                 </div>    
             </div>
 
 
            </div>
        </div>
 
    </section>)
  }

}