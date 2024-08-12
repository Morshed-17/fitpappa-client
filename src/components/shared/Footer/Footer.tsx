const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">Contact us at:</p>
            <p className="text-sm">example@email.com | +123456789</p>
          </div>
          <div className="md:col-span-2">
            <div className="flex justify-center space-x-4">
              <a
                href="https://twitter.com/example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Twitter
              </a>
              <a
                href="https://facebook.com/example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com/example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <a href="/terms" className="text-white hover:underline">
              Terms of Service
            </a>
          </div>
          <div className="hidden lg:block">
            <a href="/privacy" className="text-white hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
