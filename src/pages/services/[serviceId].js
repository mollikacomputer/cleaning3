import Link from "next/link";

const ServiceDetails = ({ service }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={service.image}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{service.title}</h1>
          <p className="py-6">
            {service.body}
          </p>
          <Link href={'/services'}>
          <button className="btn btn-primary"> Back to Post  </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.serviceId}`
  );
  const data = await res.json();
  return {
    props: {
      service: data,
    },
  };
};

// get service id
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const services = await res.json();
  const paths = services.map((service) => { 
    return {
      params: {
        serviceId: `${service.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export default ServiceDetails;
