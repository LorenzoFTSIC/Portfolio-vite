import '../../App.css';


const Contact = () => {
    return (
      <div className="min-h-30vh p-8 flex justify-center">
        <div className="bubble max-w-md shadow-lg space-y-3 text-white border-4">
          <div>
            <h2 className="text-xl font-semibold">Lorenzo Ferri</h2>
            <p className="text-sm text-gray-200">Developer</p>
          </div>

          <div className="space-y-1 text-sm">
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href={`mailto: lorenzoferritsic@gmail.com`}
                className="underline hover:text-gray-300"
              >
                lorenzoferritsic@gmail.com
              </a>
            </p>

            <p>
              <span className="font-medium">Phone:</span> 4072337621
            </p>

            <p>
              <span className="font-medium">Location:</span> Orlando, FL
            </p>
          </div>

          <div className="flex gap-4 pt-2 text-sm">
            <a
              href={"https://github.com/LorenzoFTSIC"}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              GitHub
            </a>
            <a
              href={"linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    );
};

export default Contact;