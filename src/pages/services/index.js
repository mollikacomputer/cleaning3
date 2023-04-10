const index = ({ services }) => {
  return (
    <div className="container mx-10" >
     <h2 className="card-title">Total Services:{services.length}</h2>
     <div className="flex justify-between">

        {
            services.map(
            service => 
            <div className="card my-10 w-96 bg-base-100 shadow-xl">
            <figure>
                <img width={400} height={400} src={service.image} alt="Shoes" />
            </figure>
            <div className="card-body">
            <h2 className="card-title">{service.title}</h2>
              <p>{service.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"> read more... </button>
              </div>
            </div>
          </div>
          )
        }

      </div>
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
