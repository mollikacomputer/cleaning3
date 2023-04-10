import Link from "next/link";

const index = ({ services }) => {
  return (
    <div className="container mx-10">
      <h2 className="card-title">Total Services:{services.length}</h2>

      <Link href={"/"}>
          <button className="btn btn-success"> Back to Home</button>
        </Link>

      <div className="flex justify-between">
        {services.map((service) => (
          <div className="card my-10 w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{service.title}</h2>
              <p>{service.body}</p>
              <div className="card-actions justify-end">
                <Link href={`/services/${service.id}`} >
                <button className="btn btn-primary"> read more... </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        
      </div>

    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/?_limit=3");
  const data = await res.json();
  return {
    props: {
      services: data,
    },
  };
};

export default index;
