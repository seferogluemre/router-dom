import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useBearStore } from "../stores/CounterStore";

export default function BlogPage() {

    const bears = useBearStore((state) => state.bears)
    const increasePopulation = useBearStore((state) => state.increasePopulation)
    const removeAllBears = useBearStore((state) => state.removeAllBears)

    return (
        <div>
            <h1>Blogumuz</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eius! Nam architecto consequatur eligendi recusandae magni? Omnis similique aliquid maxime, cum, quaerat alias repellendus beatae, qui sint eveniet explicabo nihil.</p>
            <p>Tony Rodrigez</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo molestiae repudiandae sapiente aliquam! Ipsum.</p>
            <Nav.Link to={`archived`} as={NavLink}>Bloglarımız</Nav.Link>
            <div>
                burada {bears} tane ayı var
            </div>
            <div>
                <button onClick={increasePopulation}>Yeni ayı ekle</button>

                <button onClick={removeAllBears}>Ayıları kaldır</button>
            </div>
        </div>
    )
}