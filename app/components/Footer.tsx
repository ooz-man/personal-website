export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-[#1E3A5F] px-8 py-10 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-1">
          <p className="text-[#F0F4F8] font-semibold">Usman Hamzat</p>
          <p className="text-[#8A9BB0] text-sm">Founder, CMR Group</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/ooz-man" target="_blank" rel="noopener noreferrer" className="text-[#8A9BB0] text-sm hover:text-[#1E90FF] transition-colors duration-200">GitHub</a>
          <a href="mailto:suthmanh@gmail.com" className="text-[#8A9BB0] text-sm hover:text-[#1E90FF] transition-colors duration-200">Email</a>
          <a href="https://x.com/ooz1006" target="_blank" rel="noopener noreferrer" className="text-[#8A9BB0] text-sm hover:text-[#1E90FF] transition-colors duration-200">X</a>
        </div>
        <p className="text-[#8A9BB0] text-xs text-center md:text-right">
          © 2021 CMR Group. All rights reserved.
          This website and its content are affiliated with or endorsed by Usman Hamzat, Founder of CMR Group. The information provided constitute an official representation of CMR Group's views, products(pre/post-launch), or services.
        </p>
      </div>
    </footer>
  );
}