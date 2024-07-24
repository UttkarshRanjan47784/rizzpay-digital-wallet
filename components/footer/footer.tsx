const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-[#f1f3f5] dark:bg-[#0b0c21] py-5">
      <span className="text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} • All rights reserved
      </span>
    </div>
  );
};

export { Footer };
