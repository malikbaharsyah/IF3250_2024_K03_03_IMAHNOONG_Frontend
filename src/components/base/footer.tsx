

const LINKS = [
    {
      id :1,
      title: "Telephone",
      items: ["+6204846468329"],
    },
    {
      id :2,
      title: "Whatsapp",
      items: ["+6204846468329"],
    },
    {
      id :3,
      title: "E-mail",
      items: ["logo@gmail.com"],
    },
    {
      id :4,
      title: "Content",
      items: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    },
  ];

function Footer() {
  return (
    <footer className="relative bg-[url('../../public/Bg_Footer.svg')] bg-cover bg-no-repeat bg-[length:100vw] px-[5vw] py-[5vw]">
        <div className="container flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-[1vw]">
                <div className="text-white text-[2.5vw] font-semibold">
                    <p>Logo/Web Name</p>
                </div>
                <div className="text-white text-[1vw] font-normal w-[20%]">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                </div>
            </div>
            <div className="flex justify-between">
                {LINKS.map(({ title, items }) => (
                    <div key={title}>
                        <div className="text-white text-[1.5vw] font-semibold">{title}</div>
                        {items.map((link) => (
                            <p key={link} className="text-white text-[1vw] font-normal">{link}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </footer>
  );
}

export default Footer;