import { Link } from 'react-router-dom'

const MobileNav = () => {
    return (
        <section className="mobile-nav">
            <Link to="/">
                <span className="text-xs">Overview</span>
            </Link>

            <Link to="/rules">
                <span className="text-xs">Rules</span>
            </Link>

            <Link to="/sheet">
                <span className="text-xs">Sheet</span>
            </Link>
        </section>
    )
}

export default MobileNav
