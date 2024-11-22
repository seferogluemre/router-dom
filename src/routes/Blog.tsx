import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function BlogPage() {



    return (
        <div>
            <h1>Blogumuz</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eius! Nam architecto consequatur eligendi recusandae magni? Omnis similique aliquid maxime, cum, quaerat alias repellendus beatae, qui sint eveniet explicabo nihil.</p>
            <p>Tony Rodrigez</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo molestiae repudiandae sapiente aliquam! Ipsum.</p>
            <Nav.Link to={`archived`} as={NavLink}>Bloglarımız</Nav.Link>
        </div>
    )
}