import { Link } from '@nextui-org/react';

const Footer = () => (
  <footer className="w-full pb-4 pt-8">
    <div className="text-center">
      {new Date().getFullYear()} &copy;{' '}
      <Link isExternal href="https://github.com/elen-oz" showAnchorIcon>
        Author
      </Link>
    </div>
  </footer>
);

export default Footer;
