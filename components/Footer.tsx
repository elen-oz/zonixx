import {Link} from "@nextui-org/react";

const Footer = () => {
    return (
        <footer className="w-full">
            <div className="text-center">
                {new Date().getFullYear()}{' '}&copy;{' '}
                <Link
                    isExternal
                    href="https://github.com/elen-oz"
                    showAnchorIcon
                >
                    Author
                </Link>
            </div>
        </footer>
    )
}

export default Footer;