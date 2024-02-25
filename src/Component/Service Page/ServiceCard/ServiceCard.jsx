import swal from 'sweetalert';

const ServiceCard = ({data}) => {
    
    const {id,tittle,description,price,video,img1,img2,img3,img4}=data||{}
      const addToBooking =()=>{
        const newBooking =[]
        
        const booking=  JSON.parse(localStorage.getItem('eventData'))
        if(!booking){
          newBooking.push(data)
          localStorage.setItem('eventData', JSON.stringify(newBooking))

        }else{
        

          newBooking.push(...booking, data)
          localStorage.setItem('eventData', JSON.stringify(newBooking))
          swal("Thanks", "WE Will Email You", "success")
        }
      
      }
          
    return (
        <div>
        <div className="w-[80%] mx-auto mt-2">
        <div className="card bg-base-100 shadow-xl">
       <div className="grid grid-cols-2 gap-3 p-3">
       <img src={img1} className="h-[250px] w-full" />
       <img src={img2} className="h-[250px] w-full" />
       <img src={img3} className="h-[250px] w-full" />
       <img src={img4}  className="h-[250px] w-full" />
       </div>
  <div className="card-body">
    <h2 className=" mt-1 text-center text-3xl font-bold">
      {tittle}
     
    </h2>
    <p className="text-2xl mx-3 font-semibold">{description}</p>
    <div className='text-2xl font-semibold md:w-[50%] mx-auto'>
    <h2 className='text-3xl'>Our Features:</h2>
        <ol className=' list-decimal '>
            <li>We provide best quality  food </li>
            <li>We have best place to host event  </li>
            <li>We have only one packages but cost may vary </li>
            <li>We ensure best security</li>
        </ol>
    </div>
   
        <p className="text-2xl  font-bold text-center">Price:{price}$</p>
      <div className="flex justify-center mt-3">
        <button className="btn btn-success w-[70%] h-[60px] text-xl text-black" onClick={addToBooking}>Make your reservation</button>
      </div>
      
 
  </div>
</div>
        </div>
        <div>
            <h1 className="text-3xl text-center font-semibold mt-6">Introduction Video</h1>
        </div>
        <div className="mt-4 lg:w-[50%] mx-auto  relative pb-[56.25%] h-0  overflow-hidden m-2">

        
         <iframe
         height={400}
         width={900}
         src={video}
         
         className=" absolute  top-0 left-0 w-full h-full lg:h-[50%]"
         >

         </iframe>
        

        
        </div>
        <div>
          
        </div>
         
        </div>
    );
};

export default ServiceCard;