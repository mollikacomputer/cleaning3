const index = ({ services }) => {
  return (
    <div className="container mx-10" >
     <h2 className="card-title">Total Services:{services.length}</h2>
        {
            services.map(
            service => 
            <div className="card my-10  bg-base-100 shadow-xl">
            <div className="card-body">
            <h2 className="card-title">Total Services:{service.title}</h2>
              <p>{service.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"> read more... </button>
              </div>
            </div>
          </div>
          )
        }
      
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();
  return {
    props: {
      services: data,
    },
  };
};

export default index;
