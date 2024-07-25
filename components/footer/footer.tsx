const Footer = () => {
  return (
    // dark:bg-[#0b0c21]
    <div className="flex justify-center items-center bg-footer  py-5">
      <span className="text-sm text-footer-text">
        Copyright © {new Date().getFullYear()} • All rights reserved
      </span>
    </div>
  );
};

export { Footer };
