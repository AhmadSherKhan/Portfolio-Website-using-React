import "./ServicesStyle.css";
import ServicesCard from "./ServicesCard";

function Services() {

  
  const Services = [
    {
      id:1,
      icon: "fas fa-laptop", 
      name: "Design and Development",
      description: "Design and develop your websites with HTML, CSS, and JavaScript skills. I offer to create responsive websites that look great on desktop and mobile devices.",
    },
    {
    id: 2,
    icon: "fas fa-laptop", 
    name: "Website maintenance",
    description: "Maintain and update your websites for clients, ensuring that websites remain up-to-date, secure, and functional.",
  },
  {
    id: 3,
    icon: "fas fa-laptop", 
    name: "E-commerce Development",
    description: "I can make your e-commerce websites with integrating payment gateways, shopping carts, and other e-commerce features.",
  },
  ]

  return (
    <div className="bg">
      <div className="services">
        <h2>Our Services</h2>
        <p className="">
          Building innovative web solutions for your business Your partner in
          creating cutting-edge websites and web applications Transforming your
          ideas into digital reality
        </p>

        <div className="services-card">
          {Services.map(item => {
            return(
              <ServicesCard 
          key={item.id}
          icon={item.icon}
          name={item.name}
          description={item.description}
          />
            )
          })}
          
        </div>
      </div>

      <marquee class="marq" bgcolor="White" direction="left">
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-square-js"></i>
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-node"></i>
        <i class="fa-brands fa-php"></i>
        <i class="fa-brands fa-laravel"></i>
        <i class="fa-brands fa-vuejs"></i>
      </marquee>
    </div>
  );
}

export default Services;
